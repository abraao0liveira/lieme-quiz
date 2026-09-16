import type { QuizAttempt } from '../types/attempt';

const STORAGE_KEY = 'lieme-quiz:v1:attempts';

export function loadAttempts(): QuizAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveAttempt(attempt: QuizAttempt): QuizAttempt[] {
  const attempts = [attempt, ...loadAttempts()];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
  } catch {
    // localStorage indisponível (modo privado, quota excedida, etc.) — segue sem persistir.
  }
  return attempts;
}
