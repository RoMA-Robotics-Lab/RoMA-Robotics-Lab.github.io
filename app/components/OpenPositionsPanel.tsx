"use client";

import { useState } from "react";

type OpenPositionsPanelProps = {
  applyUrl: string;
};

export function OpenPositionsPanel({ applyUrl }: OpenPositionsPanelProps) {
  const [language, setLanguage] = useState<"en" | "ko">("en");

  return (
    <aside className="join-panel">
      <div className="join-panel-top">
        <p className="overline">OPEN POSITIONS</p>
        <div className="join-language-tabs" role="tablist" aria-label="Open positions language">
          <button
            id="open-positions-tab-en"
            type="button"
            role="tab"
            aria-selected={language === "en"}
            aria-controls="open-positions-copy"
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            id="open-positions-tab-ko"
            type="button"
            role="tab"
            aria-selected={language === "ko"}
            aria-controls="open-positions-copy"
            onClick={() => setLanguage("ko")}
          >
            KOR
          </button>
        </div>
      </div>
      <h2>Join RoMA Lab</h2>
      <div
        id="open-positions-copy"
        className="join-copy"
        role="tabpanel"
        aria-labelledby={`open-positions-tab-${language}`}
      >
        {language === "en" ? (
          <div className="join-language">
            <p>RoMA Lab is recruiting undergraduate researchers and prospective M.S. and Ph.D. students.</p>
            <p>Undergraduates planning to pursue graduate study are given priority. Please apply using the form below.</p>
          </div>
        ) : (
          <div className="join-language" lang="ko">
            <p>AI 로봇 모빌리티 연구실에서 학부연구생과 석·박사과정 학생을 모집합니다.</p>
            <p>학부연구생은 대학원 진학 희망자를 우선 선발합니다. 아래 지원 폼을 작성해 주세요.</p>
          </div>
        )}
      </div>
      <a href={applyUrl} target="_blank" rel="noreferrer">Apply via Google Form →</a>
    </aside>
  );
}
