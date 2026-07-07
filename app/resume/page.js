"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Photo from "../Photo";
import "./resume.css";
import {
  PROFILE,
  EXPERIENCE,
  SKILLS,
  PROJECTS,
  EDUCATION,
  CERTS,
} from "../data";

export default function Resume() {
  const docRef = useRef(null);
  const [busy, setBusy] = useState(false);

  async function downloadPdf() {
    if (!docRef.current || busy) return;
    setBusy(true);
    try {
      // Ensure web fonts are painted before html2canvas snapshots the DOM.
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .set({
          margin: [12, 0, 12, 0], // top/bottom page margins; sides come from padding
          filename: "Luiz-Vieira-Resume.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            windowWidth: docRef.current.scrollWidth,
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: {
            mode: ["css", "legacy"],
            avoid: [".rs-exp-item", ".rs-work-item", ".rs-head", ".rs-skill-col"],
          },
        })
        .from(docRef.current)
        .save();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="resume-screen">
      <div className="resume-bar">
        <Link href="/" className="resume-back">
          ← Back to site
        </Link>
        <button className="resume-dl" onClick={downloadPdf} disabled={busy}>
          {busy ? "Generating…" : "Download PDF ↓"}
        </button>
      </div>

      {/* screen sheet — adds the vertical whitespace so it reads as paper;
          the captured node (.resume-doc) only carries horizontal padding so the
          PDF gets even, consistent margins on every page. */}
      <div className="resume-sheet">
        <div className="resume-doc" ref={docRef}>
          <header className="rs-head">
            <div className="rs-photo">
              <Photo src={PROFILE.photo} alt={PROFILE.name} />
            </div>
            <div className="rs-head-copy">
              <h1 className="rs-name">{PROFILE.name}</h1>
              <div className="rs-title">{PROFILE.title}</div>
              <div className="rs-contact">
                <span>{PROFILE.location}</span>
                <span className="rs-sep">·</span>
                <span>{PROFILE.email}</span>
                <span className="rs-sep">·</span>
                <span>{PROFILE.linkedinLabel}</span>
              </div>
            </div>
          </header>

          <section className="rs-block">
            <div className="rs-label">Profile</div>
            <p className="rs-summary">{PROFILE.summary}</p>
          </section>

          <section className="rs-block">
            <div className="rs-label">Experience</div>
            <div className="rs-exp">
              {EXPERIENCE.map((item) => (
                <div className="rs-exp-item" key={item.role}>
                  <div className="rs-exp-date">{item.date}</div>
                  <div className="rs-exp-body">
                    <div className="rs-exp-role">
                      {item.role}{" "}
                      {item.org && <span className="rs-exp-org">{item.org}</span>}
                    </div>
                    <p className="rs-exp-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rs-block">
            <div className="rs-label">Skills</div>
            <div className="rs-skills">
              {SKILLS.map((col) => (
                <div className="rs-skill-col" key={col.head}>
                  <div className="rs-skill-head">{col.head}</div>
                  <ul className="rs-skill-list">
                    {col.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rs-block">
            <div className="rs-label">Selected Work</div>
            <div className="rs-work">
              {PROJECTS.map((p) => (
                <div className="rs-work-item" key={p.title}>
                  <div className="rs-work-top">
                    <span className="rs-work-title">{p.title}</span>
                    <span className="rs-work-tag">{p.tag}</span>
                  </div>
                  <p className="rs-work-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rs-block">
            <div className="rs-label">Education &amp; Certifications</div>
            <div className="rs-edu-grid">
              <div className="rs-edu-list">
                {EDUCATION.map((e) => (
                  <div className="rs-edu-item" key={e.school}>
                    <strong>{e.school}</strong> — {e.detail}
                    <span className="rs-edu-year"> {e.year}</span>
                  </div>
                ))}
              </div>
              <div className="rs-certs">
                {CERTS.map((c) => (
                  <span className="rs-chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <footer className="rs-foot">
            <span>
              Open to Forward Deployed Engineering &amp; AI leadership roles
            </span>
            <span className="rs-foot-contact">
              {PROFILE.email} · {PROFILE.linkedinLabel}
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
