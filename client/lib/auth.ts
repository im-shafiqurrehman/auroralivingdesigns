import { create } from 'zustand';
import api from './api';

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  token?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  initialized: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchMe: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  initialized: false,

  login: async (email, password) => {
    set({ loading: true });
    try {
      const { data } = await api.post('/auth/login', { email, password });
      if (data.token) localStorage.setItem('aurora_token', data.token);
      set({ user: data, initialized: true });
    } finally {
      set({ loading: false });
    }
  },

  register: async (name, email, password) => {
    set({ loading: true });
    try {
      const { data } = await api.post('/auth/register', { name, email, password });
      if (data.token) localStorage.setItem('aurora_token', data.token);
      set({ user: data, initialized: true });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
    } finally {
      localStorage.removeItem('aurora_token');
      set({ user: null, initialized: true });
    }
  },

  fetchMe: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get('/auth/me');
      set({ user: data, initialized: true });
    } catch {
      localStorage.removeItem('aurora_token');
      set({ user: null, initialized: true });
    } finally {
      set({ loading: false });
    }
  },
}));
