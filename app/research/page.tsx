import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { ResearchMedia } from "../components/ResearchMedia";
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
              <div className="research-detail-visual"><ResearchMedia slug={area.slug} /></div>
              <div className="research-detail-copy">
                <p className="research-index">TOPIC {area.number}</p>
                <h2>{area.title}</h2>
                <p>{area.description}</p>
                <ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
