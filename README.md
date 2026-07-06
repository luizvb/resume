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

All copy lives as data arrays at the top of `app/page.js` (experience, skills,
projects, education, certifications, testimonials) plus a few constants:

- `EMAIL`, `LINKEDIN` — contact links
- `CV_PDF` — put your PDF in `/public` and set e.g. `"/Luiz-Vieira-CV.pdf"`
- `INTRO_VIDEO` — put an mp4 in `/public` and set e.g. `"/intro-video.mp4"`;
  when set, the hero video slot renders a real `<video>` player instead of the
  placeholder.

Styling is in `app/globals.css`.

## Structure

```
app/
  layout.js      # fonts, metadata
  page.js        # page content + sections
  globals.css    # all styles
public/          # drop CV PDF / intro video here
```
