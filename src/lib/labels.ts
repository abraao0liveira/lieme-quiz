import { topicsById } from '../data/topics';
import type { QuizMode } from '../types/attempt';

export function modeLabel(mode: QuizMode, opts?: { short?: boolean }): string {
  if (mode === 'general') return 'Quiz Geral';
  if (mode === 'review-mistakes') return 'Revisão de Erros';
  const topic = topicsById[mode];
  if (!topic) return mode;
  return opts?.short ? topic.shortName : topic.name;
}
