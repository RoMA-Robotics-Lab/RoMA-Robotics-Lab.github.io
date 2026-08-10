type NewsTextProps = {
  text: string;
  link?: { label: string; url: string };
};

export function NewsText({ text, link }: NewsTextProps) {
  if (!link) return <>{text}</>;

  const linkStart = text.indexOf(link.label);
  if (linkStart === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, linkStart)}
      <a className="news-text-link" href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
      {text.slice(linkStart + link.label.length)}
    </>
  );
}
