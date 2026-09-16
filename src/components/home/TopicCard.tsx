import type { Topic } from '../../types/quiz';

export function TopicCard({
  topic,
  questionCount,
  ctaLabel = 'Começar quiz →',
  onSelect,
}: {
  topic: Topic;
  questionCount: number;
  ctaLabel?: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex h-full flex-col items-start gap-2 rounded-2xl border border-lieme-ink/10 bg-white/60 p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy"
    >
      <span className="rounded-full bg-lieme-burgundy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lieme-burgundy">
        {questionCount} questões
      </span>
      <h3 className="font-serif text-lg font-semibold text-lieme-ink">{topic.name}</h3>
      <p className="text-sm text-lieme-ink-soft">{topic.description}</p>
      <span className="mt-auto pt-2 text-sm font-semibold text-lieme-burgundy group-hover:underline">{ctaLabel}</span>
    </button>
  );
}
