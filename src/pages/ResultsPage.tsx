import { useEffect, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { PageShell } from '../components/layout/PageShell';
import { ScoreSummary } from '../components/results/ScoreSummary';
import { TopicBreakdownList } from '../components/results/TopicBreakdownList';
import { RecommendationBanner } from '../components/results/RecommendationBanner';
import { MissedQuestionCard } from '../components/results/MissedQuestionCard';
import { Button } from '../components/ui/Button';
import { topicsById } from '../data/topics';
import { useQuizSession } from '../hooks/useQuizSession';
import type { AnswerRecord } from '../types/attempt';
import type { Question, TopicId } from '../types/quiz';

interface MissedEntry {
  question: Question;
  answer: AnswerRecord;
}

export function ResultsPage() {
  const navigate = useNavigate();
  const { lastAttempt, questions, reset } = useQuizSession();

  const missedByTopic = useMemo(() => {
    if (!lastAttempt) return [] as [TopicId, MissedEntry[]][];

    const questionById = new Map(questions.map((question) => [question.id, question]));
    const groups = new Map<TopicId, MissedEntry[]>();

    for (const answer of lastAttempt.answers) {
      if (answer.isCorrect) continue;
      const question = questionById.get(answer.questionId);
      if (!question) continue;

      const bucket = groups.get(question.topicId);
      if (bucket) {
        bucket.push({ question, answer });
      } else {
        groups.set(question.topicId, [{ question, answer }]);
      }
    }

    return Array.from(groups.entries());
  }, [lastAttempt, questions]);

  useEffect(() => {
    if (lastAttempt && lastAttempt.overallPercentage >= 80) {
      confetti({ particleCount: 140, spread: 80, origin: { y: 0.3 } });
    }
  }, [lastAttempt]);

  if (!lastAttempt) {
    return <Navigate to="/" replace />;
  }

  function handleRetry() {
    reset();
    navigate('/');
  }

  return (
    <PageShell watermark>
      <div className="space-y-6 pt-4">
        <ScoreSummary
          totalCorrect={lastAttempt.totalCorrect}
          totalQuestions={lastAttempt.totalQuestions}
          overallPercentage={lastAttempt.overallPercentage}
        />

        <RecommendationBanner
          overallPercentage={lastAttempt.overallPercentage}
          weakestTopicId={lastAttempt.weakestTopicId}
          topicScores={lastAttempt.topicScores}
        />

        {lastAttempt.topicScores.length > 1 && <TopicBreakdownList topicScores={lastAttempt.topicScores} />}

        {missedByTopic.length > 0 && (
          <div className="space-y-6">
            <h2 className="font-serif text-xl font-semibold text-lieme-ink">Questões para revisar</h2>
            {missedByTopic.map(([topicId, entries]) => (
              <div key={topicId} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-lieme-burgundy">
                  {topicsById[topicId]?.name ?? topicId}
                </h3>
                {entries.map(({ question, answer }) => (
                  <MissedQuestionCard key={question.id} question={question} answer={answer} />
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button onClick={handleRetry}>Fazer outro quiz</Button>
          <Button variant="secondary" onClick={() => navigate('/history')}>
            Ver histórico
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
