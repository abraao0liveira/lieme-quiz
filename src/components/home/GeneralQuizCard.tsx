export function GeneralQuizCard({
  questionCount,
  ctaLabel = 'Começar quiz geral →',
  onSelect,
}: {
  questionCount: number;
  ctaLabel?: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex h-full w-full flex-col items-start gap-2 rounded-2xl border border-lieme-burgundy/30 bg-lieme-burgundy p-6 text-left text-lieme-cream shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-gold"
    >
      <span className="rounded-full bg-lieme-cream/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
        {questionCount} questões
      </span>
      <h3 className="font-serif text-xl font-semibold">Quiz Geral</h3>
      <p className="text-sm text-lieme-cream/85">
        Todas as questões do caderno, misturadas — a melhor forma de simular a prova completa.
      </p>
      <span className="mt-auto pt-2 text-sm font-semibold underline-offset-2 group-hover:underline">{ctaLabel}</span>
    </button>
  );
}
