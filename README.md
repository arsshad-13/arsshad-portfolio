# Arsshad M. — Portfolio

A V3.0 signature-edition, responsive dark-purple developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React. V3.0 adds interactive project-category filters, an animated skill-domain constellation, enhanced Open Graph/Twitter metadata, and reduced-motion-aware interactions. Its long-form structure covers the hero, about, career milestone, internships, six projects, technical skills, education, leadership, achievements, certifications, research, and contact sections.

## Run locally

1. Install Node.js 20.9 or later.
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

For a production build, run `npm run build` and then `npm start`.

## Personalize before publishing

- **Profile image:** Add your professional photograph as `public/images/profile.jpg`. Until then, the hero displays an initials placeholder.
- **LinkedIn:** Add your exact LinkedIn profile URL in `src/data/portfolio.ts`. It is intentionally not linked to a generic LinkedIn homepage.
- **Project links:** Add verified GitHub repository and live-demo URLs to each project entry in `src/data/portfolio.ts`. Project descriptions and technology stacks are based on the supplied resume.
- **Resume:** The supplied resume is included as `public/resume.pdf` and linked from the hero.
- **Placement:** The portfolio identifies Blue Yonder as a campus placement selection, without inventing a job title or employment start date.
- **Academic details:** The college timeline is shown without a CGPA pending confirmation of the latest figure. School percentages are taken from the supplied resume.

## Content integrity

No project metrics, repository URLs, demo URLs, or Blue Yonder job designation have been invented. The publication section reflects the ICSCST 2026 acceptance and forthcoming IEEE proceedings status stated in the supplied resume.

## Personal assets
Your portrait, six project visuals, and two internship-project visuals are already included under `public/images/`. The exact image filenames and source-link mapping are documented in `ASSETS-TO-ADD.md`.

## Project links
Four standalone repositories and both E-Vehicle frontend/backend repositories are wired into the project case studies. The patient-tracking industrial project is intentionally marked confidential and has no public repository link.


## Portfolio content notes

- LinkedIn: https://www.linkedin.com/in/arsshad-maheswaran-79a612300
- GitHub source links are configured for the public repositories supplied by Arsshad.
- Live demo links are intentionally omitted because no deployed demo URLs are currently available.
- Project artwork is presented as illustrative project previews, not as verified screenshots of running applications.
- The patient-tracking industrial project is marked confidential and has no public repository link.


## V3.0 signature edition

- Filter the project gallery by AI & Data, Full-Stack, Security, and IoT & Healthcare.
- Explore the skills constellation by selecting a technical domain; its technology nodes animate into view.
- Open project case studies for the problem/approach, contributions, technology stack, and verified source links.
- Includes social preview metadata and reduced-motion handling for key new interactions.

## Production checks

Use Node.js 20.9 or later. Run `npm install`, `npm run build`, then `npm start` to test the production build locally before deploying to Vercel. Deployment has not been performed from this package.
