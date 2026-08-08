import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { ResearchVisual } from "../components/ResearchVisual";
import { researchAreas } from "../site-data";

export const metadata: Metadata = { title: "Research | RoMA Lab" };

export default function ResearchPage() {
  return (
    <>
      <PageHeader eyebrow="RESEARCH" title="Research Areas" description="From robust mapping to spatial intelligence and real-world robotic applications." />
      <section className="content-section">
        <div className="site-width research-page-list">
          {researchAreas.map((area) => (
            <article className="research-detail" id={area.slug} key={area.slug}>
              <div className="research-detail-visual"><ResearchVisual type={area.visual} label={area.number} /></div>
              <div className="research-detail-copy">
                <p className="research-index">TOPIC {area.number}</p>
                <h2>{area.title}</h2>
                <h3>{area.korean}</h3>
                <p>{area.description}</p>
                <p className="korean-copy">{area.descriptionKo}</p>
                <ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
