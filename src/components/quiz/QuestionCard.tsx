import type { Question } from '../../types/quiz';
import { AlternativeButton } from './AlternativeButton';
import { SourceCitation } from './SourceCitation';

export function QuestionCard({
  question,
  selectedAlternativeId,
  onSelect,
}: {
  question: Question;
  selectedAlternativeId: string | null;
  onSelect: (alternativeId: string) => void;
}) {
  return (
    <div key={question.id} className="animate-fade-in-up rounded-2xl border border-lieme-ink/10 bg-white/70 p-6 shadow-sm sm:p-8">
      <div className="mb-6 space-y-3">
        {question.statement.split('\n\n').map((paragraph, index) => (
          <p key={index} className="whitespace-pre-line text-base leading-relaxed text-lieme-ink sm:text-lg">
            {paragraph}
          </p>
        ))}
        <SourceCitation source={question.source} />
      </div>
      <div className="space-y-3">
        {question.alternatives.map((alternative, index) => (
          <AlternativeButton
            key={alternative.id}
            label={String.fromCharCode(65 + index)}
            text={alternative.text}
            selected={selectedAlternativeId === alternative.id}
            onSelect={() => onSelect(alternative.id)}
          />
        ))}
      </div>
    </div>
  );
}
