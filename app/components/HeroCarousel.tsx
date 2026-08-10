"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/roma-logo-transparent-v3.png",
    alt: "RoMA Lab logo",
    title: "Robotics, Mobility and AI Lab",
    kind: "logo",
  },
  {
    src: "/hero-unimapper.webp",
    alt: "Multi-modal LiDAR maps generated with diverse robotic platforms",
    title: "Multi-Modal LiDAR Mapping",
    kind: "research",
  },
  {
    src: "/hero-vlslam.webp",
    alt: "Indoor and outdoor Visual-LiDAR SLAM reconstruction results",
    title: "Visual-LiDAR SLAM",
    kind: "research",
  },
  {
    src: "/hero-alternative-slam.webp",
    alt: "Thermal-LiDAR and radar SLAM methods and experimental results",
    title: "Thermal-LiDAR & Radar SLAM",
    kind: "research",
  },
  {
    src: "/hero-instance-enriched.webp",
    alt: "Instance-enriched open-vocabulary spatial mapping pipeline and results",
    title: "Instance-Enriched Open-Vocabulary Spatial Mapping",
    kind: "research",
  },
  {
    src: "/hero-msg-loc.webp",
    alt: "Multi-label semantic graph localization using semantic-topological context",
    title: "MSG-Loc: Multi-Label Semantic Graph Localization",
    kind: "research",
  },
] as const;

const slideDelay = 4000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setActive(Math.floor(Math.random() * slides.length));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % slides.length);
    }, slideDelay);

    return () => window.clearTimeout(timer);
  }, [active, paused, ready]);

  const selectSlide = (index: number) => setActive(index);

  return (
    <section
      className={`hero-carousel${ready ? " is-ready" : ""}`}
      aria-label="RoMA Lab research highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="hero-carousel-stage">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide hero-slide-${slide.kind}${index === active ? " is-active" : ""}`}
            aria-hidden={index !== active}
            key={slide.src}
          >
            {slide.kind === "logo" && <div className="hero-logo-grid" />}
            <Image
              src={slide.src}
              alt={index === active ? slide.alt : ""}
              fill
              priority={index === 0}
              sizes="(max-width: 900px) calc(100vw - 48px), 510px"
            />
          </div>
        ))}

        <button
          className="hero-carousel-arrow hero-carousel-prev"
          type="button"
          aria-label="Previous research highlight"
          onClick={() => selectSlide((active - 1 + slides.length) % slides.length)}
        >
          ‹
        </button>
        <button
          className="hero-carousel-arrow hero-carousel-next"
          type="button"
          aria-label="Next research highlight"
          onClick={() => selectSlide((active + 1) % slides.length)}
        >
          ›
        </button>
      </div>

      <div className="hero-carousel-footer">
        <p aria-live="polite">{slides[active].title}</p>
        <div className="hero-carousel-dots" aria-label="Choose a research highlight">
          {slides.map((slide, index) => (
            <button
              className={index === active ? "is-active" : ""}
              type="button"
              aria-label={`Show ${slide.title}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => selectSlide(index)}
              key={slide.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
