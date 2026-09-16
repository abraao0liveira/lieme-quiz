import type { ReactNode } from 'react';
import clsx from 'clsx';

type Tone = 'burgundy' | 'gold' | 'success' | 'error' | 'neutral';

const toneClasses: Record<Tone, string> = {
  burgundy: 'bg-lieme-burgundy/10 text-lieme-burgundy',
  gold: 'bg-lieme-gold/15 text-lieme-gold',
  success: 'bg-lieme-success/10 text-lieme-success',
  error: 'bg-lieme-error/10 text-lieme-error',
  neutral: 'bg-lieme-ink/5 text-lieme-ink-soft',
};

export function Badge({ tone = 'neutral', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide', toneClasses[tone])}>
      {children}
    </span>
  );
}
