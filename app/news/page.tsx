import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { newsItems } from "../site-data";

export const metadata: Metadata = { title: "News | RoMA Lab" };

export default function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="NEWS" title="Lab News" description="Research publications, new members, awards, and events from RoMA Lab." />
      <section className="content-section">
        <div className="site-width news-page-list">
          {newsItems.map((item) => (
            <article key={`${item.date}-${item.text}`}>
              <time>{item.date}</time>
              <span>{item.category}</span>
              <div><h2>{item.text}</h2><p>{item.korean}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
