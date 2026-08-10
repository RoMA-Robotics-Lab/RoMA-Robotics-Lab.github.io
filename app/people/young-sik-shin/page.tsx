import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "Young-Sik Shin | RoMA Lab",
  description: "Profile of Young-Sik Shin, Principal Investigator of RoMA Lab at Kyungpook National University.",
};

export default function YoungSikShinProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="PRINCIPAL INVESTIGATOR"
        title="Young-Sik Shin · 신영식"
        description="Assistant Professor in the School of Mechanical Engineering at Kyungpook National University and director of RoMA Lab."
      />

      <section className="content-section profile-detail-page">
        <div className="site-width">
          <Link className="profile-back-link" href="/people">← Back to People</Link>

          <section className="profile-detail-intro" aria-labelledby="profile-name">
            <div className="profile-detail-photo">
              <Image src="/young-sik-shin.jpg" alt="Young-Sik Shin" width={354} height={472} priority />
            </div>
            <div className="profile-detail-summary">
              <p className="overline">ASSISTANT PROFESSOR · PH.D.</p>
              <h2 id="profile-name">Young-Sik Shin <span>신영식</span></h2>
              <p className="profile-detail-affiliation">
                School of Mechanical Engineering, College of Engineering<br />
                Kyungpook National University
              </p>
              <p className="profile-detail-focus">
                His research focuses on SLAM, spatial intelligence, and intelligent robotic systems that perceive, navigate, and interact in complex environments.
              </p>

              <dl className="profile-detail-facts">
                <div><dt>Email</dt><dd><a href="mailto:yshin86@knu.ac.kr">yshin86@knu.ac.kr</a></dd></div>
                <div><dt>Office</dt><dd>Engineering Building 3, Room 303 <span lang="ko">· 공대3호관 303호</span></dd></div>
                <div><dt>Address</dt><dd>80 Daehak-ro, Buk-gu, Daegu 41566, Republic of Korea</dd></div>
              </dl>

              <div className="profile-detail-links" aria-label="Academic profiles">
                <a href="https://scholar.google.com/citations?user=gGfBRawAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
                <a href="https://www.scopus.com/authid/detail.uri?authorId=58438805200" target="_blank" rel="noreferrer">Scopus ↗</a>
                <a href="https://orcid.org/0000-0002-9653-0633" target="_blank" rel="noreferrer">ORCID ↗</a>
              </div>
            </div>
          </section>

          <div className="profile-record-grid">
            <section className="profile-record" aria-labelledby="experience-heading">
              <header className="profile-record-heading">
                <p className="overline">CAREER</p>
                <h2 id="experience-heading">Experience</h2>
              </header>
              <div className="profile-record-list">
                <article className="profile-record-item">
                  <p>2026.03–Present</p>
                  <div>
                    <h3>Assistant Professor</h3>
                    <p>School of Mechanical Engineering, College of Engineering<br />Kyungpook National University, Daegu, Republic of Korea</p>
                  </div>
                </article>
                <article className="profile-record-item">
                  <p>2019.12–2026.02</p>
                  <div>
                    <h3>Senior Researcher</h3>
                    <p>Department of AI Machinery, Research Institute of AI Robotics<br />Korea Institute of Machinery &amp; Materials, Daejeon, Republic of Korea</p>
                  </div>
                </article>
              </div>
            </section>

            <section className="profile-record" aria-labelledby="education-heading">
              <header className="profile-record-heading">
                <p className="overline">ACADEMIC BACKGROUND</p>
                <h2 id="education-heading">Education</h2>
              </header>
              <div className="profile-record-list">
                <article className="profile-record-item">
                  <p>2015.03–2020.02</p>
                  <div className="profile-education-entry"><h3>Ph.D.</h3><p>Robotics Program / Civil and Environmental Engineering, KAIST</p></div>
                </article>
                <article className="profile-record-item">
                  <p>2013.03–2015.02</p>
                  <div className="profile-education-entry"><h3>M.S.</h3><p>Robotics Program, KAIST</p></div>
                </article>
                <article className="profile-record-item">
                  <p>2005.03–2012.02</p>
                  <div className="profile-education-entry"><h3>B.S.</h3><p>Electrical Engineering, Inha University</p></div>
                </article>
              </div>
            </section>

            <section className="profile-record" aria-labelledby="awards-heading">
              <header className="profile-record-heading">
                <p className="overline">RECOGNITION</p>
                <h2 id="awards-heading">Awards</h2>
              </header>
              <div className="profile-record-list">
                <article className="profile-record-item profile-award-item">
                  <p>2025</p>
                  <div>
                    <h3>Ministerial Commendation for Contributions to the Robotics Industry</h3>
                    <p>SLAM and autonomous mobile robots · Ministry of Trade, Industry and Energy</p>
                    <p lang="ko">로봇산업 관련(SLAM, 자율이동로봇) 산업부장관 표창</p>
                  </div>
                </article>
                <article className="profile-record-item profile-award-item">
                  <p>2021</p>
                  <div>
                    <h3>Top 100 National R&amp;D Achievements</h3>
                    <p>Minister&apos;s Award · Ministry of Science and ICT</p>
                    <p lang="ko">국가연구개발 우수성과 100선</p>
                  </div>
                </article>
                <article className="profile-record-item profile-award-item">
                  <p>2020</p>
                  <div>
                    <h3>Outstanding Early Career Researcher Award</h3>
                    <p>Institute of Control, Robotics and Systems</p>
                    <p lang="ko">제어·로봇·시스템학회 우수신진연구자상</p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
