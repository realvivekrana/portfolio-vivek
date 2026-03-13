/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * This file contains all your personal information, projects, experience, and education.
 * Update this file to easily modify your portfolio content without touching component code.
 */

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "Vivek Kumar Rana",
  title: "MERN Full Stack Developer",
  email: "vivekranaworks@gmail.com",
  location: "Noida, Uttar Pradesh, India",
  bio: "Passionate MERN Full Stack Developer crafting scalable web applications with React, Node.js, Express.js, and MongoDB. Turning ideas into production-ready solutions.",
  profileImage: "/src/assets/vivek-profile.jpg",
  resumePath: "/Vivek-Kumar-Rana-Resume.pdf",
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = {
  github: "https://github.com/realvivekrana",
  linkedin: "https://www.linkedin.com/in/mrvivekrana/",
  twitter: "https://x.com/mrvivaanrana",
};

// ============================================
// ROLES (for typing animation in Hero section)
// ============================================
export const roles = [
  "MERN Full Stack Developer",
  "Frontend Developer",
  "React Developer",
  "Backend Developer",
];

// ============================================
// SKILLS
// ============================================
export const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React + Vite", level: 80 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
  ],
  database: [
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 70 },
  ],
};

// ============================================
// FEATURED PROJECTS
// ============================================
export const projects = [
  {
    title: "ChatMate AI Assistant",
    description: "AI powered chat assistant web application with modern UI and real-time messaging experience.",
    image: "/images/projects/chatmate.svg",
    tech: ["React", "JavaScript", "API", "Tailwind CSS"],
    liveUrl: "https://realvivekrana.github.io/chatmate-ai-assistant/",
    githubUrl: "https://github.com/realvivekrana/chatmate-ai-assistant",
  },
  {
    title: "Sunny Skies Weather App",
    description: "Weather dashboard built with React that displays real-time weather data using weather APIs with a clean responsive UI.",
    image: "/images/projects/weather.svg",
    tech: ["React", "Weather API", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/realvivekrana/sunny-skies-app",
  },
  {
    title: "AdminSuite Pro React Dashboard",
    description: "Professional admin dashboard with analytics cards, charts, and responsive UI built with React.",
    image: "/images/projects/admin.svg",
    tech: ["React", "Charts", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://realvivekrana.github.io/adminsuite-pro-react-dashboard/",
    githubUrl: "https://github.com/realvivekrana/adminsuite-pro-react-dashboard",
  },
];

// ============================================
// ADDITIONAL PROJECTS (for future use)
// ============================================
export const moreProjects: typeof projects = [
  // Add more projects here following the same structure:
  // {
  //   title: "Your Project Name",
  //   description: "Brief project description",
  //   image: "/project-image.svg",
  //   tech: ["Tech1", "Tech2", "Tech3"],
  //   liveUrl: "https://live-url.com",
  //   githubUrl: "https://github.com/yourusername/repo",
  // },
];

// ============================================
// EXPERIENCE & EDUCATION (Journey Timeline)
// ============================================
export const journey = [
  {
    type: "education",
    year: "2018-2019",
    title: "Secondary School Certificate (10th)",
    description: "Government Higher Secondary School, Jharkhand - Grade: 81.20%",
  },
  {
    type: "education",
    year: "2019-2021",
    title: "Higher Secondary Certificate (12th - Science PCM)",
    description: "Inter Science College, Hazaribagh - Grade: 65%",
  },
  {
    type: "education",
    year: "2021-2024",
    title: "Bachelor of Computer Applications (BCA)",
    description: "Vinoba Bhave University (VBU), Hazaribagh - CGPA: 6.86. Studied programming, data structures, DBMS, and web development.",
  },
  {
    type: "experience",
    year: "Sep 2023 - May 2024",
    title: "MERN Stack Developer Trainee - Skill Academy",
    description: "Mumbai, Maharashtra (Remote). Learned full-stack development including HTML, CSS, JavaScript, React, and backend technologies.",
  },
  {
    type: "education",
    year: "Jul 2024 - Aug 2026",
    title: "Master of Computer Applications (MCA)",
    description: "Amity University Online - Specialization in AI & ML. Currently pursuing with focus on AI, ML, DSA, DBMS, Python, and Software Engineering.",
  },
  {
    type: "experience",
    year: "Apr 2025 - Sep 2025",
    title: "MERN Stack Developer Trainee - CETPA Infotech",
    description: "Noida, Uttar Pradesh (On-site). Completed training in MERN stack including React, Node.js, Express.js, and MongoDB. Built multiple full-stack projects.",
  },
  {
    type: "experience",
    year: "Feb 2026 - Present",
    title: "Frontend Developer Intern - Athenura",
    description: "Noida, Uttar Pradesh (Remote). Working on frontend development using HTML, Tailwind CSS, and modern UI practices.",
  },
];

// ============================================
// CERTIFICATES
// ============================================
export const certificates = [
  {
    title: "MERN Stack Development Certificate",
    image: "/src/assets/cert1.jpg",
    issuer: "CETPA Infotech", // Update with actual issuer
  },
  {
    title: "Frontend Development Certificate",
    image: "/src/assets/cert2.jpg",
    issuer: "Skill Academy", // Update with actual issuer
  },
  {
    title: "Web Development Certificate",
    image: "/src/assets/cert3.jpg",
    issuer: "Certification Authority", // Update with actual issuer
  },
  {
    title: "JavaScript Certificate",
    image: "/src/assets/cert4.jpg",
    issuer: "Certification Authority", // Update with actual issuer
  },
  {
    title: "React Development Certificate",
    image: "/src/assets/cert5.jpg",
    issuer: "Certification Authority", // Update with actual issuer
  },
];
