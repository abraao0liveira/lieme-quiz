import clsx from 'clsx';

export function AlternativeButton({
  label,
  text,
  selected,
  onSelect,
}: {
  label: string;
  text: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={clsx(
        'flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy',
        selected
          ? 'border-lieme-burgundy bg-lieme-burgundy/10 text-lieme-ink'
          : 'border-lieme-ink/10 bg-white/60 text-lieme-ink hover:border-lieme-burgundy/40 hover:bg-lieme-burgundy/5',
      )}
    >
      <span
        className={clsx(
          'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase',
          selected ? 'bg-lieme-burgundy text-lieme-cream' : 'bg-lieme-cream-alt text-lieme-ink-soft',
        )}
      >
        {label}
      </span>
      <span className="pt-0.5 text-sm leading-relaxed sm:text-base">{text}</span>
    </button>
  );
}
