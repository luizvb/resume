"use client";

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "./data";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M15 2v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M5 6H3v7h2zm.25-2A1.25 1.25 0 1 0 4 5.25 1.25 1.25 0 0 0 5.25 4M13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0 0 7.89 7V6H6v7h2V9.73a1.73 1.73 0 0 1 1.54-1.92h.12C10.82 7.8 11 8.94 11 9.73V13h2z" />
    </svg>
  );
}

function Avatar({ src, name }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return <span className="tcar-initials">{initials(name)}</span>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

export default function Testimonials() {
  const viewportRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;

  function scrollToIndex(i) {
    const vp = viewportRef.current;
    if (!vp) return;
    const clamped = Math.max(0, Math.min(count - 1, i));
    const card = vp.children[clamped];
    if (card) {
      vp.scrollTo({ left: card.offsetLeft - vp.offsetLeft, behavior: "smooth" });
    }
  }

  // Track the most-centered card as the user scrolls/swipes.
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = vp.scrollLeft + vp.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        for (let i = 0; i < vp.children.length; i++) {
          const c = vp.children[i];
          const cCenter = c.offsetLeft - vp.offsetLeft + c.clientWidth / 2;
          const d = Math.abs(cCenter - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        }
        setActive(best);
      });
    }
    vp.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      vp.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="tcar">
      <div className="tcar-viewport" ref={viewportRef}>
        {TESTIMONIALS.map((t) => (
          <article className="tcar-card" key={t.url}>
            <p className="tcar-quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="tcar-person">
              <div className="tcar-avatar">
                <Avatar src={t.image} name={t.name} />
              </div>
              <div className="tcar-id">
                <a
                  className="tcar-name"
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.name}
                  <LinkedInIcon />
                </a>
                <span className="tcar-role">{t.role}</span>
                <span className="tcar-rel">{t.relation}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="tcar-controls">
        <button
          className="tcar-btn"
          aria-label="Previous recommendation"
          onClick={() => scrollToIndex(active - 1)}
        >
          ←
        </button>
        <button
          className="tcar-btn"
          aria-label="Next recommendation"
          onClick={() => scrollToIndex(active + 1)}
        >
          →
        </button>
        <div className="tcar-dots">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.url}
              className={`tcar-dot${i === active ? " active" : ""}`}
              aria-label={`Go to recommendation ${i + 1}`}
              aria-current={i === active}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
        <span className="tcar-count">
          {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
