import { useContext, useMemo } from 'react';
import { QuizSessionContext } from '../context/QuizSessionContext';
import { allQuestions, questionsByTopic } from '../data/questions';
import { shuffle } from '../lib/shuffle';
import { scoreAttempt } from '../lib/scoring';
import { saveAttempt, loadAttempts } from '../lib/storage';
import { selectMistakeQuestions } from '../lib/reviewMistakes';
import type { QuizMode, AnswerRecord, QuizAttempt } from '../types/attempt';
import type { Question } from '../types/quiz';

function buildShuffledQuestions(mode: QuizMode): Question[] {
  let base: Question[];
  if (mode === 'general') {
    base = allQuestions;
  } else if (mode === 'review-mistakes') {
    base = selectMistakeQuestions(loadAttempts(), allQuestions);
  } else {
    base = questionsByTopic[mode];
  }

  return shuffle(base).map((question) => ({
    ...question,
    alternatives: shuffle(question.alternatives),
  }));
}

export function useQuizSession() {
  const context = useContext(QuizSessionContext);
  if (!context) {
    throw new Error('useQuizSession deve ser usado dentro de um QuizSessionProvider');
  }
  const { state, dispatch } = context;

  const currentQuestion = state.questions[state.currentIndex] ?? null;
  const isLastQuestion = state.currentIndex === state.questions.length - 1;
  const isFirstQuestion = state.currentIndex === 0;
  const answeredCount = Object.keys(state.answers).length;

  const actions = useMemo(
    () => ({
      startQuiz(mode: QuizMode) {
        const questions = buildShuffledQuestions(mode);
        dispatch({ type: 'START', mode, questions });
      },
      selectAnswer(questionId: string, alternativeId: string) {
        dispatch({ type: 'ANSWER', questionId, alternativeId });
      },
      goToPrevious() {
        dispatch({ type: 'PREVIOUS' });
      },
      goToIndex(index: number) {
        dispatch({ type: 'GOTO', index });
      },
      goToNext(): QuizAttempt | null {
        if (!isLastQuestion) {
          dispatch({ type: 'NEXT' });
          return null;
        }

        const answers: AnswerRecord[] = state.questions.map((question) => {
          const selectedAlternativeId = state.answers[question.id] ?? null;
          return {
            questionId: question.id,
            topicId: question.topicId,
            selectedAlternativeId,
            correctAlternativeId: question.correctAlternativeId,
            isCorrect: selectedAlternativeId === question.correctAlternativeId,
          };
        });

        const scored = scoreAttempt(answers);
        const now = new Date().toISOString();
        const attempt: QuizAttempt = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          mode: state.mode ?? 'general',
          startedAt: now,
          completedAt: now,
          answers,
          totalCorrect: scored.totalCorrect,
          totalQuestions: scored.totalQuestions,
          overallPercentage: scored.overallPercentage,
          topicScores: scored.topicScores,
          weakestTopicId: scored.weakestTopicId,
        };

        saveAttempt(attempt);
        dispatch({ type: 'FINISH', attempt });
        return attempt;
      },
      reset() {
        dispatch({ type: 'RESET' });
      },
    }),
    [dispatch, isLastQuestion, state.answers, state.mode, state.questions],
  );

  return {
    mode: state.mode,
    questions: state.questions,
    currentIndex: state.currentIndex,
    currentQuestion,
    selectedAlternativeId: currentQuestion ? (state.answers[currentQuestion.id] ?? null) : null,
    isLastQuestion,
    isFirstQuestion,
    answers: state.answers,
    answeredCount,
    totalQuestions: state.questions.length,
    lastAttempt: state.lastAttempt,
    ...actions,
  };
}
