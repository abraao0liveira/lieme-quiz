import type { ReactNode } from 'react';
import { Header } from './Header';

export function PageShell({ children, watermark = false }: { children: ReactNode; watermark?: boolean }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-lieme-cream">
      {watermark && (
        <img
          src="/logo-seal.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] opacity-[0.06] sm:h-[36rem] sm:w-[36rem]"
        />
      )}
      <div className="relative">
        <Header />
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-4 sm:px-6">{children}</main>
      </div>
    </div>
  );
}
