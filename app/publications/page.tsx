import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { PublicationTabs } from "./PublicationTabs";

export const metadata: Metadata = { title: "Publications | RoMA Lab" };

export default function PublicationsPage() {
  return (
    <>
      <PageHeader eyebrow="PUBLICATIONS" title="Publications" description="International journals and conference papers in robotics, perception, and intelligent mobility." />
      <section className="content-section">
        <div className="site-width publication-page">
          <p className="publication-note"><strong>Bold</strong>: RoMA Lab member · <strong>*</strong>: first author · <strong>†</strong>: corresponding author</p>
          <PublicationTabs />
        </div>
      </section>
    </>
  );
}
