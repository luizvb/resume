// Single source of truth for CV content — used by the landing page and the résumé.

export const PROFILE = {
  name: "Luiz Vieira",
  title: "Forward Deployed Engineer · Head of AI · Hands-on Leader",
  location: "São Paulo, Brazil",
  email: "luiz@lvtec.com.br",
  linkedin: "https://linkedin.com/in/luizbeserra",
  linkedinLabel: "linkedin.com/in/luizbeserra",
  photo: "https://media.licdn.com/dms/image/v2/D4D03AQE_vCrIHfPIag/profile-displayphoto-crop_800_800/B4DZ0MxXg4GsAI-/0/1774035761591?e=1784764800&v=beta&t=C4ICsdwAiushveqvlBFNCYoK9xv8pyMjKJ2IN_znA6k", // used only on the résumé / PDF
  introVideo: "https://gvdduyfzunzgdlrd.public.blob.vercel-storage.com/202607061617.mp4", // hero video: drop an mp4 in /public and set e.g. "/intro-video.mp4"
  cvPdf: "#", // optional external PDF; the /resume page generates one on the fly
  lede:
    "Engineering leader with 12+ years at the intersection of deep technical work and client impact. I build, ship, and lead — all at once.",
  summary:
    "I am a software engineering leader with an entrepreneurial mindset, passionate about transforming complex business challenges into scalable products powered by modern software engineering and Artificial Intelligence. Over the past 12+ years, I have designed, built, and scaled products from concept to production, combining hands-on engineering, architecture, product thinking, and technical leadership.",
};

export const STATS = [
  { value: "12+", label: "years in technology" },
  { value: "35+", label: "engineers led" },
  { value: "2", label: "AI products founded / shipped" },
  { value: "AWS", label: "certified · ITIL V3 · ICS" },
];

