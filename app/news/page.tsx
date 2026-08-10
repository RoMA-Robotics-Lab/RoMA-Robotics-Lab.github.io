import type { Metadata } from "next";
import { NewsText } from "../components/NewsText";
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
              <div><h2><NewsText text={item.text} link={item.link} /></h2><p><NewsText text={item.korean} link={item.link} /></p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
