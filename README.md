# Suresh K – Personal Portfolio

Premium personal branding website for **Suresh K – Senior Executive Administration**.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide icons**.

---

## ⚠️ Before you deploy: 2 things to do

1. **Add the CV PDF.** Copy the CV into the `public` folder and name it exactly:

   ```
   public/Suresh-K-CV.pdf
   ```

   All "Download CV" buttons (navbar, hero, mobile menu and contact section) point to this file.

2. **Check the experience bullet points** in `src/data/profile.ts` against the CV and adjust any wording.
   All site text (intro, experience, achievements, skills, education, contact details) lives in that one file.

---

## Project structure

```
suresh-portfolio/
├── public/
│   ├── images/
│   │   ├── suresh-k.jpg        ← profile photo (shown in a round frame)
│   │   └── og-image.jpg        ← social share preview image (1200×630)
│   └── Suresh-K-CV.pdf         ← ADD THIS FILE
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← SEO metadata, Open Graph, fonts, JSON-LD
│   │   ├── page.tsx            ← assembles all sections
│   │   ├── globals.css         ← Tailwind theme, colours, animations
│   │   ├── icon.svg            ← favicon (SK monogram)
│   │   ├── robots.ts / sitemap.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── Navbar.tsx  Footer.tsx  Preloader.tsx  Providers.tsx
│   │   ├── sections/           ← Hero, About, Experience, Achievements,
│   │   │                          Competencies, TechSkills, Education, Contact
│   │   └── ui/                 ← Reveal, SectionHeading, Counter, LinkedInIcon
│   └── data/
│       └── profile.ts          ← ALL CONTENT – edit here
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Run it on your computer (optional)

Requires **Node.js 20.9 or newer** (https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000. To test a production build:

```bash
npm run build
npm start
```

---

## Upload to GitHub

### Option A – GitHub website (no command line)

1. Sign in at https://github.com and click **New repository** (the **+** icon, top right).
2. Name it, e.g. `suresh-portfolio`, keep it **Public** or **Private**, and **do not** tick "Add a README".
3. Click **Create repository**, then **uploading an existing file**.
4. Unzip the project on your computer. Open the `suresh-portfolio` folder, select **everything inside it**
   (including the `public` and `src` folders) and drag it into the upload page.
   *Do not upload a `node_modules` or `.next` folder if you have one.*
5. Click **Commit changes**.

> Tip: hidden files such as `.gitignore` and `.npmrc` may not be visible on Mac/Windows. They are helpful
> but optional – the site deploys without them.

### Option B – Command line

```bash
cd suresh-portfolio
git init
git add .
git commit -m "Initial commit – Suresh K portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/suresh-portfolio.git
git push -u origin main
```

---

## Deploy on Vercel

1. Go to https://vercel.com and **Sign up / Log in with GitHub**.
2. Click **Add New… → Project**.
3. Find `suresh-portfolio` in the list and click **Import**.
4. Vercel detects **Next.js** automatically. Leave the defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: *(default)*
5. *(Recommended)* Open **Environment Variables** and add:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SITE_URL` | `https://your-project-name.vercel.app` (or your custom domain) |

   This makes the sitemap, canonical URL and social share previews use the correct address.
6. Click **Deploy**. In about a minute the site is live at `https://<project-name>.vercel.app`.

Every time you push a change to GitHub (or upload a new file through the GitHub website), Vercel redeploys automatically.

### Custom domain (optional)

In Vercel open the project → **Settings → Domains → Add**, enter the domain (e.g. `sureshk.in`) and follow the DNS
instructions shown. Then update `NEXT_PUBLIC_SITE_URL` to the new domain and redeploy.

---

## How things work

| Feature | Details |
|---|---|
| CV download | `<a href="/Suresh-K-CV.pdf" download>` + a `Content-Disposition: attachment` header in `next.config.ts` |
| Email / phone | `mailto:suresh.adminspecialist@gmail.com` and `tel:+919790972444` links |
| Contact form | Opens the visitor's email app with name, subject and message pre-filled (no server or paid service needed) |
| Animations | Framer Motion; automatically reduced for visitors with "Reduce motion" turned on |
| SEO | Title, description, Open Graph, Twitter card, canonical URL, sitemap, robots and Person schema (JSON-LD) |

### Want the form to send emails directly instead?

Create a free form at https://formspree.io, then in `src/components/sections/Contact.tsx` replace the
`handleSubmit` function body with a `fetch("https://formspree.io/f/<your-id>", { method: "POST", body: data, headers: { Accept: "application/json" } })` call.

---

## Final checklist

- [ ] `public/Suresh-K-CV.pdf` added
- [ ] Experience bullet points checked against the CV
- [ ] `NEXT_PUBLIC_SITE_URL` set in Vercel
- [ ] Clicked every menu link, both Download CV buttons, email, phone and LinkedIn on the live site
- [ ] Opened the site on a phone and checked the mobile menu
