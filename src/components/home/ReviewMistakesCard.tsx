import clsx from 'clsx';
import { Badge } from '../ui/Badge';

export function ReviewMistakesCard({
  hasHistory,
  mistakeCount,
  disabledForStudy,
  onSelect,
}: {
  hasHistory: boolean;
  mistakeCount: number;
  disabledForStudy?: boolean;
  onSelect: () => void;
}) {
  const hasMistakes = mistakeCount > 0;
  const enabled = hasHistory && hasMistakes && !disabledForStudy;

  let description: string;
  if (disabledForStudy) {
    description = 'Revisão de erros só está disponível no modo Quiz — não é um conjunto fixo de questões para estudar.';
  } else if (!hasHistory) {
    description = 'Faça um quiz primeiro para gerar questões de revisão.';
  } else if (!hasMistakes) {
    description = 'Nenhum erro pendente.';
  } else {
    description = `${mistakeCount} ${mistakeCount === 1 ? 'questão' : 'questões'} para revisar, com base nos seus últimos erros.`;
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={!enabled}
      className={clsx(
        'group flex h-full w-full flex-col items-start gap-2 rounded-2xl border p-6 text-left shadow-sm transition',
        enabled
          ? 'border-lieme-gold/30 bg-lieme-gold/5 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy'
          : 'cursor-not-allowed border-lieme-ink/10 bg-white/30 opacity-70',
      )}
    >
      {enabled && <Badge tone="gold">{mistakeCount} {mistakeCount === 1 ? 'questão' : 'questões'}</Badge>}
      <h3 className="font-serif text-lg font-semibold text-lieme-ink">Revisão de Erros</h3>
      <p className="text-sm text-lieme-ink-soft">{description}</p>
      {enabled && (
        <span className="mt-auto pt-2 text-sm font-semibold text-lieme-burgundy group-hover:underline">Revisar erros →</span>
      )}
    </button>
  );
}
