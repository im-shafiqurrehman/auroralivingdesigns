import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="font-playfair text-gold text-sm tracking-[0.3em] uppercase mb-6">
        404
      </div>
      <h1 className="font-playfair text-4xl md:text-5xl font-normal mb-4 max-w-lg leading-tight">
        Page Not Found
      </h1>
      <div className="gold-divider max-w-xs mx-auto mb-6" />
      <p className="text-aurora-muted text-base font-light mb-10 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/products" className="btn-ghost">
          Browse Products
        </Link>
      </div>
    </div>
  );
}
