import { create } from 'zustand';
import api from './api';

// Token key used in localStorage and cookie
const TOKEN_KEY = 'aurora_token';

// Lightweight cookie helpers (avoids needing js-cookie as a dep)
function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict`;
}

function deleteCookie(name: string) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Strict`;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  initialized: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchMe: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  loading: false,
  initialized: false,
  isAdmin: false,

  login: async (email, password) => {
    set({ loading: true });
    try {
      const { data } = await api.post('/auth/login', { email, password });
      const token: string = data.token;
      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        setCookie(TOKEN_KEY, token, 7); // 7 days, matches JWT expiry
      }
      set({ user: data, token, isAdmin: data.role === 'admin', initialized: true });
    } finally {
      set({ loading: false });
    }
  },

  register: async (name, email, password) => {
    set({ loading: true });
    try {
      const { data } = await api.post('/auth/register', { name, email, password });
      const token: string = data.token;
      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        setCookie(TOKEN_KEY, token, 7);
      }
      set({ user: data, token, isAdmin: data.role === 'admin', initialized: true });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
    } catch {
      // Ignore errors — clear client state regardless
    } finally {
      localStorage.removeItem(TOKEN_KEY);
      deleteCookie(TOKEN_KEY);
      set({ user: null, token: null, isAdmin: false, initialized: true });
    }
  },

  fetchMe: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get('/auth/me');
      const savedToken = typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;
      set({
        user: data,
        token: savedToken,
        isAdmin: data.role === 'admin',
        initialized: true,
      });
    } catch {
      localStorage.removeItem(TOKEN_KEY);
      deleteCookie(TOKEN_KEY);
      set({ user: null, token: null, isAdmin: false, initialized: true });
    } finally {
      set({ loading: false });
    }
  },
}));
