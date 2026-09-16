import { topicsById } from '../../data/topics';
import type { TopicScore } from '../../types/attempt';
import type { TopicId } from '../../types/quiz';

export function RecommendationBanner({
  overallPercentage,
  weakestTopicId,
  topicScores,
}: {
  overallPercentage: number;
  weakestTopicId: TopicId | null;
  topicScores: TopicScore[];
}) {
  if (overallPercentage >= 80) {
    return (
      <div className="rounded-2xl border border-lieme-success/30 bg-lieme-success/10 p-5 text-center">
        <p className="font-serif text-lg font-semibold text-lieme-success">Excelente desempenho! 🎉</p>
        <p className="text-sm text-lieme-ink-soft">Você está muito bem preparado neste conteúdo. Continue revisando para manter o nível.</p>
      </div>
    );
  }

  if (!weakestTopicId) {
    return (
      <div className="rounded-2xl border border-lieme-ink/10 bg-lieme-cream-alt/60 p-5 text-center">
        <p className="text-sm text-lieme-ink">Revise as questões erradas abaixo para fortalecer esse tema.</p>
      </div>
    );
  }

  const weakest = topicScores.find((score) => score.topicId === weakestTopicId);

  return (
    <div className="rounded-2xl border border-lieme-burgundy/20 bg-lieme-burgundy/5 p-5 text-center">
      <p className="font-serif text-lg font-semibold text-lieme-burgundy">
        Você deveria revisar {topicsById[weakestTopicId]?.name}
        {weakest ? ` — ${weakest.percentage}% de acerto` : ''}.
      </p>
      <p className="text-sm text-lieme-ink-soft">Veja abaixo as questões erradas desse tema, com explicação detalhada.</p>
    </div>
  );
}
