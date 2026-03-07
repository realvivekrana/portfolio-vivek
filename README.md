# Vivek Kumar Rana - MERN Full Stack Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://your-portfolio-url.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A modern, responsive portfolio website showcasing my skills, projects, and experience as a MERN Full Stack Developer.

## 🌐 Live Demo

**[View Live Portfolio](https://your-portfolio-url.vercel.app)** *(Will be updated after deployment)*

## 📋 About

This is my personal portfolio website built with modern web technologies. It features a clean, professional design with smooth animations, dark/light mode toggle, and full responsiveness across all devices.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and professional design with glassmorphism effects
- 🌓 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Optimized for speed with Vite
- 🎭 **Smooth Animations** - Framer Motion animations throughout
- 🔄 **Continuous Typing Animation** - Dynamic role display in hero section
- 📊 **Interactive Sections** - Skills, projects, experience, education, and certificates
- 📧 **Contact Form** - Easy way to get in touch
- 🚀 **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### UI Components
- **Shadcn UI** - Component library
- **Radix UI** - Headless UI components
- Custom glassmorphism effects

### Deployment
- **Vercel** - Hosting and deployment
- **GitHub** - Version control

## 📂 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── Vivek-Kumar-Rana-Resume.pdf
│   └── favicon.ico
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # React components
│   │   └── portfolio/     # Portfolio-specific components
│   ├── contexts/          # React contexts (Theme)
│   ├── data/              # Portfolio data
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio.git
```

2. Navigate to the project directory:
```bash
cd -Vivek-Rana-MERN-Full-Stack-Developer-Portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:8080
```

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## 🧪 Run Tests

```bash
npm run test
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Personal Data**: `src/data/portfolio-data.ts`
2. **Hero Section**: `src/components/portfolio/Hero.tsx`
3. **About Section**: `src/components/portfolio/About.tsx`
4. **Skills**: `src/components/portfolio/Skills.tsx`
5. **Projects**: `src/components/portfolio/Projects.tsx`
6. **Experience**: `src/components/portfolio/Experience.tsx`
7. **Education**: `src/components/portfolio/Education.tsx`
8. **Certificates**: `src/components/portfolio/Certificates.tsx`

### Add New Projects

Edit `src/components/portfolio/Projects.tsx` and add your project to the `projects` array:

```typescript
{
  title: "Your Project Name",
  description: "Project description",
  image: projectImage,
  tech: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/yourusername/repo",
}
```

### Change Theme Colors

Edit `src/index.css` to modify the color scheme:

```css
:root {
  --primary: 185 95% 45%;  /* Cyan */
  --accent: 270 60% 55%;   /* Purple */
  /* ... other colors */
}
```

## 📱 Sections

1. **Hero** - Introduction with typing animation
2. **About** - Brief introduction and highlights
3. **Skills** - Technical skills with progress bars
4. **Projects** - Portfolio of work
5. **Experience** - Work history timeline
6. **Education** - Academic background
7. **Certificates** - Professional certifications
8. **Contact** - Contact form and social links
9. **Footer** - Copyright and additional info

## 🌟 Key Features Explained

### Dark/Light Mode
- Toggle button in navbar
- Smooth transitions between themes
- Preference saved in localStorage
- Proper color schemes for both modes

### Mobile Navigation
- Slide-in menu from right
- Backdrop with blur effect
- Auto-close on link click
- Touch-friendly interface

### Animations
- Scroll-triggered animations
- Hover effects on cards
- Typing animation in hero
- Smooth page transitions

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `postcss.config.js` - PostCSS configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vivek Kumar Rana**

- GitHub: [@realvivekrana](https://github.com/realvivekrana)
- LinkedIn: [Vivek Kumar Rana](https://www.linkedin.com/in/mrvivekrana/)
- Twitter: [@mrvivaanrana](https://x.com/mrvivaanrana)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📞 Contact

For any inquiries or collaboration opportunities, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Vivek Kumar Rana](https://www.linkedin.com/in/mrvivekrana/)
- Portfolio: [Live Demo](https://your-portfolio-url.vercel.app)

---

**Built with ❤️ by Vivek Kumar Rana**
