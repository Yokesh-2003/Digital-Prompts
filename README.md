# Digital Prompts Portfolio Landing Page

An ultra-modern, premium creative portfolio landing page matching Awwwards x Apple style standards. Created with clean visual hierarchy, minimalist layout, and interactive, fluid motion curves.

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Features Included

1. **Floating Glass Navbar**:
   - Spans 88% width, center-aligned, and fixed position.
   - White background with 85% opacity, `backdrop-blur` glassmorphic effect, thin brand purple border, and soft purple cast shadow.
   - **Load Animation**: Drops down smoothly from `y: -50` to `y: 0` with fading.
   - **Scroll Animation**: Slides into view smoothly when scrolling past 80px.
   - **Hover Effects**: Nav link text transitions to primary purple with an underline that grows out from the center (0.25s duration). CTA button scales up, glows with a purple shadow effect.
   - **Mobile Responsiveness**: Dynamic responsive drawer with stagger-fade transitions for links.

2. **AAA Creative Agency Hero Section**:
   - Spans `100vh` viewport height on a clean white (#FFFFFF) background.
   - **Cinematic Typography**: Heading set in `Bebas Neue` featuring staggered line-mask slide animations on load. Primary brand purple (#5B2EFF) highlight on the key term "Experiences".
   - **Interactive Floating 3D Artwork**: Right side features a 3D isometric rotated composition of glass cards floating dynamically over moving gradient glow blobs. No images are used—instead, stylized indicators, interactive icons, color systems, and vector curve SVGs represent creative tools.
   - **Cinematic Details**: Thin curved contour vector lines, noise texture overlays, and tiny floating particles that animate dynamically.

## Installation & Running

Follow these commands to install dependencies and run the application locally:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Directory Structure

```text
├── app/
│   ├── layout.tsx         # Google Fonts (Inter & Bebas Neue), SEO, & Grain texture
│   └── page.tsx           # Page coordinator rendering Navbar & Hero
├── components/
│   ├── Navbar.tsx         # Floating Glass Header with Scroll/Hover animations
│   └── Hero.tsx           # 100vh Hero with staggered text & 3D floating glass artwork
├── styles/
│   └── globals.css        # Tailwind directives, custom scrollbars & blurs
├── postcss.config.js      # PostCSS compilation setup
├── tailwind.config.ts     # Configured colors, fonts & keyframe extensions
├── tsconfig.json          # TS setup mapping @/* to ./
├── package.json           # React 19 / Next 15 / Framer Motion / Tailwind configurations
└── README.md              # Documentation
```
