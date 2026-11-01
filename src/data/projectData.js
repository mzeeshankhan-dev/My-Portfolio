import {
  RiShoppingBag3Line,
  RiLayoutGridLine,
  RiDashboard3Line,
  RiPagesLine,
  RiCloudLine,
  RiBriefcaseLine,
  RiSmartphoneLine,
  RiGraduationCapLine,
  RiPaletteLine,
} from "@remixicon/react";

const projects = [
  {
    id: 1,
    title: "Luxe Commerce",
    subtitle: "Modern E-Commerce Experience",
    category: "Web Apps",
    year: "2026",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&auto=format&fit=crop&q=85",
    description:
      "A modern e-commerce front-end experience designed around elegant product presentation, intuitive navigation, and a smooth shopping journey.",
    overview:
      "Luxe Commerce is a front-end e-commerce concept focused on creating a premium shopping experience. The interface features carefully structured product sections, responsive layouts, and reusable UI components.",
    role: "Front-End Development & UI Implementation",
    technologies: ["React", "JavaScript", "Tailwind CSS", "CSS"],
    features: [
      "Responsive product layouts",
      "Interactive product cards",
      "Category-based product browsing",
      "Reusable React components",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiShoppingBag3Line,
  },
  {
    id: 2,
    title: "Creative Studio",
    subtitle: "Agency Landing Page",
    category: "Landing Pages",
    year: "2026",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&auto=format&fit=crop&q=85",
    description:
      "A sophisticated agency landing page with strong typography, refined visual hierarchy, and a clean modern layout.",
    overview:
      "Creative Studio is a landing page concept for a digital creative agency. It combines bold visual sections, clear calls to action, and responsive design to present services and build trust.",
    role: "UI Development & Responsive Implementation",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    features: [
      "Modern hero section",
      "Services and portfolio sections",
      "Responsive navigation",
      "Smooth scrolling interactions",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiPaletteLine,
  },
  {
    id: 3,
    title: "Nexus Dashboard",
    subtitle: "Analytics Dashboard UI",
    category: "Dashboards",
    year: "2026",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&auto=format&fit=crop&q=85",
    description:
      "A clean analytics dashboard interface designed to present important information through organized layouts and visual data elements.",
    overview:
      "Nexus Dashboard is a front-end dashboard concept with a focus on information hierarchy, reusable components, and a clear user interface.",
    role: "Front-End UI Development",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Dashboard overview layout",
      "Reusable statistic cards",
      "Sidebar navigation",
      "Responsive dashboard structure",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiDashboard3Line,
  },
  {
    id: 4,
    title: "Aurum Portfolio",
    subtitle: "Personal Portfolio Website",
    category: "Websites",
    year: "2026",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&auto=format&fit=crop&q=85",
    description:
      "A minimal and elegant portfolio website concept designed to showcase creative work, professional experience, and personal identity.",
    overview:
      "Aurum Portfolio focuses on a premium visual language, thoughtful spacing, and an easy-to-follow content structure.",
    role: "Design Implementation & Front-End Development",
    technologies: ["React", "CSS", "JavaScript", "Framer Motion"],
    features: [
      "Animated hero section",
      "Project showcase",
      "Responsive navigation",
      "Subtle scroll animations",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiBriefcaseLine,
  },
  {
    id: 5,
    title: "Weatherly",
    subtitle: "Weather Application Interface",
    category: "Web Apps",
    year: "2026",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1400&auto=format&fit=crop&q=85",
    description:
      "A modern weather application interface that presents weather information in a simple, accessible, and visually engaging way.",
    overview:
      "Weatherly is a front-end application concept focused on presenting weather information with clear visual sections and an intuitive interface.",
    role: "Front-End Development",
    technologies: ["React", "JavaScript", "CSS"],
    features: [
      "Weather information layout",
      "Location search interface",
      "Responsive design",
      "Dynamic UI states",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiCloudLine,
  },
  {
    id: 6,
    title: "LaunchPad",
    subtitle: "SaaS Product Landing Page",
    category: "Landing Pages",
    year: "2026",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=85",
    description:
      "A polished SaaS landing page concept with a clear product story, structured feature sections, and conversion-focused calls to action.",
    overview:
      "LaunchPad is designed to communicate a digital product's value through a structured layout, clear messaging, and modern UI styling.",
    role: "Front-End Development & Styling",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    features: [
      "Product-focused hero section",
      "Feature showcase",
      "Pricing layout",
      "Responsive page sections",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiPagesLine,
  },
  {
    id: 7,
    title: "FitTrack",
    subtitle: "Fitness App Interface",
    category: "Web Apps",
    year: "2026",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&auto=format&fit=crop&q=85",
    description:
      "A fitness application interface concept with structured activity sections and a clean, motivating visual experience.",
    overview:
      "FitTrack explores a simple fitness-focused interface with reusable UI patterns and responsive page layouts.",
    role: "Front-End UI Development",
    technologies: ["React", "CSS", "JavaScript"],
    features: [
      "Activity overview",
      "Workout cards",
      "Responsive layouts",
      "Interactive navigation",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiSmartphoneLine,
  },
  {
    id: 8,
    title: "LearnSpace",
    subtitle: "Online Learning Website",
    category: "Websites",
    year: "2026",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1400&auto=format&fit=crop&q=85",
    description:
      "An approachable online learning website concept with organized course sections and a student-friendly interface.",
    overview:
      "LearnSpace is a front-end education website concept built around readable content, clear course presentation, and responsive layouts.",
    role: "Front-End Development",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    features: [
      "Course listing interface",
      "Category sections",
      "Responsive navigation",
      "Reusable content cards",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiGraduationCapLine,
  },
  {
    id: 9,
    title: "Minimal Store",
    subtitle: "Product Showcase Website",
    category: "Websites",
    year: "2026",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&auto=format&fit=crop&q=85",
    description:
      "A minimal product showcase website with clean product presentation, balanced spacing, and a consistent visual style.",
    overview:
      "Minimal Store is a front-end website concept focused on product discovery and a straightforward browsing experience.",
    role: "UI Development",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    features: [
      "Product showcase sections",
      "Clean navigation",
      "Responsive product grid",
      "Consistent UI styling",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiShoppingBag3Line,
  },
];

export default projects;
