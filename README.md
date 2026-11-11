# Syed Afraz — Portfolio

A high-performance, single-page developer portfolio showcasing full-stack projects, software architecture, technical skillset, and professional experience.

**Live site:** https://syed-afraz-portfolio.vercel.app

---

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, AOS (Animate On Scroll)
- **Fluid Visuals:** WebGL Fluid Simulation (SplashCursor)
- **Forms & Email Delivery:** EmailJS (@emailjs/browser)

---

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Environment Variables

To enable the contact form via EmailJS, create a `.env.local` file in the project root with the following variables (no values required if using the direct email client fallback):

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## Credits

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
