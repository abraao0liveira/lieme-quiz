import { createContext, useReducer, type Dispatch, type ReactNode } from 'react';
import type { Question } from '../types/quiz';
import type { QuizAttempt, QuizMode } from '../types/attempt';

export interface QuizSessionState {
  mode: QuizMode | null;
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string>;
  lastAttempt: QuizAttempt | null;
}

const initialState: QuizSessionState = {
  mode: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  lastAttempt: null,
};

type QuizSessionAction =
  | { type: 'START'; mode: QuizMode; questions: Question[] }
  | { type: 'ANSWER'; questionId: string; alternativeId: string }
  | { type: 'NEXT' }
  | { type: 'PREVIOUS' }
  | { type: 'GOTO'; index: number }
  | { type: 'FINISH'; attempt: QuizAttempt }
  | { type: 'RESET' };

function quizSessionReducer(state: QuizSessionState, action: QuizSessionAction): QuizSessionState {
  switch (action.type) {
    case 'START':
      return {
        mode: action.mode,
        questions: action.questions,
        currentIndex: 0,
        answers: {},
        lastAttempt: null,
      };
    case 'ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.alternativeId },
      };
    case 'NEXT':
      return {
        ...state,
        currentIndex: Math.min(state.currentIndex + 1, state.questions.length - 1),
      };
    case 'PREVIOUS':
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      };
    case 'GOTO':
      return {
        ...state,
        currentIndex: Math.max(0, Math.min(action.index, state.questions.length - 1)),
      };
    case 'FINISH':
      return { ...state, lastAttempt: action.attempt };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export interface QuizSessionContextValue {
  state: QuizSessionState;
  dispatch: Dispatch<QuizSessionAction>;
}

export const QuizSessionContext = createContext<QuizSessionContextValue | null>(null);

export function QuizSessionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizSessionReducer, initialState);
  return <QuizSessionContext.Provider value={{ state, dispatch }}>{children}</QuizSessionContext.Provider>;
}
