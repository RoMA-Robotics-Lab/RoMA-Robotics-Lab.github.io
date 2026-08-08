import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoMA Lab | Robotics, Mobility and AI Lab at KNU",
  description: "경북대학교 AI 로봇 모빌리티 연구실. Robotics, Mobility and AI Lab at Kyungpook National University.",
  icons: {
    icon: "/roma-logo-transparent-v3.png",
    shortcut: "/roma-logo-transparent-v3.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
