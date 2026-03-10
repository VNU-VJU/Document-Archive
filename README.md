# VJU Document Archive

A document archive for Vietnam-Japan University and related academic regulations.

## Live Site

Hosted via GitHub Pages.

## Features

- **Home / Discovery**: Search interface with recent circulars
- **Search Results**: Filtered document search with department and type facets
- **Department Archive**: Department detail pages with contact info and document listings
- **Document Reader**: Split-view mode with Vietnamese original and English/Japanese translations side-by-side
  - Scroll sync between panes
  - Resizable split view via drag handle
  - Table of contents sidebar with scroll spy
  - Source PDF viewer

## Documents

| Document | Languages |
|----------|-----------|
| 3626/QD-DHQGHN — Regulation on Undergraduate Training | VN, EN, JP |

## Tech Stack

- Static HTML (no build step, no Node.js)
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [marked.js](https://marked.js.org/) for Markdown rendering
- [DOMPurify](https://github.com/cure53/DOMPurify) for XSS prevention
- [Google Material Symbols](https://fonts.google.com/icons) for icons

## Firebase Config

The app loads Firebase Web config from `firebase-config.js`, which is intentionally ignored by Git.

1. Copy `firebase-config.js.example` to `firebase-config.js`.
2. Fill in the Firebase Web app config locally.
3. Do not commit `firebase-config.js`.

For Google Cloud API keys used in browser apps, apply both API restrictions and HTTP referrer restrictions in Google Cloud Console.
