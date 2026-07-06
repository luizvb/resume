const EMAIL = "luiz@lvtec.com.br";
const LINKEDIN = "https://linkedin.com/in/luizbeserra";
const CV_PDF = "#"; // drop the PDF in /public and point here, e.g. "/Luiz-Vieira-CV.pdf"
const INTRO_VIDEO = ""; // put an mp4 in /public and set e.g. "/intro-video.mp4"

const experience = [
  {
    date: "2022 — Present",
    role: "Head of Software Engineering — MZ",
    org: "(Global IR Solutions)",
    desc: "Lead an engineering org of 35+ across multiple squads, partnering with the CTO on strategy and architecture. Drove Generative AI adoption across the product suite — RAG, Tool Calling, Agents — while keeping a hands-on engineering presence.",
  },
  {
    date: "2025 — 2026",
    role: "Forward Deployed Engineer — EasyTelling",
    org: "@ Cubo Itaú",
    desc: "Sole technical leader delivering an end-to-end Generative AI SaaS for scientific research: LLM orchestration, RAG over scientific knowledge bases, Tool Calling for data-viz workflows. Langchain · OpenAI · AWS Bedrock · Next.js.",
  },
  {
    date: "2022 — 2025",
    role: "CTO & Co-Founder — Yio",
    org: "@ Cubo Itaú",
    desc: "Founded an AI-powered communication platform unifying websites, chatbots and landing pages. AI core on Claude via AWS Bedrock with RAG and Tool Calling; serverless AWS + Next.js. Led full lifecycle from MVP to go-to-market.",
  },
  {
    date: "2019 — 2022",
    role: "Senior Engineer → Tech Lead → Engineering Manager — MZ",
    org: "",
    desc: "Three promotions in three years: from full-stack delivery on MZ's IR platform (Node.js, TypeScript) to leading tech leads across squads and standardizing the development and DevOps environment.",
  },
  {
    date: "2018 — 2022",
    role: "Earlier roles — consulting & product",
    org: "",
    desc: "Fractional tech lead for four Cubo Itaú startups (via Growyx); engineering-culture consultant at DDR/BlueOne; Technical PM & founding IT engineer at Sapore S.A.",
  },
];

const skills = [
  {
    head: "Generative AI",
    items: [
      "LLMs (Claude, GPT-4, Llama)",
      "RAG · Fine-Tuning · Tool Calling",
      "AI Agents & Orchestration",
      "Langchain · Bedrock · OpenAI SDK",
    ],
  },
  {
    head: "Engineering",
    items: [
      "Node.js · TypeScript · Python",
      "React · Next.js · Angular",
      "Microservices · DDD · Clean Arch.",
      "AWS (Certified) · Serverless · K8s",
    ],
  },
  {
    head: "Leadership",
    items: [
      "Team scaling (35+ engineers)",
      "Client-facing architecture",
      "Full-cycle product development",
      "Agile · OKRs · Hiring",
    ],
  },
];

const projects = [
  {
    title: "Yio",
    desc: "AI communication platform — websites, chatbots and landing pages unified. Claude + RAG on serverless AWS.",
    tag: "FOUNDER · 2022–25",
  },
  {
    title: "EasyTelling",
    desc: "GenAI SaaS for scientific research: RAG over knowledge bases, tool-calling data-viz pipelines.",
    tag: "FDE · 2025–26",
  },
  {
    title: "MZ GenAI Suite",
    desc: "GenAI across an IR product suite — use-case discovery, AI architecture, coaching engineers on LLM patterns.",
    tag: "HEAD OF ENG · 2022–",
  },
];

const education = [
  { school: "FIAP", detail: "System Analysis & Development", year: "2020–22" },
  { school: "Kaplan", detail: "Intensive English B2", year: "2026" },
  { school: "Impacta", detail: "Technical IT Certification", year: "2017" },
];

const certs = [
  "AWS Certified Cloud Practitioner",
  "ITIL V3 Foundation",
  "ICS — Impacta Certified Specialist",
  "DevOps & Agile Culture",
];

const testimonials = [
  {
    quote:
      "Quote from a CTO, peer or direct report goes here — 2–3 sentences on working with Luiz.",
    by: "[ NAME · ROLE · COMPANY ]",
  },
  {
    quote:
      "Second testimonial — ideally from a client or founder Luiz embedded with.",
    by: "[ NAME · ROLE · COMPANY ]",
  },
];

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
            <p className="hero-lede">
              Engineering leader with 12+ years at the intersection of deep
              technical work and client impact. I build, ship, and lead — all at
              once.
            </p>
            <div className="hero-meta">
              <span>São Paulo, Brazil</span>
              <span className="dot">·</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span className="dot">·</span>
              <a href={LINKEDIN}>linkedin.com/in/luizbeserra</a>
            </div>
            <div className="actions">
              <a className="btn btn-primary" href={CV_PDF}>
                Download CV (PDF) <span>↓</span>
              </a>
              <a className="btn btn-outline" href={LINKEDIN}>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="video-wrap">
            <div className="video-frame">
              {INTRO_VIDEO ? (
                <video src={INTRO_VIDEO} controls playsInline preload="metadata" />
              ) : (
                <div className="play" aria-hidden="true">
                  <span>▶</span>
                </div>
              )}
            </div>
            <div className="video-caption">
              [ intro-video.mp4 — 60–90s presentation ]
            </div>
          </div>
        </header>

        {/* about */}
        <section className="section">
          <div className="eyebrow">ABOUT ME</div>
          <p className="about-text">
            As a Forward Deployed Engineer, I embed directly with customers to
            architect and ship AI-powered solutions that solve real business
            problems. As Head of AI, I build production Generative AI systems —
            LLMs, RAG, Tool Calling, Fine-Tuning. As a people leader, I have
            scaled engineering orgs of 35+ while staying close to the code.
          </p>
        </section>

        {/* experience */}
        <section className="section">
          <div className="eyebrow">EXPERIENCE</div>
          <div className="timeline">
            {experience.map((item, i) => {
              const last = i === experience.length - 1;
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
            {skills.map((col) => (
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
            {projects.map((p) => (
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
              {education.map((e) => (
                <div key={e.school}>
                  <strong>{e.school}</strong> — {e.detail}{" "}
                  <span>{e.year}</span>
                </div>
              ))}
            </div>
            <div className="certs">
              {certs.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* testimonials */}
        <section className="section">
          <div className="eyebrow">TESTIMONIALS</div>
          <div className="quotes">
            {testimonials.map((t, i) => (
              <div className="quote" key={i}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="quote-by">{t.by}</div>
              </div>
            ))}
          </div>
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
            <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="btn btn-outline" href={CV_PDF}>
              Download CV ↓
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
