import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "../components/PageHeader";
import { applyUrl, members } from "../site-data";

export const metadata: Metadata = { title: "People | RoMA Lab" };

export default function PeoplePage() {
  return (
    <>
      <PageHeader eyebrow="PEOPLE" title="Our Team" description="Researchers working across robotics, mobility, computer vision, and artificial intelligence." />
      <section className="content-section">
        <div className="site-width">
          <h2 className="subsection-title">Principal Investigator</h2>
          <article className="pi-profile">
            <div className="pi-avatar">
              <Image src="/young-sik-shin.jpg" alt="Young-Sik Shin" width={354} height={472} priority />
            </div>
            <div className="pi-main">
              <p className="overline">ASSISTANT PROFESSOR · PH.D.</p>
              <h2>Young-Sik Shin <span>신영식</span></h2>
              <p>School of Mechanical Engineering, College of Engineering<br />Kyungpook National University</p>
              <dl>
                <div><dt>Email</dt><dd><a href="mailto:yshin86@knu.ac.kr">yshin86@knu.ac.kr</a></dd></div>
                <div><dt>Office</dt><dd>Engineering Building 3, Room 303<br /><span lang="ko">공대3호관 303호</span></dd></div>
                <div><dt>Research</dt><dd>SLAM · Spatial Intelligence · Robotics & Mobility</dd></div>
              </dl>
              <div className="profile-actions">
                <a href="https://scholar.google.com/citations?user=gGfBRawAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
                <a href="https://orcid.org/0000-0002-9653-0633" target="_blank" rel="noreferrer">ORCID ↗</a>
              </div>
            </div>
            <aside className="pi-history">
              <h3>Experience</h3>
              <p><strong>2026–Present</strong><br />Assistant Professor, KNU</p>
              <p><strong>2019–2026</strong><br />Senior Researcher, KIMM</p>
              <h3>Education</h3>
              <p><strong>Ph.D. · M.S.</strong><br />Robotics Program, KAIST</p>
              <p><strong>B.S.</strong><br />Electrical Engineering, Inha University</p>
            </aside>
          </article>

          <div className="member-section-heading">
            <h2 className="subsection-title">Researchers</h2>
            <a href={applyUrl} target="_blank" rel="noreferrer">Join our team →</a>
          </div>
          <div className="member-grid">
            {members.map((member, index) => (
              <article className="member-card" key={member.name}>
                <div aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                <h3>{member.name}</h3>
                <p>{member.korean}</p>
                <span>{member.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
