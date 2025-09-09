# Portfolio Website

My personal portfolio website built with Next.js! It showcases the projects I've worked on, my technical skills, and a bit about who I am outside of coding.

## Tech Stack

I built this with:
- Next.js 14.2.5 (React framework)
- TypeScript 
- Tailwind CSS for styling
- Framer Motion for animations
- Custom CSS for some specific animations

## Project Structure

- `src/app/` - Next.js pages and layout
- `src/components/` - Reusable components like cards and headers
- `src/sections/` - Main page sections (hero, projects, about, etc.)
- `src/assets/` - Images and SVG icons

## Getting Started

If you want to run this locally:

1. Clone the repo and install dependencies:
```bash
git clone https://github.com/andyk21/portfolio-site.git
cd portfolio-site
npm install
```

2. Start the dev server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:
```bash
npm run build
npm start
```

The site works on mobile, tablet, and desktop, with custom breakpoints at 375px, 768px, and 1200px.

## Customizing

If you want to use this as a template, the main things to update are:
- The projects array in `Projects.tsx`
- The skills list in `About.tsx` 
- Personal info in the hero and about sections
- Styling in the Tailwind classes