import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-grid">
        <div className="footer-logo">
          <Image src="/roma-logo-transparent-v3.png" alt="RoMA Lab" width={1086} height={306} />
          <p>Robotics, Mobility and AI Lab</p>
        </div>
        <div>
          <h2>Affiliation</h2>
          <p>School of Mechanical Engineering<br />Kyungpook National University</p>
        </div>
        <div>
          <h2>Contact</h2>
          <p><a href="mailto:yshin86@knu.ac.kr">yshin86@knu.ac.kr</a><br />(+82)-53-950-7515</p>
        </div>
        <div>
          <h2>Address</h2>
          <p>Engineering Building 3, Room 303<br />80 Daehak-ro, Buk-gu, Daegu 41566</p>
        </div>
      </div>
      <div className="site-width footer-bottom">© 2026 RoMA Lab. All rights reserved.</div>
    </footer>
  );
}
