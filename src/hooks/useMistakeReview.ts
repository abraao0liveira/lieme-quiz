import { useState } from 'react';
import { loadAttempts } from '../lib/storage';
import { selectMistakeQuestions } from '../lib/reviewMistakes';
import { allQuestions } from '../data/questions';

export function useMistakeReview() {
  const [mistakeCount] = useState(() => selectMistakeQuestions(loadAttempts(), allQuestions).length);

  return {
    mistakeCount,
    hasMistakes: mistakeCount > 0,
  };
}
