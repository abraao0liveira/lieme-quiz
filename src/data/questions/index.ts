import type { Question, TopicId } from '../../types/quiz';
import { introducaoQuestions } from './introducao';
import { lesaoCorporalQuestions } from './lesao-corporal';
import { sexologiaForenseQuestions } from './sexologia-forense';

export const allQuestions: Question[] = [
  ...introducaoQuestions,
  ...lesaoCorporalQuestions,
  ...sexologiaForenseQuestions,
];

export const questionsByTopic: Record<TopicId, Question[]> = {
  introducao: introducaoQuestions,
  'lesao-corporal': lesaoCorporalQuestions,
  'sexologia-forense': sexologiaForenseQuestions,
};

if (import.meta.env.DEV) {
  for (const question of allQuestions) {
    const hasCorrectAlternative = question.alternatives.some(
      (alternative) => alternative.id === question.correctAlternativeId,
    );
    if (!hasCorrectAlternative) {
      throw new Error(
        `Questão "${question.id}" tem correctAlternativeId "${question.correctAlternativeId}" que não existe em suas alternativas.`,
      );
    }
    if (question.alternatives.length < 4 || question.alternatives.length > 5) {
      throw new Error(`Questão "${question.id}" deve ter 4 ou 5 alternativas, tem ${question.alternatives.length}.`);
    }
    if (!question.explanation.trim()) {
      throw new Error(`Questão "${question.id}" está sem explicação.`);
    }
  }

  const ids = new Set<string>();
  for (const question of allQuestions) {
    if (ids.has(question.id)) {
      throw new Error(`Id de questão duplicado: "${question.id}".`);
    }
    ids.add(question.id);
  }
}
