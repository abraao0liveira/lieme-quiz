import { topicsById } from '../../data/topics';
import type { TopicScore } from '../../types/attempt';

export function TopicBreakdownList({ topicScores }: { topicScores: TopicScore[] }) {
  return (
    <div className="rounded-2xl border border-lieme-ink/10 bg-white/70 p-6 shadow-sm">
      <h2 className="mb-4 font-serif text-lg font-semibold text-lieme-ink">Desempenho por tema</h2>
      <div className="space-y-4">
        {topicScores.map((score) => (
          <div key={score.topicId}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium text-lieme-ink">{topicsById[score.topicId]?.name ?? score.topicId}</span>
              <span className="text-lieme-ink-soft">
                {score.correct}/{score.total} ({score.percentage}%)
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-lieme-cream-alt">
              <div
                className="h-full rounded-full bg-lieme-burgundy transition-all duration-500 ease-out"
                style={{ width: `${score.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
