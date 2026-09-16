export function SourceCitation({ source }: { source?: string }) {
  if (!source) return null;
  return <p className="text-xs italic text-lieme-ink-soft">{source}</p>;
}
