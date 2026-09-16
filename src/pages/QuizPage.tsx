import { useCallback, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell';
import { ProgressBar } from '../components/quiz/ProgressBar';
import { QuestionCard } from '../components/quiz/QuestionCard';
import { QuestionNavigator } from '../components/quiz/QuestionNavigator';
import { Button } from '../components/ui/Button';
import { useQuizSession } from '../hooks/useQuizSession';

export function QuizPage() {
  const navigate = useNavigate();
  const {
    mode,
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedAlternativeId,
    answers,
    isLastQuestion,
    isFirstQuestion,
    selectAnswer,
    goToNext,
    goToPrevious,
    goToIndex,
  } = useQuizSession();

  const handleNext = useCallback(() => {
    const attempt = goToNext();
    if (attempt) {
      navigate('/results');
    }
  }, [goToNext, navigate]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!currentQuestion) return;

      const numberKey = Number(event.key);
      if (numberKey >= 1 && numberKey <= currentQuestion.alternatives.length) {
        const alternative = currentQuestion.alternatives[numberKey - 1];
        selectAnswer(currentQuestion.id, alternative.id);
        return;
      }

      if ((event.key === 'Enter' || event.key === 'ArrowRight') && selectedAlternativeId) {
        handleNext();
        return;
      }

      if (event.key === 'ArrowLeft' && !isFirstQuestion) {
        goToPrevious();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, selectedAlternativeId, selectAnswer, handleNext, isFirstQuestion, goToPrevious]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  if (!mode || !currentQuestion) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageShell>
      <div className="mb-4 flex justify-end">
        <Link to="/" className="text-sm font-semibold text-lieme-burgundy hover:underline">
          ← Início
        </Link>
      </div>

      <div className="mb-6">
        <ProgressBar current={currentIndex + 1} total={totalQuestions} />
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedAlternativeId={selectedAlternativeId}
        onSelect={(alternativeId) => selectAnswer(currentQuestion.id, alternativeId)}
      />

      <div className="mt-6 flex justify-between">
        <Button variant="secondary" onClick={goToPrevious} disabled={isFirstQuestion}>
          Voltar
        </Button>
        <Button onClick={handleNext} disabled={!selectedAlternativeId}>
          {isLastQuestion ? 'Ver resultado' : 'Próxima'}
        </Button>
      </div>

      <div className="mt-6">
        <QuestionNavigator
          total={totalQuestions}
          currentIndex={currentIndex}
          isAnswered={(index) => {
            const question = questions[index];
            return question ? question.id in answers : false;
          }}
          onNavigate={goToIndex}
        />
      </div>
    </PageShell>
  );
}
