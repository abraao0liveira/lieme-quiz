import clsx from 'clsx';

export function QuestionNavigator({
  total,
  currentIndex,
  isAnswered,
  onNavigate,
}: {
  total: number;
  currentIndex: number;
  isAnswered: (index: number) => boolean;
  onNavigate: (index: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-lieme-ink/10 bg-white/60 p-4 shadow-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-lieme-ink-soft">Ir para questão</p>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: total }, (_, index) => {
          const current = index === currentIndex;
          const answered = isAnswered(index);
          return (
            <button
              key={index}
              type="button"
              onClick={() => onNavigate(index)}
              aria-current={current}
              aria-label={`Questão ${index + 1}${answered ? ' (respondida)' : ''}`}
              className={clsx(
                'flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy',
                current
                  ? 'bg-lieme-burgundy text-lieme-cream'
                  : answered
                    ? 'bg-lieme-burgundy/15 text-lieme-burgundy hover:bg-lieme-burgundy/25'
                    : 'bg-lieme-cream-alt text-lieme-ink-soft hover:bg-lieme-ink/10',
              )}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
