import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { PageShell } from '../components/layout/PageShell';
import { TopicCard } from '../components/home/TopicCard';
import { GeneralQuizCard } from '../components/home/GeneralQuizCard';
import { ReviewMistakesCard } from '../components/home/ReviewMistakesCard';
import { HistorySummaryCard } from '../components/home/HistorySummaryCard';
import { topics } from '../data/topics';
import { allQuestions, questionsByTopic } from '../data/questions';
import { useQuizSession } from '../hooks/useQuizSession';
import { useAttemptHistory } from '../hooks/useAttemptHistory';
import { useMistakeReview } from '../hooks/useMistakeReview';
import type { QuizMode } from '../types/attempt';

type HomeMode = 'quiz' | 'study';

export function HomePage() {
  const navigate = useNavigate();
  const { startQuiz } = useQuizSession();
  const history = useAttemptHistory();
  const mistakeReview = useMistakeReview();
  const [homeMode, setHomeMode] = useState<HomeMode>('quiz');

  function handleStart(mode: QuizMode) {
    if (homeMode === 'study') {
      navigate(`/study/${mode}`);
      return;
    }
    startQuiz(mode);
    navigate(`/quiz/${mode}`);
  }

  const isStudy = homeMode === 'study';

  return (
    <PageShell>
      <section className="pb-8 pt-6 text-center">
        <h1 className="font-serif text-3xl font-bold text-lieme-ink sm:text-4xl">Revisão de Medicina Legal</h1>
        <p className="mx-auto mt-3 max-w-xl text-lieme-ink-soft">
          Teste seus conhecimentos com o caderno de exercícios da LIEME e descubra exatamente o que revisar antes da prova.
        </p>
      </section>

      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-full border border-lieme-ink/10 bg-white/60 p-1 shadow-sm" role="tablist" aria-label="Modo">
          <button
            type="button"
            role="tab"
            aria-selected={!isStudy}
            onClick={() => setHomeMode('quiz')}
            className={clsx(
              'rounded-full px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy',
              !isStudy ? 'bg-lieme-burgundy text-lieme-cream' : 'text-lieme-ink-soft hover:text-lieme-ink',
            )}
          >
            Quiz
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isStudy}
            onClick={() => setHomeMode('study')}
            className={clsx(
              'rounded-full px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy',
              isStudy ? 'bg-lieme-burgundy text-lieme-cream' : 'text-lieme-ink-soft hover:text-lieme-ink',
            )}
          >
            Estudo
          </button>
        </div>
      </div>

      <section className="space-y-6">
        <GeneralQuizCard
          questionCount={allQuestions.length}
          ctaLabel={isStudy ? 'Estudar sem pontuação →' : 'Começar quiz geral →'}
          onSelect={() => handleStart('general')}
        />
        <ReviewMistakesCard
          hasHistory={history.hasHistory}
          mistakeCount={mistakeReview.mistakeCount}
          disabledForStudy={isStudy}
          onSelect={() => handleStart('review-mistakes')}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              questionCount={questionsByTopic[topic.id].length}
              ctaLabel={isStudy ? 'Estudar →' : 'Começar quiz →'}
              onSelect={() => handleStart(topic.id)}
            />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <HistorySummaryCard
          hasHistory={history.hasHistory}
          attemptCount={history.attemptCount}
          averagePercentage={history.averagePercentage}
          lastAttempt={history.lastAttempt}
        />
      </section>
    </PageShell>
  );
}
