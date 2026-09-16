export function ExplanationBlock({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-lieme-cream-alt/60 p-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-lieme-ink-soft">Explicação</p>
      <p className="whitespace-pre-line text-sm leading-relaxed text-lieme-ink">{text}</p>
    </div>
  );
}
