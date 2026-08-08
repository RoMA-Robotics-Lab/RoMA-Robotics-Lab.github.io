import Image from "next/image";
import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["People", "/people"],
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["News", "/news"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <>
      <div className="university-bar">
        <div className="site-width university-inner">
          <a href="https://www.knu.ac.kr" target="_blank" rel="noreferrer">Kyungpook National University</a>
          <a href="https://me.knu.ac.kr" target="_blank" rel="noreferrer">School of Mechanical Engineering</a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-width header-inner">
          <Link className="site-brand" href="/" aria-label="RoMA Lab home">
            <Image src="/roma-logo-transparent-v3.png" alt="RoMA Lab" width={1086} height={306} priority />
            <span>Robotics, Mobility and AI Lab</span>
          </Link>
          <nav aria-label="Primary navigation">
            {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
        </div>
      </header>
    </>
  );
}
