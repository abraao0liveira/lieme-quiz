import clsx from 'clsx';
import type { Question } from '../../types/quiz';
import { SourceCitation } from '../quiz/SourceCitation';
import { ExplanationBlock } from '../quiz/ExplanationBlock';
import { AlternativeButton } from '../quiz/AlternativeButton';
import { Badge } from '../ui/Badge';

export function StudyQuestionCard({
  question,
  selectedAlternativeId,
  onSelect,
}: {
  question: Question;
  selectedAlternativeId: string | null;
  onSelect: (alternativeId: string) => void;
}) {
  const isRevealed = selectedAlternativeId !== null;

  return (
    <div className="animate-fade-in-up rounded-2xl border border-lieme-ink/10 bg-white/70 p-6 shadow-sm sm:p-8">
      <div className="mb-6 space-y-3">
        {question.statement.split('\n\n').map((paragraph, index) => (
          <p key={index} className="whitespace-pre-line text-base leading-relaxed text-lieme-ink sm:text-lg">
            {paragraph}
          </p>
        ))}
        <SourceCitation source={question.source} />
      </div>

      <div className="mb-6 space-y-3">
        {question.alternatives.map((alternative, index) => {
          if (!isRevealed) {
            return (
              <AlternativeButton
                key={alternative.id}
                label={String.fromCharCode(65 + index)}
                text={alternative.text}
                selected={false}
                onSelect={() => onSelect(alternative.id)}
              />
            );
          }

          const isCorrect = alternative.id === question.correctAlternativeId;
          const isUserChoice = alternative.id === selectedAlternativeId;
          const isWrongChoice = isUserChoice && !isCorrect;

          return (
            <div
              key={alternative.id}
              className={clsx(
                'flex items-start gap-3 rounded-xl border p-4',
                isCorrect && 'border-lieme-success/40 bg-lieme-success/10',
                isWrongChoice && 'border-lieme-error/40 bg-lieme-error/10',
                !isCorrect && !isWrongChoice && 'border-lieme-ink/10 bg-white/60',
              )}
            >
              <span
                className={clsx(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase',
                  isCorrect && 'bg-lieme-success text-white',
                  isWrongChoice && 'bg-lieme-error text-white',
                  !isCorrect && !isWrongChoice && 'bg-lieme-cream-alt text-lieme-ink-soft',
                )}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 pt-0.5 text-sm leading-relaxed sm:text-base">{alternative.text}</span>
              {isCorrect && <Badge tone="success">Correta</Badge>}
              {isWrongChoice && <Badge tone="error">Sua resposta</Badge>}
            </div>
          );
        })}
      </div>

      {isRevealed && <ExplanationBlock text={question.explanation} />}
    </div>
  );
}
