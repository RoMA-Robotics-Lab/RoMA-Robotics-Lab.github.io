"use client";

import { useEffect, useState } from "react";
import { domesticPublications, publications, workshopPublications } from "../site-data";

type PublicationEntry = {
  year: string;
  venueFull: string;
  title: string;
  titleKo?: string;
  markedAuthors: string;
  links?: { label: string; url: string }[];
};

type SectionId = "international" | "domestic" | "workshops";

type PublicationSection = {
  id: SectionId;
  label: string;
  title: string;
  description: string;
  papers: PublicationEntry[];
};

const publicationSections: PublicationSection[] = [
  {
    id: "international",
    label: "International",
    title: "International Journals & Conferences",
    description: "Peer-reviewed international journal articles and conference papers.",
    papers: publications,
  },
  {
    id: "domestic",
    label: "Domestic",
    title: "Domestic Journals & Conferences",
    description: "Domestic journal articles and conference papers.",
    papers: domesticPublications,
  },
  {
    id: "workshops",
    label: "Workshops & Others",
    title: "Workshops & Others",
    description: "Workshop papers, datasets, and other research outputs.",
    papers: workshopPublications,
  },
];

function MarkedAuthors({ authors }: { authors: string }) {
  return authors.split(/(Y(?:\.S)?\. Shin(?:\*|†)*)/g).map((part, index) =>
    /^Y(?:\.S)?\. Shin/.test(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  );
}

export function PublicationTabs() {
  const [activeId, setActiveId] = useState<SectionId>("international");

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1) as SectionId;
      if (publicationSections.some((section) => section.id === hash)) setActiveId(hash);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activeSection = publicationSections.find((section) => section.id === activeId) ?? publicationSections[0];
  const years = [...new Set(activeSection.papers.map((paper) => paper.year))];

  const selectTab = (id: SectionId) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + publicationSections.length) % publicationSections.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % publicationSections.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = publicationSections.length - 1;
    const nextId = publicationSections[nextIndex].id;
    selectTab(nextId);
    document.getElementById(`publication-tab-${nextId}`)?.focus();
  };

  return (
    <>
      <div className="publication-tabs" role="tablist" aria-label="Publication categories">
        {publicationSections.map((section, index) => (
          <button
            id={`publication-tab-${section.id}`}
            key={section.id}
            type="button"
            role="tab"
            aria-selected={activeId === section.id}
            aria-controls={`publication-panel-${section.id}`}
            tabIndex={activeId === section.id ? 0 : -1}
            onClick={() => selectTab(section.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {section.label}
          </button>
        ))}
      </div>

      <section
        className="publication-category publication-tab-panel"
        id={`publication-panel-${activeSection.id}`}
        role="tabpanel"
        aria-labelledby={`publication-tab-${activeSection.id}`}
      >
        <header className="publication-category-heading">
          <h2>{activeSection.title}</h2>
          <p>{activeSection.description}</p>
        </header>
        {years.map((year) => (
          <section className="publication-year" key={`${activeSection.id}-${year}`}>
            <h3>{year}</h3>
            <ol>
              {activeSection.papers.filter((paper) => paper.year === year).map((paper) => (
                <li key={paper.title}>
                  <p className="publication-venue">{paper.venueFull}</p>
                  <h4>
                    {paper.title}
                    {paper.titleKo ? <span>{paper.titleKo}</span> : null}
                  </h4>
                  <p className="publication-authors"><MarkedAuthors authors={paper.markedAuthors} /></p>
                  {paper.links && paper.links.length > 0 ? (
                    <div className="publication-links" aria-label={`${paper.title} links`}>
                      {paper.links.map((link) => (
                        <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </section>
    </>
  );
}
