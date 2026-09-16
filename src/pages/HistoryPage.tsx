import { Link } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell';
import { EmptyState } from '../components/ui/EmptyState';
import { Badge } from '../components/ui/Badge';
import { useAttemptHistory } from '../hooks/useAttemptHistory';
import { modeLabel } from '../lib/labels';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function HistoryPage() {
  const { attempts, hasHistory } = useAttemptHistory();

  return (
    <PageShell>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-2xl font-bold text-lieme-ink">Histórico de tentativas</h1>
        <Link to="/" className="text-sm font-semibold text-lieme-burgundy hover:underline">
          ← Voltar
        </Link>
      </div>

      {!hasHistory ? (
        <EmptyState title="Nenhuma tentativa registrada ainda" description="Faça um quiz na página inicial para ver seu histórico aqui." />
      ) : (
        <div className="space-y-3">
          {attempts.map((attempt) => (
            <div
              key={attempt.id}
              className="flex flex-col gap-2 rounded-xl border border-lieme-ink/10 bg-white/60 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-lieme-ink">{modeLabel(attempt.mode)}</p>
                <p className="text-xs text-lieme-ink-soft">{formatDate(attempt.completedAt)}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-lieme-ink-soft">
                  {attempt.totalCorrect}/{attempt.totalQuestions}
                </span>
                <Badge tone={attempt.overallPercentage >= 80 ? 'success' : attempt.overallPercentage >= 50 ? 'burgundy' : 'error'}>
                  {attempt.overallPercentage}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageShell>
  );
}
