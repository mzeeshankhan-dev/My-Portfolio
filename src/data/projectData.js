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
    title: "SitePilot-SaaS",
    subtitle: "SaaS Landing Page",
    category: "Landing Pages",
    year: "2026",
    featured: true,
    image: P1,
    description:
      'A premium, dark-themed SaaS landing page for "SitePilot AI," an AI-powered website growth and optimization platform. Built with React, Tailwind CSS, Framer Motion, and React Three Fiber.',
    overview:
      "SitePilot AI is a premium, dark-themed SaaS landing page built with React, Tailwind CSS, Framer Motion, and React Three Fiber. It features a fully responsive layout, smooth animations, interactive elements, and reusable components for clean, maintainable, and scalable code.",
    role: "Front-End Development & UI Implementation",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive layout",
      "Interactive sections",
      "Smooth Animations",
      "Reusable React components",
    ],
    liveUrl: "https://sitepilot-saas.netlify.app/",
    githubUrl: "https://github.com/mzeeshankhan-dev/SaaS-Landing-Page",
    icon: RiShoppingBag3Line,
  },

  {
    id: 2,
    title: "Ember & Oak Restaurant",
    subtitle: "Luxury Restaurant Website",
    category: "Websites",
    year: "2026",
    featured: false,
    image: P4,
    description:
      "A premium, fully responsive restaurant website crafted with modern web technologies, elegant UI design, and smooth user interactions.",
    overview:
      "Ember & Oak is a modern frontend restaurant website that delivers a luxurious digital dining experience. Designed with a sophisticated black-and-gold theme, the project combines elegant visuals, responsive layouts, and interactive elements to create a professional user experience across all devices.",
    role: "Design Implementation & Front-End Development",
    technologies: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    features: [
      "Animated hero section",
      "Signature menu showcase",
      "Interactive image gallery",
      "Customer testimonials",
      "Smooth CSS animations",
    ],
    liveUrl: "https://e-o-restaurant.netlify.app/",
    githubUrl: "https://github.com/mzeeshankhan-dev/Ember-Oak-Restaurant-website",
    icon: RiBriefcaseLine,
  },

  {
    id: 3,
    title: "Luxury Watch Landing Page",
    subtitle: "Product Landing Page",
    category: "Landing Pages",
    year: "2026",
    featured: true,
    image: P2,
    description:
      "A luxury watch product landing page featuring an interactive rotating hero section, smooth transitions, elegant product details, and a fully responsive design.",
    overview:
      "A luxury watch landing page with an interactive rotating hero section, smooth animations, elegant product showcases, and detailed watch information. Fully responsive with reusable components and a clean, modern design.",
    role: "UI Development & Responsive Implementation",
    technologies: ["React", "JavaScript","Tailwind CSS"],
    features: [
      "Modern interactive hero section",
      "elegant product showcases",
      "Fully responsive",
      "Smooth scrolling interactions",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/mzeeshankhan-dev/luxury-watch-landing-page",
    icon: RiPaletteLine,
  },

  {
    id: 4,
    title: "PAGHMAN General Trading LLC",
    subtitle: "Corporate Website",
    category: "Websites",
    year: "2026",
    featured: true,
    image: P3,
    description:
      "A modern, fully responsive corporate website for Paghman General Trading LLC, featuring a clean layout, reusable components, and professional business presentation.",
    overview:
      "A professional corporate website for Paghman General Trading LLC, featuring a clean and modern design, responsive layouts, reusable components, multi pages and well-structured sections to present the company's services, business information, and corporate identity.",
    role: "Front-End UI Development",
    technologies: ["React", "JavaScript", "Tailwind CSS","Framer Motion"],
    features: [
      "Multi-page React architecture",
      "Smooth page navigation",
      "Clean and professional UI",
      "Modern and user-friendly interface",
    ],
    liveUrl: "https://paghman.netlify.app/",
    githubUrl: "https://github.com/mzeeshankhan-dev/Paghman-General-Trading-LLC",
    icon: RiDashboard3Line,
  },

  {
    id: 5,
    title: "E-Commerce Website",
    subtitle: "E-Commerce Front-End",
    category: "Websites",
    year: "2026",
    featured: false,
    image: P5,
    description:
      "Responsive ecommerce frontend website with modern UI and product showcase.",
    overview:
      "A modern and fully responsive e-commerce website built with HTML, CSS, and JavaScript. The project includes product listings, product detail pages, shopping cart functionality, image galleries, and a responsive user interface.",
    role: "Front-End Development",
    technologies: ["HTML","CSS", "JavaScript", "LocalStorage API"],
    features: [
      "Shopping Cart Functionality",
      "Product Details Page",
      "Multiple Product Images",
      "LocalStorage Cart Persistence",
    ],
    liveUrl: " https://zk-e-commerce.netlify.app/",
    githubUrl: "https://github.com/mzeeshankhan-dev/ZK-E-commerce",
    icon: RiCloudLine,
  },

  {
    id: 6,
    title: "Personal Portfolio",
    subtitle: "Personal Portfolio Website",
    category: "Portfolio",
    year: "2025",
    featured: false,
    image: P6,
    description:
      "A modern and responsive personal portfolio website built to showcase skills, projects, and contact information.",
    overview:
      "A modern and responsive personal portfolio website built with HTML, CSS, and JavaScript, featuring elegant sections, smooth animations, interactive elements, and a clean professional design to showcase skills, projects, and personal information.",
    role: "Front-End Development & Styling",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive Design",
      "Projects Showcase",
      "Clean and Modern UI",
      "Contact Form",
    ],
    liveUrl: "https://mzk-portfolio.netlify.app/",
    githubUrl: "https://github.com/mzeeshankhan-dev/MZK-Portfolio",
    icon: RiPagesLine,
  },

  {
    id: 7,
    title: "Home Services Website",
    subtitle: "Business Website",
    category: "Landing Pages",
    year: "2025",
    featured: false,
    image: P7,
    description:
      "Servixo is a modern and fully responsive home services website built using HTML, CSS, and JavaScript.",
    overview:
      "Servixo is a modern and fully responsive home services website built using HTML, CSS, and JavaScript. The project is designed for service-based businesses such as plumbing, cleaning, electrical repair, and pest control services.",
    role: "Front-End UI Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Fully Responsive Design",
      "FormSubmit Email Handling",
      "Responsive layouts",
      "Hover Animations",
    ],
    liveUrl: "https://servixo-services.netlify.app/",
    githubUrl: "https://github.com/mzeeshankhan-dev/Servixo-HomeServices",
    icon: RiSmartphoneLine,
  },

  {
    id: 8,
    title: "Admin Dashboard",
    subtitle: "Modern Dashboard",
    category: "Dashboards",
    year: "2025",
    featured: false,
    image: P8,
    description:
      "A modern and fully responsive admin dashboard built with HTML, CSS, and JavaScript.",
    overview:
      "A modern and fully responsive admin dashboard built with HTML, CSS, and JavaScript. This dashboard is designed for home service businesses and includes analytics, bookings management, notifications, charts, employees, and interactive UI components.",
    role: "Front-End Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive Design",
      "Light and dark themes.",
      "Service distribution charts",
      "Interactive Sidebar",
    ],
    liveUrl: "",
    githubUrl: "",
    icon: RiGraduationCapLine,
  },
];

export default projects;
