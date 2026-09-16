import type { TopicId } from './quiz';

export type QuizMode = 'general' | TopicId | 'review-mistakes';

export interface AnswerRecord {
  questionId: string;
  topicId: TopicId;
  selectedAlternativeId: string | null;
  correctAlternativeId: string;
  isCorrect: boolean;
}

export interface TopicScore {
  topicId: TopicId;
  correct: number;
  total: number;
  percentage: number;
}

export interface QuizAttempt {
  id: string;
  mode: QuizMode;
  startedAt: string;
  completedAt: string;
  answers: AnswerRecord[];
  totalCorrect: number;
  totalQuestions: number;
  overallPercentage: number;
  topicScores: TopicScore[];
  weakestTopicId: TopicId | null;
}
