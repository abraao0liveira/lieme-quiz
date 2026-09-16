import clsx from 'clsx';

export function ScoreSummary({
  totalCorrect,
  totalQuestions,
  overallPercentage,
}: {
  totalCorrect: number;
  totalQuestions: number;
  overallPercentage: number;
}) {
  const tone = overallPercentage >= 80 ? 'text-lieme-success' : overallPercentage >= 50 ? 'text-lieme-burgundy' : 'text-lieme-error';

  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-lieme-ink/10 bg-white/70 p-8 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-lieme-ink-soft">Sua pontuação</p>
      <p className={clsx('font-serif text-5xl font-bold sm:text-6xl', tone)}>{overallPercentage}%</p>
      <p className="text-sm text-lieme-ink-soft">
        {totalCorrect} de {totalQuestions} questões corretas
      </p>
    </div>
  );
}
