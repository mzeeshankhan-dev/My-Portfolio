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

///  Projects Images  ///

import P1 from "../assets/projectsImg/sitepilot-saas.Thumb.webp";
import P2 from "../assets/projectsImg/watchLandingPage.webp";
import P3 from "../assets/projectsImg/PaghmanImg.webp";
import P4 from "../assets/projectsImg/E-O-Restaurant.webp";
import P5 from "../assets/projectsImg/E-commerce.webp";
import P6 from "../assets/projectsImg/PortfolioImg.webp";
import P7 from "../assets/projectsImg/servicesImg.webp";
import P8 from "../assets/projectsImg/Dashboard.webp";


const projects = [
  {
    id: 1,
    title: "Luxe Commerce",
    subtitle: "Modern E-Commerce Experience",
    category: "Web Apps",
    year: "2026",
    featured: true,
    image: P1,
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
    image: P2,
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
    image: P3,
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
    image: P4,
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
    image: P5,
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
    image: P6,
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
    image: P7,
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
    image: P8,
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
];

export default projects;
