# The Full Picture

Fine art for real estate. Hyper-local original art — staged on your walls, printed for your listing, gifted to your buyer.

---

## 1. Project Overview

Static React + Vite site. All content lives in JSON files. All images live in `/public/images/`. No backend, no database, no admin panel. Deployed to Railway.

---

## 2. Quick Start

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

---

## 3. Adding a New Collection

1. Add images to:
   ```
   /public/images/collections/[slug]/mockups/
   /public/images/collections/[slug]/artwork/
   ```
   Name files `01.jpg`, `02.jpg` etc in display order.

2. Add an entry to `/src/data/collections.json` following the existing format:
   ```json
   {
     "name": "Collection Name",
     "slug": "collection-slug",
     "shortDescription": "Short description.",
     "fullDescription": "Full description.",
     "isFeatured": false,
     "sortOrder": 4,
     "mockups": ["/images/collections/collection-slug/mockups/01.jpg"],
     "artwork": ["/images/collections/collection-slug/artwork/01.jpg"]
   }
   ```

3. Push to GitHub. Railway rebuilds automatically. Collection is live at `/collections/[slug]`.

**No code changes required. Ever.**

---

## 4. Adding a Collection From Zip Files

Tell Claude Code:
> Here is a zip of mockups for [collection-name]: [path to zip]
> Here is a zip of artwork for [collection-name]: [path to zip]

Claude Code will unzip, rename numerically, place in the correct folders, and update `collections.json` automatically.

---

## 5. Updating Site Content

All editable content lives in `/src/data/`:

| File | Controls |
|---|---|
| `site-config.json` | Hero, pricing, about, ink originals, process copy, contact details |
| `collections.json` | All collections |
| `testimonials.json` | Testimonials |

Edit file → push → done.

---

## 6. Adding Testimonials

Add an entry to `testimonials.json`:
```json
{
  "quote": "Testimonial text here.",
  "agentName": "Agent Name",
  "agency": "Agency Name",
  "isActive": true,
  "sortOrder": 1
}
```

Set `isActive: true`. The testimonials section appears automatically on the home page. If no active entries exist, the section is hidden entirely.

---

## 7. Formspree Setup

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the endpoint URL (e.g. `https://formspree.io/f/abcdefgh`)
4. Paste it into `src/data/site-config.json` under `formspree.endpoint`

All contact form and inquiry modal submissions will go to your email.

---

## 8. Railway Deployment

1. Push this repo to GitHub
2. Connect the GitHub repo to Railway
3. Railway auto-deploys on every push

No environment variables required.

---

## 9. Updating Legal Pages

Legal page content is written directly in the component files under `/src/pages/legal/`. All content is accurate standard Australian compliance content but should be reviewed by a solicitor before the site goes live at significant commercial scale.

---

## 10. Image Guidelines

| Type | Format | Min size | Max file size |
|---|---|---|---|
| Mockup images | JPG or WebP | 1200px wide | 500KB |
| Artwork images | JPG or WebP | 800px shortest side | 500KB |
| Hero cards | JPG or WebP | 1200px wide | 500KB |
| About image | JPG or WebP | 800px wide | 500KB |

---

## 11. Configuring Contact Details

In `src/data/site-config.json`:

```json
"business": {
  "email": "hello@yourdomail.com.au",
  "instagram": "https://instagram.com/yourhandle"
}
```

These appear in the footer and contact page automatically.
