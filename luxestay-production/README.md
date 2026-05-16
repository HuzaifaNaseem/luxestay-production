# LuxeStay — Luxury Property Rental Platform

An Airbnb-style property browsing UI built with React — featuring image carousels, category filters, a favorites system, and a split-screen map/listing layout. Production-ready build with Vite and Tailwind CSS.

Live at: [luxestay-production.netlify.app](https://luxestay-production.netlify.app/)

---

## What Problem It Solves

Demonstrates a complete, deployable property rental frontend with the interaction patterns users expect — touch-friendly image galleries, real-time filtering, share functionality, and a responsive layout that works on mobile and desktop without compromise.

---

## Features

- **Image carousel** — touch swipe on mobile, click-through on desktop, per-property
- **Category filters** — filter listings by property type (beachfront, mountain, etc.)
- **Favorites system** — heart toggle with persistent state
- **Split-screen layout** — listings + interactive map on desktop, stacked on mobile
- **Mobile bottom navigation** — tab bar with badge counts
- **Share panel** — per-card share button with copy-link support
- **Booking modal** — date selection and guest picker flow

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components and state |
| Vite 5 | Build tool and dev server |
| Tailwind CSS 3 | Utility-first styling |
| PostCSS + Autoprefixer | CSS processing |

---

## Screenshots

<!-- Add screenshots here -->

---

## Getting Started

```bash
git clone https://github.com/HuzaifaNaseem/luxestay-production.git
cd luxestay-production/luxestay-production
npm install
npm run dev
```

App runs at `http://localhost:3000`

### Build for Production

```bash
npm run build
# Output in dist/ — deploy to Netlify, Vercel, or any static host
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and search bar
│   ├── PropertyCard.jsx    # Listing card with carousel + actions
│   ├── ImageCarousel.jsx   # Touch-friendly image gallery
│   ├── BookingModal.jsx    # Date/guest selection flow
│   ├── SearchPanel.jsx     # Filter and search panel
│   ├── MobileNav.jsx       # Bottom tab bar
│   └── Icons.jsx           # SVG icon components
├── data/
│   └── properties.js       # Demo property data
├── App.jsx                 # Root component
└── index.css               # Tailwind + custom animations
```

---

## License

MIT
