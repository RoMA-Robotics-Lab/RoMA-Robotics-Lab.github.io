import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { publications } from "../site-data";

export const metadata: Metadata = { title: "Publications | RoMA Lab" };

export default function PublicationsPage() {
  const years = [...new Set(publications.map((paper) => paper.year))];
  return (
    <>
      <PageHeader eyebrow="PUBLICATIONS" title="Publications" description="International journals and conference papers in robotics, perception, and intelligent mobility." />
      <section className="content-section">
        <div className="site-width publication-page">
          <p className="publication-note"><strong>Y. Shin</strong> indicates the principal investigator of RoMA Lab.</p>
          {years.map((year) => (
            <section className="publication-year" key={year}>
              <h2>{year}</h2>
              <ol>
                {publications.filter((paper) => paper.year === year).map((paper) => (
                  <li key={paper.title}>
                    <p className="publication-venue">{paper.venue}</p>
                    <h3>{paper.title}</h3>
                    <p>{paper.authors}</p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