export const EXPERIENCE = [
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

export const SKILLS = [
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

export const PROJECTS = [
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

export const EDUCATION = [
  { school: "FIAP", detail: "System Analysis & Development", year: "2020–22" },
  { school: "Kaplan", detail: "Intensive English B2", year: "2026" },
  { school: "Impacta", detail: "Technical IT Certification", year: "2017" },
];

export const CERTS = [
  "AWS Certified Cloud Practitioner",
  "ITIL V3 Foundation",
  "ICS — Impacta Certified Specialist",
  "DevOps & Agile Culture",
];

// LinkedIn recommendations. Profile images are hot-linked from LinkedIn's CDN
// and their signed URLs eventually expire — the carousel falls back to the
// person's initials if an image fails to load. To make them permanent, download
// each into /public/recs and point `image` there.
export const TESTIMONIALS = [
  {
    name: "João Paulo Araújo",
    url: "https://www.linkedin.com/in/jpdaraujo/",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQH0IXdjrAKWAQ/profile-displayphoto-scale_100_100/B4DZs4BMcwI4Ag-/0/1766171399962?e=1784764800&v=beta&t=dvhCQzkoP7WP7OPTAedmXL0r6NqRPI9qoTrulUsxttE",
    role: "Co-founder & CEO Hunterhero · Especialista em IA para Recrutamento",
    relation: "Managed Luiz directly · Nov 2025",
    quote:
      "Luiz worked on several Growyx projects as tech lead and was always an exemplary professional. His technical leadership and his ability to align the team and stakeholders made a huge difference in delivering value to clients.",
  },
  {
    name: "Henrique de Carvalho",
    url: "https://www.linkedin.com/in/henriquecds/",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGRKeKNrUDlRw/profile-displayphoto-shrink_100_100/B56ZbzYzluH0AY-/0/1747840089753?e=1784764800&v=beta&t=ONnNqJntCbTO1mX_gYE4yZwza6KQJGXm070CDsV5Eo8",
    role: "Software Engineer · TypeScript, AWS, AI",
    relation: "Reported to Luiz directly · Feb 2025",
    quote:
      "Luiz is a great leader and manager. He's always striving to improve processes and products, and he has flawless technical skills and people management abilities.\n\nHe's also a very good mentor, capable of training and helping less experienced professionals shine. Moreover, he is highly trustworthy, patient, and compassionate.\n\nLuiz is a 'mover and shaker' — he makes things happen through innovation and proactivity, with a pragmatic approach, which makes him an outstanding leader and professional.",
  },
  {
    name: "Matheus Beserra",
    url: "https://www.linkedin.com/in/mvieirab/",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGKgSXRn9c2vA/profile-displayphoto-scale_100_100/B4DZ6PDL.iKEAc-/0/1780516439102?e=1784764800&v=beta&t=7rZX1vq6WTL-0DZWePvA-sNbtTZNC_omiU_dBjPR8S0",
    role: "Fullstack Developer · JS/TS, Python, Go · AWS",
    relation: "Reported to Luiz directly · Aug 2022",
    quote:
      "Luiz is an excellent professional and an asset to any team he joins — committed, dedicated, and giving his teammates a great sense of confidence. He sets best practices and communicates clearly, ensuring sharp, well-defined decisions about what needs to be done.\n\nA key strength is his ability to read the company's landscape, from the technologies used in the infrastructure to leading the team, always focused on continuous, incremental delivery of the product.",
  },
  {
    name: "Fernando Medeiros",
    url: "https://www.linkedin.com/in/-fernando-medeiros/en/",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQGPvqObHiEHgg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1576837636653?e=1784764800&v=beta&t=0oA_4JwR_EiJvtORdgc2qvG7GdDMBKj8rHlcjRWhsw4",
    role: "Quality Assurance Analyst",
    relation: "Reported to Luiz directly · Apr 2022",
    quote:
      "Luiz is an incredible human being and an exemplary professional. In the time I had the opportunity to work alongside him, I saw his great capability and versatility across many areas. As a developer he always delivered beyond expectations, and as a leader he knew how to inspire the whole team, bringing out the best in every person. In short: an outstanding professional I highly recommend.",
  },
  {
    name: "Thayna Rios",
    url: "https://www.linkedin.com/in/thaynahlrios/",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQEmhmuevH0jTA/profile-framedphoto-shrink_100_100/B4DZ6semAaKIAc-/0/1781010162154?e=1783987200&v=beta&t=vr-9aYqzg5dmZR2Qz5qT-javRIyAvfKChO8D6jE1IZ4",
    role: "Advertising · Sales Executive · Customer Success",
    relation: "Worked with Luiz on the same team · Aug 2020",
    quote:
      "Without a doubt an excellent professional!\n\nHe spares no effort to help whenever we hit a problem and to support us on new projects!",
  },
  {
    name: "Wilson Silva",
    url: "https://www.linkedin.com/in/wilson-silva-235bb930/",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQHTKvb3XiTcyg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1575564375108?e=1784764800&v=beta&t=tBzZqR229MwDBWH8fGtPy8NBdcLx33TskP1NXAyX9m0",
    role: "Senior Capacity Analyst · Service IT",
    relation: "Senior to Luiz · Apr 2018",
    quote:
      "During his time with us at TecBan, Luiz proved to be a highly dedicated professional, working directly in Capacity Planning and Performance. He was very keen to learn the technical and business mechanics of what we did, always giving great feedback — diligent and committed to every task. A very positive presence on the team; if the opportunity comes up in the future, I'd love to work with him again.",
  },
  {
    name: "Clodoaldo Oliveira",
    url: "https://www.linkedin.com/in/clodoaldooliveira/en/",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFQ-e208j-J-Q/profile-displayphoto-scale_100_100/B4DZkH_U0CIEAc-/0/1756775665592?e=1784764800&v=beta&t=QB2efBbUR7pOquAlTXCx8-vYFI-dIFc03R_IvLlNx0w",
    role: "Business Development · M&A · Corporate Development",
    relation: "Worked with Luiz on the same team · Oct 2016",
    quote:
      "Luiz has always been a real prodigy in technology and IT, consistently delivering projects on time — even under pressure he surprised everyone. Beyond being a great professional, he's a wonderful human being you can't help but be friends with. Highly recommended!",
  },
];
