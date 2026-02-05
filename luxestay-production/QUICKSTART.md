# 🚀 Quick Start Guide - LuxeStay Production

## For VS Code Users

### Step 1: Open Project
1. Open VS Code
2. File → Open Folder
3. Select `luxestay-production` folder

### Step 2: Install Dependencies
Open VS Code terminal (Ctrl + `) and run:
```bash
npm install
```

Wait for installation to complete (~1-2 minutes)

### Step 3: Start Development Server
```bash
npm run dev
```

Your browser will automatically open at `http://localhost:3000`

## What You'll See

✅ No CDN warnings in console  
✅ Fast hot-reload when you make changes  
✅ Professional development experience  
✅ Production-ready code structure  

## Common Commands

| What You Want | Command |
|---------------|---------|
| Start developing | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |
| Stop the server | Press `Ctrl + C` in terminal |

## File You Can Edit

- **src/data/properties.js** - Add/edit property listings
- **src/index.css** - Change colors, fonts, animations
- **tailwind.config.js** - Customize Tailwind theme
- **src/components/*.jsx** - Modify component behavior

## Need Help?

1. Check `README.md` for detailed documentation
2. All code is commented for clarity
3. Each component is in its own file

## Deployment

When ready to deploy:
```bash
npm run build
```

Then upload the `dist/` folder to any hosting service:
- Netlify (easiest - drag & drop)
- Vercel
- GitHub Pages
- Your own server

---

**That's it! You're ready to build amazing luxury rental experiences!** 🏖️✨

Questions? Everything is documented in the main README.md
