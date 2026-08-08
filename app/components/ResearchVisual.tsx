export function ResearchVisual({ type, label }: { type: string; label?: string }) {
  return (
    <div className={`research-visual rv-${type}`} aria-hidden="true">
      <div className="rv-grid" />
      <i /><i /><i />
      {label && <span>{label}</span>}
    </div>
  );
}
