import { useState } from 'react';
import { loadAttempts } from '../lib/storage';
import type { QuizAttempt } from '../types/attempt';

export function useAttemptHistory() {
  const [attempts] = useState<QuizAttempt[]>(() => loadAttempts());

  const averagePercentage =
    attempts.length > 0
      ? Math.round(attempts.reduce((sum, attempt) => sum + attempt.overallPercentage, 0) / attempts.length)
      : 0;

  return {
    attempts,
    hasHistory: attempts.length > 0,
    attemptCount: attempts.length,
    averagePercentage,
    lastAttempt: attempts[0] ?? null,
  };
}
