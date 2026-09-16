import type { ReactNode } from 'react';

export function EmptyState({ title, description }: { title: string; description: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-lieme-ink/15 bg-lieme-cream-alt/40 p-6 text-center">
      <p className="font-serif text-lg font-semibold text-lieme-ink">{title}</p>
      <p className="mt-1 text-sm text-lieme-ink-soft">{description}</p>
    </div>
  );
}
