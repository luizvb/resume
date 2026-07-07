import Link from "next/link";
import Testimonials from "./Testimonials";
import {
  PROFILE,
  EXPERIENCE,
  SKILLS,
  PROJECTS,
  EDUCATION,
  CERTS,
} from "./data";

export default function Home() {
  return (
    <main className="page">
      <div className="sheet">
        {/* hero */}
        <header className="hero">
          <div className="hero-copy">
            <div className="hero-kicker">
              FORWARD DEPLOYED ENGINEER · HEAD OF AI · HANDS-ON LEADER
            </div>
            <h1 className="hero-name">
              Luiz <em>Vieira</em>
            </h1>
            <p className="hero-lede">{PROFILE.lede}</p>
            <div className="hero-meta">
              <span>{PROFILE.location}</span>
              <span className="dot">·</span>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <span className="dot">·</span>
              <a href={PROFILE.linkedin}>{PROFILE.linkedinLabel}</a>
            </div>
            <div className="actions">
              <Link className="btn btn-primary" href="/resume">
                Download CV (PDF) <span>↓</span>
              </Link>
              <a className="btn btn-outline" href={PROFILE.linkedin}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* intro video */}
          <div className="video-wrap">
            <div className="video-frame">
              {PROFILE.introVideo ? (
                <video
                  src={PROFILE.introVideo}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <div className="play" aria-hidden="true">
                  <span>▶</span>
                </div>
              )}
            </div>
            <div className="video-caption">
              [ intro video — 60s presentation ]
            </div>
          </div>
        </header>

        {/* about */}
        <section className="section">
          <div className="eyebrow">ABOUT ME</div>
          <p className="about-text">{PROFILE.summary}</p>
        </section>

        {/* experience */}
        <section className="section">
          <div className="eyebrow">EXPERIENCE</div>
          <div className="timeline">
            {EXPERIENCE.map((item, i) => {
              const last = i === EXPERIENCE.length - 1;
              return (
                <div key={item.role} style={{ display: "contents" }}>
                  <div className="tl-date">{item.date}</div>
                  <div className="tl-rail">
                    <div className="tl-node" />
                    {!last && <div className="tl-line" />}
                  </div>
                  <div className={`tl-body${last ? " last" : ""}`}>
                    <div className="tl-role">
                      {item.role} {item.org && <span>{item.org}</span>}
                    </div>
                    <p className="tl-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* skills */}
        <section className="section">
          <div className="eyebrow">SKILLS</div>
          <div className="skills-grid">
            {SKILLS.map((col) => (
              <div className="skill-col" key={col.head}>
                <div className="skill-head">{col.head}</div>
                <div className="skill-list">
                  {col.items.map((it, i) => (
                    <span key={it}>
                      {it}
                      {i < col.items.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* selected work */}
        <section className="section">
          <div className="eyebrow">SELECTED WORK</div>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <article className="project" key={p.title}>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tag">{p.tag}</div>
              </article>
            ))}
          </div>
        </section>

        {/* education */}
        <section className="section">
          <div className="eyebrow">EDUCATION</div>
          <div className="edu-grid">
            <div className="edu-list">
              {EDUCATION.map((e) => (
                <div key={e.school}>
                  <strong>{e.school}</strong> — {e.detail}{" "}
                  <span>{e.year}</span>
                </div>
              ))}
            </div>
            <div className="certs">
              {CERTS.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* recommendations */}
        <section className="section">
          <div className="eyebrow">RECOMMENDATIONS</div>
          <Testimonials />
        </section>

        {/* footer */}
        <footer className="footer">
          <div>
            <div className="footer-title">Let&rsquo;s talk.</div>
            <div className="footer-sub">
              Open to Forward Deployed Engineering & AI leadership roles.
            </div>
          </div>
          <div className="footer-actions">
            <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
            <Link className="btn btn-outline" href="/resume">
              Download CV ↓
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
