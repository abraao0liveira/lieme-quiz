import type { Question } from '../../types/quiz';
import type { AnswerRecord } from '../../types/attempt';
import { SourceCitation } from '../quiz/SourceCitation';
import { ExplanationBlock } from '../quiz/ExplanationBlock';

export function MissedQuestionCard({ question, answer }: { question: Question; answer: AnswerRecord }) {
  const correctAlternative = question.alternatives.find((alt) => alt.id === question.correctAlternativeId);
  const selectedAlternative = question.alternatives.find((alt) => alt.id === answer.selectedAlternativeId);

  return (
    <div className="rounded-2xl border border-lieme-error/20 bg-white/70 p-6 shadow-sm">
      <div className="mb-4 space-y-2">
        {question.statement.split('\n\n').map((paragraph, index) => (
          <p key={index} className="whitespace-pre-line text-sm leading-relaxed text-lieme-ink sm:text-base">
            {paragraph}
          </p>
        ))}
        <SourceCitation source={question.source} />
      </div>

      <div className="mb-3 space-y-1 text-sm">
        <p className="text-lieme-error">
          <span className="font-semibold">Sua resposta: </span>
          {selectedAlternative ? selectedAlternative.text : 'Não respondida'}
        </p>
        <p className="text-lieme-success">
          <span className="font-semibold">Resposta correta: </span>
          {correctAlternative?.text}
        </p>
      </div>

      <ExplanationBlock text={question.explanation} />
    </div>
  );
}
