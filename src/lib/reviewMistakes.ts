import type { QuizAttempt } from '../types/attempt';
import type { Question } from '../types/quiz';

/**
 * Builds the "questions you currently get wrong" set: for each question, only the most
 * recent attempt that included it counts (attempts are newest-first), so a question fixed
 * in a later attempt drops out even if it was missed long ago.
 */
export function selectMistakeQuestions(attempts: QuizAttempt[], allQuestions: Question[]): Question[] {
  const latestAnswerByQuestion = new Map<string, boolean>();

  for (const attempt of attempts) {
    for (const answer of attempt.answers) {
      if (!latestAnswerByQuestion.has(answer.questionId)) {
        latestAnswerByQuestion.set(answer.questionId, answer.isCorrect);
      }
    }
  }

  return allQuestions.filter((question) => latestAnswerByQuestion.get(question.id) === false);
}
