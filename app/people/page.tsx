import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
            <Link className="pi-avatar" href="/people/young-sik-shin" aria-label="View Young-Sik Shin's full profile">
              <Image src="/young-sik-shin.jpg" alt="Young-Sik Shin" width={354} height={472} priority />
            </Link>
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
                <span>{member.role.split(" (")[0]}{member.role.includes(" (") && <> <span className="member-role-note">({member.role.split(" (")[1]}</span></>}</span>
                {member.period && <p className="member-affiliation">{member.period}</p>}
                {member.program && <p className="member-affiliation">{member.program}</p>}
                {member.affiliation && (
                  <p className="member-affiliation">Affiliation: <a href={member.affiliation.url} target="_blank" rel="noreferrer">{member.affiliation.label}</a></p>
                )}
              </article>
            ))}
          </div>
          <div className="member-section-heading">
            <h2 className="subsection-title">Alumni</h2>
          </div>
          <div className="member-grid">
            <article className="member-card">
              <div aria-hidden="true">01</div>
              <h3>Chanmin Youn</h3>
              <p>윤찬민</p>
              <span>M.S.</span>
              <p className="member-affiliation">2022.03–2024.02</p>
              <p className="member-affiliation">CNU-KIMM<br />Cooperative Program</p>
              <p className="member-affiliation">Samsung Heavy Industries<br />(Daedeok Research Center)</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
