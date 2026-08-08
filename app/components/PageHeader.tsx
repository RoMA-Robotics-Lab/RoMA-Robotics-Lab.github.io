export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-header">
      <div className="site-width">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <div className="page-header-rule"><span /></div>
        <p className="page-description">{description}</p>
      </div>
    </section>
  );
}
