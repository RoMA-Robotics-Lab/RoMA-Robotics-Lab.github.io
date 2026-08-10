import type { Metadata } from "next";
import { OpenPositionsPanel } from "../components/OpenPositionsPanel";
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
              <div><dt>Address</dt><dd>80 Daehak-ro, Buk-gu, Daegu 41566, Republic of Korea<br /><span lang="ko">대구광역시 북구 대학로 80 경북대학교 공대3호관 303호</span><br /><a className="contact-map-link" href="https://www.google.com/maps/search/?api=1&amp;query=%EA%B2%BD%EB%B6%81%EB%8C%80%ED%95%99%EA%B5%90+%EA%B3%B5%EB%8C%803%ED%98%B8%EA%B4%80" target="_blank" rel="noreferrer">View on Google Maps →</a></dd></div>
            </dl>
          </div>
          <OpenPositionsPanel applyUrl={applyUrl} />
          <div className="contact-map-panel">
            <p className="overline">LOCATION</p>
            <h2>Find RoMA Lab</h2>
            <iframe
              src="https://www.google.com/maps?q=%EA%B2%BD%EB%B6%81%EB%8C%80%ED%95%99%EA%B5%90+%EA%B3%B5%EB%8C%803%ED%98%B8%EA%B4%80&amp;z=17&amp;output=embed"
              title="Google Map showing Kyungpook National University Engineering Building 3"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
