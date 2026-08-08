import Image from "next/image";
import Link from "next/link";
import { ResearchVisual } from "./components/ResearchVisual";
import { applyUrl, newsItems, selectedPublications } from "./site-data";

export default function Home() {
  return (
    <>
      <section className="home-notice">
        <div className="site-width">
          <p><strong>Open Positions</strong> 학부연구생 및 대학원생을 모집하고 있습니다.</p>
          <a href={applyUrl} target="_blank" rel="noreferrer">Apply to RoMA Lab →</a>
        </div>
      </section>

      <section className="home-intro">
        <div className="site-width home-intro-grid">
          <div className="welcome-copy">
            <p className="overline">WELCOME TO ROMA LAB</p>
            <h1>Robotics, Mobility<br />and AI Lab</h1>
            <p className="mission">We pursue AI robotic systems that <strong>move, think, and act</strong> in the real world.</p>
            <p className="welcome-ko">
              경북대학교 AI 로봇 모빌리티 연구실은 강건한 SLAM, 공간 지능,
              로보틱스와 모빌리티 응용을 연구합니다. 현실 세계를 이해하고
              자율적으로 행동하는 로봇 시스템을 만드는 것이 우리의 목표입니다.
            </p>
            <div className="intro-links">
              <Link href="/research" className="primary-link">Explore our research</Link>
              <Link href="/people" className="secondary-link">Meet the team →</Link>
            </div>
          </div>
          <div className="home-logo-panel" aria-hidden="true">
            <div className="logo-grid" />
            <Image src="/roma-logo-transparent-v3.png" alt="" width={1086} height={306} priority />
            <p>KNU · SCHOOL OF MECHANICAL ENGINEERING</p>
          </div>
        </div>
      </section>

      <section className="content-section soft-section">
        <div className="site-width">
          <div className="section-heading">
            <div><p className="overline">RECENT WORK</p><h2>Selected Research</h2></div>
            <Link href="/publications">View all publications →</Link>
          </div>
          <div className="home-publication-grid">
            {selectedPublications.map((paper) => (
              <article className="home-publication-card" key={paper.title}>
                <ResearchVisual type={paper.visual ?? "mapping"} label={paper.venue} />
                <div className="publication-card-copy">
                  <p className="paper-venue">{paper.venue}</p>
                  <h3>{paper.title}</h3>
                  <p>{paper.authors}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section home-lower">
        <div className="site-width home-lower-grid">
          <div>
            <div className="section-heading compact-heading">
              <div><p className="overline">UPDATES</p><h2>Latest News</h2></div>
              <Link href="/news">All news →</Link>
            </div>
            <div className="home-news-list">
              {newsItems.slice(0, 5).map((item) => (
                <article key={`${item.date}-${item.text}`}>
                  <time>{item.date}</time>
                  <div><span>{item.category}</span><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="recruit-card">
            <p className="overline">JOIN US</p>
            <h2>Open Positions</h2>
            <p>RoMA Lab에서는 학부연구생, 석사과정, 박사과정을 모집합니다.</p>
            <ul>
              <li>SLAM 및 로봇 인지</li>
              <li>공간 지능 및 AI</li>
              <li>자율주행·모바일 로봇</li>
            </ul>
            <a href={applyUrl} target="_blank" rel="noreferrer">Application form →</a>
          </aside>
        </div>
      </section>
    </>
  );
}
