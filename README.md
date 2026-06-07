# YOUR BRAND — Portfolio

A futuristic, glassy, single-page portfolio site for Jiyaa Sompura & Jatin Agarwal.
Built with **React + Vite + Tailwind CSS + Framer Motion**.

## Quick start

```bash
# 1. Install dependencies
npm install
# (or) yarn install

# 2. Run dev server (http://localhost:3000)
npm run dev

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Hosting

Any static host works (the `/dist` folder is plain HTML/CSS/JS):

- **Vercel / Netlify**: drag-and-drop the `/dist` folder, or connect the repo
- **GitHub Pages / Cloudflare Pages**: point at `/dist`
- **Your own server**: upload `/dist` to your web root

## Editing your content

Everything visible on the site is config-driven. You only need to edit 3 files:

| File | What's in it |
|---|---|
| `src/config/site.js` | Brand name, tagline, hero copy, founder names + emails + resume links, WhatsApp link |
| `src/config/projects.js` | Project cards (title, image, link, description) |
| `src/config/services.js` | The 4 service cards + the Industries pill list |

### Rebrand example

Open `src/config/site.js` and change:

```js
brandName: "YOUR BRAND",
```

to:

```js
brandName: "Aevora Labs",
```

That's it — the whole site (navbar, footer, page title) updates.

### Add a new project

Append an object to `src/config/projects.js`:

```js
{
  title: "New Client Site",
  category: "E-commerce",
  location: "Mumbai, India",
  description: "...",
  image: "https://your-image-url.jpg",
  link: "https://newclient.com",
  tags: ["Website", "Shopify"],
}
```

### Swap in real resume PDFs

1. Drop the PDFs into `/public/` (e.g. `/public/jiyaa-resume.pdf`).
2. In `src/config/site.js`, change each founder's `resume: "#"` to `resume: "/jiyaa-resume.pdf"`.

### Real WhatsApp link

In `src/config/site.js`:

```js
whatsapp: "https://wa.me/919999999999", // your number with country code, no '+'
```

## File structure

```
your-brand-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── config/
    │   ├── site.js
    │   ├── projects.js
    │   └── services.js
    └── components/
        └── portfolio/
            ├── AuroraBackground.jsx
            ├── Navbar.jsx
            ├── Hero.jsx
            ├── Founders.jsx
            ├── Services.jsx
            ├── Projects.jsx
            ├── AIReceptionist.jsx
            ├── Industries.jsx
            ├── Stats.jsx
            ├── Contact.jsx
            └── Footer.jsx
```

Built with care by Jiyaa Sompura & Jatin Agarwal.
