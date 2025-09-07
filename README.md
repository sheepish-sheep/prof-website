# Visual Novel Inspired Portfolio

This is a **personal portfolio website** built with **Next.js** and **TailwindCSS**, styled with inspiration from **visual novel UIs** but polished enough for professional use. It serves as a central hub to showcase my projects, upcoming work, and background.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser to:**
   ```
   http://localhost:3000
   ```

## 🌐 Website Sections

### 1. **Projects**
* Displays completed projects with click-through navigation
* Each project includes title, description, technologies, and GitHub link
* VN-style Save/Load system with 9 save slots
* Previous/Next navigation between projects

### 2. **Upcoming Projects**
* Grid layout showing in-progress and planned projects
* Progress bars and status indicators
* Technology stacks and estimated completion dates

### 3. **About Me**
* Personal introduction and background
* Technical skills organized by category
* Professional experience timeline
* Contact information and social links

### 4. **Save/Load System**
* VN-style modal with 9 save slots
* Save current project state to any slot
* Load from saved slots with timestamps
* Delete saved slots functionality

## 🎨 Design Features

* **VN Aesthetic**: Dark theme with accent colors, textbox-style containers
* **Professional Polish**: Clean fonts (Inter/Roboto), responsive design
* **Smooth Animations**: Fade-ins, slide transitions, hover effects using Framer Motion
* **Accessibility**: Proper contrast, keyboard navigation support

## ⚙️ Tech Stack

* **Framework**: Next.js 14 with App Router
* **Styling**: TailwindCSS with custom VN color scheme
* **Animation**: Framer Motion for smooth transitions
* **State/Storage**: LocalStorage for Save/Load system
* **TypeScript**: Full type safety

## 🔧 Customization

To personalize the website:

1. **Update your name** in `app/components/TitleScreen.tsx` (line 25)
2. **Replace project data** in `app/components/ProjectsSection.tsx` (lines 20-60)
3. **Update upcoming projects** in `app/components/UpcomingSection.tsx` (lines 20-60)
4. **Customize your info** in `app/components/AboutSection.tsx` (lines 20-40)
5. **Update contact links** in `app/components/AboutSection.tsx` (lines 160-180)

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── TitleScreen.tsx      # Main menu
│   │   ├── ProjectsSection.tsx  # Projects showcase
│   │   ├── UpcomingSection.tsx  # Future projects
│   │   ├── AboutSection.tsx     # Personal info
│   │   └── SaveLoadModal.tsx    # VN-style save system
│   ├── globals.css              # TailwindCSS styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page component
├── package.json
├── tailwind.config.js           # Custom VN color scheme
└── tsconfig.json
```

## 🎯 Features Implemented

✅ **Title Screen**: VN-style main menu with smooth animations  
✅ **Projects Section**: Click-through navigation with save/load  
✅ **Upcoming Projects**: Grid layout with progress tracking  
✅ **About Section**: Professional bio with skills and experience  
✅ **Save/Load System**: 9-slot VN-style save system  
✅ **Responsive Design**: Works on desktop and mobile  
✅ **Smooth Animations**: Framer Motion transitions throughout  

## 🚀 Deployment

The website is ready to deploy to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 📄 License

MIT License. Free to use and modify.
