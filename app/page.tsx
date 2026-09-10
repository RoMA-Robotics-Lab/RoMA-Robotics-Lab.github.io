import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "./components/HeroCarousel";
import { NewsText } from "./components/NewsText";
import { ResearchVisual } from "./components/ResearchVisual";
import { applyUrl, newsItems, selectedPublications } from "./site-data";

export default function Home() {
  return (
    <>
      <section className="home-notice">
        <div className="site-width">
          <p>
            <strong>Open Positions</strong>
            <span>We are recruiting undergraduate researchers and graduate students.</span>
            <span className="notice-ko" lang="ko">학부연구생 및 대학원생을 모집하고 있습니다.</span>
          </p>
          <a href={applyUrl} target="_blank" rel="noreferrer">Apply to RoMA Lab →</a>
        </div>
      </section>

      <section className="home-intro">
        <div className="site-width home-intro-grid">
          <div className="welcome-copy">
            <p className="overline">WELCOME TO ROMA LAB</p>
            <h1>Robotics, Mobility<br />and AI Lab</h1>
            <p className="mission">We study SLAM, spatial intelligence, and robotics and mobility applications to build AI robotic systems that <strong>move, think, and act</strong> in the real world.</p>
            <p className="welcome-ko">
              경북대학교 AI 로봇 모빌리티 연구실은 SLAM, 공간 지능,
              로보틱스와 모빌리티 응용을 연구합니다. 현실 세계를 이해하고
              자율적으로 행동하는 로봇 시스템을 만드는 것이 우리의 목표입니다.
            </p>
            <div className="intro-links">
              <Link href="/research" className="primary-link">Explore our research</Link>
              <Link href="/people" className="secondary-link">Meet the team →</Link>
            </div>
          </div>
          <HeroCarousel />
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
                {paper.image ? (
                  <Image
                    className="publication-card-image"
                    src={paper.image}
                    alt={paper.imageAlt ?? `${paper.title} research overview`}
                    width={1600}
                    height={922}
                    sizes="(max-width: 600px) calc(100vw - 30px), (max-width: 900px) 50vw, 33vw"
                  />
                ) : (
                  <ResearchVisual type={paper.visual ?? "mapping"} label={paper.venue} />
                )}
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
                  <div><span>{item.category}</span><p><NewsText text={item.homeText ?? item.text} link={item.link} /></p></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="recruit-card">
            <p className="overline">JOIN US</p>
            <h2>Open Positions</h2>
            <p>RoMA Lab welcomes undergraduate researchers and prospective M.S. and Ph.D. students.<br /><span lang="ko">RoMA Lab에서는 학부연구생, 석사과정, 박사과정을 모집합니다.</span></p>
            <ul>
              <li>Robust SLAM &amp; Robot Perception</li>
              <li>Spatial Intelligence &amp; AI</li>
              <li>Autonomous Driving &amp; Mobile Robots</li>
            </ul>
            <a href={applyUrl} target="_blank" rel="noreferrer">Application form →</a>
          </aside>
        </div>
      </section>
    </>
  );
}
