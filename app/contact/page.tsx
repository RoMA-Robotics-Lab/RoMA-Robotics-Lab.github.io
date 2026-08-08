import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { applyUrl } from "../site-data";

export const metadata: Metadata = { title: "Contact | RoMA Lab" };

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="CONTACT" title="Contact & Join Us" description="Contact RoMA Lab for research collaboration and student opportunities." />
      <section className="content-section">
        <div className="site-width contact-page-grid">
          <div className="contact-information">
            <h2>Contact Information</h2>
            <dl>
              <div><dt>Email</dt><dd><a href="mailto:yshin86@knu.ac.kr">yshin86@knu.ac.kr</a></dd></div>
              <div><dt>Phone</dt><dd>(+82)-53-950-7515</dd></div>
              <div><dt>Office</dt><dd>Engineering Building 3, Room 303</dd></div>
              <div><dt>Address</dt><dd>80 Daehak-ro, Buk-gu, Daegu 41566, Republic of Korea</dd></div>
              <div><dt>주소</dt><dd>대구광역시 북구 대학로 80 경북대학교 공대3호관 303호</dd></div>
            </dl>
          </div>
          <aside className="join-panel">
            <p className="overline">OPEN POSITIONS</p>
            <h2>Join RoMA Lab</h2>
            <p>AI 로봇 모빌리티 연구실에서는 학부연구생, 석사과정, 박사과정을 모집합니다.</p>
            <p>학부연구생은 대학원 진학 희망자를 우선 선발합니다. 관심 있는 학생은 지원 폼을 작성해 주세요.</p>
            <a href={applyUrl} target="_blank" rel="noreferrer">Google Form으로 지원하기 →</a>
          </aside>
        </div>
      </section>
    </>
  );
}
