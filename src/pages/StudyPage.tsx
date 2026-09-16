import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell';
import { ProgressBar } from '../components/quiz/ProgressBar';
import { QuestionNavigator } from '../components/quiz/QuestionNavigator';
import { StudyQuestionCard } from '../components/study/StudyQuestionCard';
import { Button } from '../components/ui/Button';
import { allQuestions, questionsByTopic } from '../data/questions';
import type { TopicId } from '../types/quiz';

function isTopicId(value: string): value is TopicId {
  return value in questionsByTopic;
}

export function StudyPage() {
  const { mode } = useParams<{ mode: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const isValidMode = mode === 'general' || (mode ? isTopicId(mode) : false);
  const questions = !isValidMode ? [] : mode === 'general' ? allQuestions : questionsByTopic[mode as TopicId];
  const currentQuestion = questions[currentIndex] ?? null;
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === questions.length - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' && !isLastQuestion) {
        setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
      }
      if (event.key === 'ArrowLeft' && !isFirstQuestion) {
        setCurrentIndex((index) => Math.max(index - 1, 0));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLastQuestion, isFirstQuestion, questions.length]);

  if (!isValidMode || !currentQuestion) {
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
        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>

      <StudyQuestionCard
        question={currentQuestion}
        selectedAlternativeId={answers[currentQuestion.id] ?? null}
        onSelect={(alternativeId) => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: alternativeId }))}
      />

      <div className="mt-6 flex justify-between">
        <Button variant="secondary" onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))} disabled={isFirstQuestion}>
          Voltar
        </Button>
        <Button
          onClick={() => setCurrentIndex((index) => Math.min(index + 1, questions.length - 1))}
          disabled={isLastQuestion}
        >
          Próxima
        </Button>
      </div>

      <div className="mt-6">
        <QuestionNavigator
          total={questions.length}
          currentIndex={currentIndex}
          isAnswered={(index) => {
            const question = questions[index];
            return question ? question.id in answers : false;
          }}
          onNavigate={setCurrentIndex}
        />
      </div>
    </PageShell>
  );
}
