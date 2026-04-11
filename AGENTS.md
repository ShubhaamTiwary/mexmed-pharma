# Mexmed Pharma Project Playbook

This project is being built with Cursor as an implementation agent.

## Project summary
Build a modern, responsive, SEO-friendly pharmaceutical company website for Mexmed Pharma using:
- Next.js App Router
- TypeScript
- Tailwind CSS

The website should feel:
- clean
- trustworthy
- premium
- modern
- conversion-oriented

## Working style
- plan before making large changes
- prefer small, reviewable edits
- create reusable components before assembling pages
- keep naming clean and predictable
- prioritize maintainability and production-ready quality

## Architecture priorities
- use the src/ directory
- keep pages thin
- create reusable layout components
- create reusable section components
- store structured site content in src/data
- use typed product data for dynamic product pages
- favor server components unless client interactivity is necessary

## Design priorities
- clean healthcare/pharma aesthetic
- professional visual hierarchy
- generous whitespace
- restrained color palette
- strong CTA placement
- good mobile responsiveness
- consistent cards, buttons, headings, and form styles

## Avoid
- giant page files
- inconsistent design patterns
- hardcoding all content inside route files
- flashy or gimmicky UI
- weak responsive behavior
- duplicate markup when a reusable component should exist

## Expected pages
- Home
- About
- Products
- Product Detail
- Services
- Quality
- Clients
- Career
- Contact

## Expected implementation flow
1. scaffold architecture
2. build layout and design system
3. create structured data
4. build homepage
5. build internal pages
6. build product list and detail pages
7. add contact form and SEO polish