# CV Landing — Luiz Vieira

Personal CV / landing page built with **Next.js (App Router)**. Implements the
"editorial serif" direction (1a) from the original design exploration: warm
white paper, `Newsreader` serif display type, `IBM Plex Mono` labels, and a
vertical experience timeline.

## Stack

- Next.js 14 (App Router)
- React 18
- Plain CSS (no framework) with CSS variables and responsive breakpoints
- Google Fonts loaded via `<link>` (Newsreader, IBM Plex Mono)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Customizing content

All copy lives in **`app/data.js`** (profile, experience, skills, projects,
education, certifications, testimonials) and is shared by both the landing page
and the résumé, so you edit it in one place.

Key profile fields (`PROFILE` in `app/data.js`):

- `email`, `linkedin` — contact links
- `photo` — path to your portrait; drop the image at `/public/photo.jpg`

## Photo

The hero and the résumé show your photo from `/public/photo.jpg`. Until you add
one, both fall back gracefully to an "LV" monogram placeholder (no broken
image). Replace it by dropping a portrait JPG at `public/photo.jpg` — a ~4:5
portrait works best.

## Résumé + PDF export

`/resume` renders a minimalist, two-page A4 résumé (photo + profile +
experience on page 1; skills, selected work, education & certs on page 2). The
**Download PDF** button generates the file client-side with
[`html2pdf.js`](https://www.npmjs.com/package/html2pdf.js) (bundles html2canvas
+ jsPDF) — text stays selectable and fonts are waited on before capture. The
"Download CV (PDF)" buttons on the landing page link to `/resume`.

Styling for the résumé lives in `app/resume/resume.css` (A4 sizing in mm).

## Structure

```
app/
  layout.js         # fonts, metadata
  page.js           # landing page
  data.js           # shared CV content (edit here)
  Photo.js          # photo component with monogram fallback
  globals.css       # landing styles
  resume/
    page.js         # /resume — 2-page résumé + PDF export
    resume.css      # A4 print styles
public/             # drop photo.jpg here
```
