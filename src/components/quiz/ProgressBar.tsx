export function ProgressBar({ current, total }: { current: number; total: number }) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-xs font-medium text-lieme-ink-soft">
        <span>
          Questão {current} de {total}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-lieme-cream-alt">
        <div
          className="h-full rounded-full bg-lieme-burgundy transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
