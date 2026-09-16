import type { AnswerRecord, TopicScore } from '../types/attempt';
import type { TopicId } from '../types/quiz';

export interface ScoreResult {
  topicScores: TopicScore[];
  totalCorrect: number;
  totalQuestions: number;
  overallPercentage: number;
  weakestTopicId: TopicId | null;
}

export function scoreAttempt(answers: AnswerRecord[]): ScoreResult {
  const byTopic = new Map<TopicId, AnswerRecord[]>();
  for (const answer of answers) {
    const bucket = byTopic.get(answer.topicId);
    if (bucket) {
      bucket.push(answer);
    } else {
      byTopic.set(answer.topicId, [answer]);
    }
  }

  const topicScores: TopicScore[] = Array.from(byTopic.entries()).map(([topicId, records]) => {
    const correct = records.filter((record) => record.isCorrect).length;
    return {
      topicId,
      correct,
      total: records.length,
      percentage: Math.round((correct / records.length) * 100),
    };
  });

  const totalCorrect = answers.filter((answer) => answer.isCorrect).length;
  const totalQuestions = answers.length;
  const overallPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const weakestTopicId =
    topicScores.length > 1
      ? topicScores.reduce((worst, current) => (current.percentage < worst.percentage ? current : worst)).topicId
      : null;

  return { topicScores, totalCorrect, totalQuestions, overallPercentage, weakestTopicId };
}
