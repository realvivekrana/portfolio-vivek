# Portfolio Update Guide

This guide explains how to update your portfolio with new information, projects, certificates, and more.

## 📁 Project Structure

```
src/
├── assets/              # Images and media files
│   ├── vivek-profile.jpg    # Your profile photo
│   ├── cert1.jpg - cert5.jpg # Certificate images
│   └── project-*.jpg        # Project screenshots
├── components/portfolio/    # Portfolio sections
│   ├── Hero.tsx            # Hero section with name, title, resume button
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Projects.tsx        # Projects showcase
│   ├── Journey.tsx         # Experience & Education timeline
│   ├── Certificates.tsx    # Certificates gallery
│   └── Contact.tsx         # Contact form
├── data/
│   └── portfolio-data.ts   # ⭐ MAIN CONFIG FILE - Update here!
└── pages/
    └── Index.tsx           # Main page layout

public/
└── Vivek-Kumar-Rana-Resume.pdf  # Your resume file
```

## 🎯 Quick Updates

### 1. Update Personal Information

Edit `src/data/portfolio-data.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  location: "Your Location",
  // ... etc
};
```

### 2. Add New Projects

In `src/components/portfolio/Projects.tsx`, find the `projects` array:

```typescript
// PROJECTS CONFIGURATION - Add or update your projects here
const projects: Project[] = [
  {
    title: "Your Project Name",
    description: "Project description here",
    image: projectImage, // Import image at the top
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-live-url.com",
    githubUrl: "https://github.com/yourusername/repo",
  },
  // Add more projects...
];
```

**Steps to add a new project:**
1. Add project image to `src/assets/` (e.g., `project-myapp.jpg`)
2. Import it at the top: `import projectMyApp from "@/assets/project-myapp.jpg";`
3. Add new project object to the array
4. Save and the portfolio will auto-update!

### 3. Update Skills

In `src/components/portfolio/Skills.tsx`, find the `categories` array:

```typescript
// SKILLS CONFIGURATION - Update your skills here
const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### 4. Add Experience or Education

In `src/components/portfolio/Journey.tsx`, find the `milestones` array:

```typescript
// EXPERIENCE & EDUCATION CONFIGURATION - Update your journey here
const milestones = [
  {
    icon: Briefcase, // or GraduationCap for education
    year: "2026 - Present",
    title: "Your Position - Company Name",
    description: "Location and description of your role",
  },
  // Add more milestones...
];
```

### 5. Add New Certificates

**Step 1:** Add certificate image to `src/assets/`
- Copy your certificate image to `src/assets/cert6.jpg` (or any name)

**Step 2:** Update `src/components/portfolio/Certificates.tsx`:

```typescript
// Import at the top
import cert6 from "@/assets/cert6.jpg";

// Add to certificates array
const certificates: Certificate[] = [
  // ... existing certificates
  {
    title: "Your Certificate Name",
    image: cert6,
    issuer: "Issuing Organization",
  },
];
```

### 6. Update Social Links

In `src/components/portfolio/Footer.tsx` and `Contact.tsx`, update the social links:

```typescript
{ icon: Github, href: "https://github.com/yourusername" },
{ icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
{ icon: Twitter, href: "https://twitter.com/yourusername" },
```

### 7. Update Resume

Replace the file at `public/Vivek-Kumar-Rana-Resume.pdf` with your new resume (keep the same filename, or update the path in `Hero.tsx`).

## 🎨 Design & Styling

**IMPORTANT:** The design, animations, and UI theme are preserved. Only content is updated.

- All animations use Framer Motion
- Styling uses Tailwind CSS
- Theme is managed by `next-themes`
- Glass morphism effects are in `index.css`

## 🚀 Running the Portfolio

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Key Files to Update

| What to Update | File Location |
|----------------|---------------|
| Profile Photo | `src/assets/vivek-profile.jpg` |
| Resume PDF | `public/Vivek-Kumar-Rana-Resume.pdf` |
| Personal Info | `src/components/portfolio/Hero.tsx` & `About.tsx` |
| Skills | `src/components/portfolio/Skills.tsx` |
| Projects | `src/components/portfolio/Projects.tsx` |
| Experience/Education | `src/components/portfolio/Journey.tsx` |
| Certificates | `src/components/portfolio/Certificates.tsx` |
| Social Links | `src/components/portfolio/Footer.tsx` & `Contact.tsx` |

## 💡 Tips

1. **Images:** Keep images optimized (< 500KB) for faster loading
2. **Projects:** Add at least 3-6 projects to showcase your work
3. **Skills:** Be honest with skill levels (60-70% = learning, 80-90% = proficient)
4. **Resume:** Keep resume updated and under 2MB
5. **Certificates:** Use clear, readable certificate images

## 🔧 Troubleshooting

**Issue:** Images not showing
- Check file path is correct
- Ensure image is in `src/assets/` or `public/`
- Import statement is correct

**Issue:** Resume download not working
- Verify file is in `public/` folder
- Check filename matches in Hero.tsx

**Issue:** Changes not reflecting
- Save all files
- Check browser console for errors
- Restart dev server if needed

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🎯 SEO & Performance

- All images use lazy loading
- Semantic HTML structure
- Accessible navigation
- Fast page load times
- Mobile-first approach

---

**Need Help?** Check the component files - they have detailed comments explaining each section!
