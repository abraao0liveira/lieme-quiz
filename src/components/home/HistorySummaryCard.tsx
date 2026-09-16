import { Link } from 'react-router-dom';
import { EmptyState } from '../ui/EmptyState';
import { modeLabel } from '../../lib/labels';
import type { QuizAttempt } from '../../types/attempt';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
}

export function HistorySummaryCard({
  hasHistory,
  attemptCount,
  averagePercentage,
  lastAttempt,
}: {
  hasHistory: boolean;
  attemptCount: number;
  averagePercentage: number;
  lastAttempt: QuizAttempt | null;
}) {
  if (!hasHistory) {
    return <EmptyState title="Você ainda não fez nenhum quiz" description="Escolha o quiz geral ou um tema acima para começar a estudar!" />;
  }

  const lastLabel = lastAttempt ? modeLabel(lastAttempt.mode, { short: true }) : '';

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-lieme-ink/10 bg-white/60 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-6">
        <div>
          <p className="text-2xl font-serif font-semibold text-lieme-ink">{attemptCount}</p>
          <p className="text-xs text-lieme-ink-soft">tentativas</p>
        </div>
        <div>
          <p className="text-2xl font-serif font-semibold text-lieme-ink">{averagePercentage}%</p>
          <p className="text-xs text-lieme-ink-soft">média geral</p>
        </div>
        {lastAttempt && (
          <div>
            <p className="text-2xl font-serif font-semibold text-lieme-ink">{lastAttempt.overallPercentage}%</p>
            <p className="text-xs text-lieme-ink-soft">
              última ({lastLabel}, {formatDate(lastAttempt.completedAt)})
            </p>
          </div>
        )}
      </div>
      <Link to="/history" className="whitespace-nowrap text-sm font-semibold text-lieme-burgundy hover:underline">
        Ver histórico completo →
      </Link>
    </div>
  );
}
