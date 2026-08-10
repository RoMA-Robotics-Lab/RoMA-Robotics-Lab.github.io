"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const beyondSlamSlides = [
  { src: "/hero-vlslam.webp", alt: "Visual-LiDAR SLAM results across indoor and outdoor environments", label: "Visual-LiDAR SLAM" },
  { src: "/hero-unimapper.webp", alt: "Uni-Mapper multi-platform LiDAR mapping results", label: "Uni-Mapper" },
  { src: "/hero-alternative-slam.webp", alt: "Thermal-LiDAR and radar SLAM in challenging environments", label: "Alternative Sensor SLAM" },
  { src: "/research-nonparametric.jpg", alt: "Robust SLAM result in a dynamic environment with a vehicle trajectory", label: "Robust SLAM in Dynamic Environments" },
];

const spatialVideos = ["C9pLgZ5bTVU", "HL90apDDBVM", "Nmz_XxtqOr8"];
const roboticsVideos = ["THPHnn9AA4o", "5Xwo2iPRB4Q", "KrAq5DU3YDg", "7tbC4cCMlxs", "G3v63bsGYQY"];

type YouTubePlayerTarget = {
  destroy: () => void;
  mute: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
};

type YouTubeApi = {
  Player: new (
    element: HTMLIFrameElement,
    options: {
      events: {
        onReady: (event: { target: YouTubePlayerTarget }) => void;
        onStateChange: (event: { data: number; target: YouTubePlayerTarget }) => void;
      };
    },
  ) => YouTubePlayerTarget;
  PlayerState: { ENDED: number };
};

type YouTubeWindow = Window & typeof globalThis & {
  YT?: YouTubeApi;
  onYouTubeIframeAPIReady?: () => void;
};

let youtubeApiPromise: Promise<YouTubeApi> | null = null;

function loadYouTubeApi() {
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise<YouTubeApi>((resolve, reject) => {
    const youtubeWindow = window as YouTubeWindow;

    if (youtubeWindow.YT?.Player) {
      resolve(youtubeWindow.YT);
      return;
    }

    const previousReadyHandler = youtubeWindow.onYouTubeIframeAPIReady;
    youtubeWindow.onYouTubeIframeAPIReady = () => {
      previousReadyHandler?.();
      if (youtubeWindow.YT) resolve(youtubeWindow.YT);
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => reject(new Error("Unable to load the YouTube player API."));
      document.head.appendChild(script);
    }
  });

  return youtubeApiPromise;
}

function ResearchVideoPlaylist({
  videos,
  title,
  firstVideoPlayCount = 1,
}: {
  videos: string[];
  title: string;
  firstVideoPlayCount?: number;
}) {
  const [videoIndex, setVideoIndex] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<YouTubePlayerTarget | null>(null);
  const completedPlayCountRef = useRef(0);

  useEffect(() => {
    let disposed = false;
    completedPlayCountRef.current = 0;

    loadYouTubeApi().then((youtubeApi) => {
      if (disposed || !iframeRef.current) return;

      playerRef.current = new youtubeApi.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data !== youtubeApi.PlayerState.ENDED) return;

            const requiredPlayCount = videoIndex === 0 ? firstVideoPlayCount : 1;
            if (completedPlayCountRef.current + 1 < requiredPlayCount) {
              completedPlayCountRef.current += 1;
              event.target.seekTo(0, true);
              event.target.playVideo();
              return;
            }

            completedPlayCountRef.current = 0;
            setVideoIndex((current) => (current + 1) % videos.length);
          },
        },
      });
    }).catch(() => {
      // The regular iframe remains usable if the optional player API is unavailable.
    });

    return () => {
      disposed = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [firstVideoPlayCount, videoIndex, videos]);

  const videoId = videos[videoIndex];

  return (
    <div className="research-video-stack">
      <div className="research-media research-media-video">
        <iframe
          ref={iframeRef}
          key={videoId}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          title={`${title} research video ${videoIndex + 1}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="research-video-pager" aria-label={`${title} research videos`}>
        <button
          type="button"
          aria-label="Play previous research video"
          onClick={() => setVideoIndex((current) => (current - 1 + videos.length) % videos.length)}
        >
          <span className="research-video-chevron is-left" aria-hidden="true" />
        </button>
        <span aria-live="polite">
          {String(videoIndex + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Play next research video"
          onClick={() => setVideoIndex((current) => (current + 1) % videos.length)}
        >
          <span className="research-video-chevron is-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function ResearchMedia({ slug }: { slug: string }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (slug !== "beyond-slam" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % beyondSlamSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [slug]);

  if (slug === "beyond-slam") {
    return (
      <div className="research-media research-media-carousel">
        {beyondSlamSlides.map((slide, index) => (
          <Image
            className={index === slideIndex ? "is-active" : ""}
            src={slide.src}
            alt={index === slideIndex ? slide.alt : ""}
            fill
            sizes="(max-width: 600px) calc(100vw - 30px), (max-width: 900px) 300px, 390px"
            priority={index === 0}
            key={slide.src}
          />
        ))}
        <span className="research-media-caption">{beyondSlamSlides[slideIndex].label}</span>
        <div className="research-media-dots" aria-label="Beyond SLAM research images">
          {beyondSlamSlides.map((slide, index) => (
            <button
              type="button"
              aria-label={`Show ${slide.label}`}
              aria-current={index === slideIndex ? "true" : undefined}
              onClick={() => setSlideIndex(index)}
              key={slide.src}
            />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "spatial-intelligence") {
    return <ResearchVideoPlaylist videos={spatialVideos} title="Spatial Intelligence" />;
  }

  return <ResearchVideoPlaylist videos={roboticsVideos} title="Robotics and Mobility Applications" firstVideoPlayCount={6} />;
}
