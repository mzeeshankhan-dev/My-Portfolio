////////// Navigation Links  /////////

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

////////// Hero Section Contect Data   /////////

export const heroData = {
  availability: "Available for new projects",
  eyebrow: "HELLO THERE, WELCOME TO MY PORTFOLIO",
  name: "Zeeshan Khan",
  role: "A Front-End Developer",
  heading: "Building Modern & Interactive",
  description:
    "I build responsive, visually engaging websites using React, JavaScript, Tailwind CSS, and Framer Motion.",
  buttons: [
    {
      text: "View Portfolio",
      href: "#projects",
    },
    {
      text: "Contact Me",
      href: "#contact",
    },
  ],
};

//////////////  Scrool Technology Icons   //////////

import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiGitBranchFill,
  RiGithubFill,
  RiTailwindCssFill,
  RiReactjsFill,
  RiCodeSSlashFill,
  // RiFramerLine,
} from "@remixicon/react";

export const skills = [
  {
    name: "HTML",
    icon: RiHtml5Fill,
  },
  {
    name: "CSS",
    icon: RiCss3Fill,
  },
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
  },
  {
    name: "Git",
    icon: RiGitBranchFill,
  },
  {
    name: "GitHub",
    icon: RiGithubFill,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    name: "React",
    icon: RiReactjsFill,
  },
  {
    name: "VS Code",
    icon: RiCodeSSlashFill,
  },
  // {
  //   name: "Framer Motion",
  //   icon: RiFramerLine,
  // },
];



import {
  RiLayout2Line,
  RiPagesLine,
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiPaletteLine,
  RiFlashlightLine,
} from "@remixicon/react";

export const services = [
  {
    number: "01",
    title: "Custom Website Development",
    description:
      "I build modern, visually engaging websites tailored to your brand, goals, and audience — with clean layouts and a professional user experience.",
    features: [
      "Custom website layouts",
      "Modern design approach",
      "Clean and structured code",
    ],
    icon: RiLayout2Line,
  },
  {
    number: "02",
    title: "Landing Page Development",
    description:
      "I create focused and visually compelling landing pages that communicate your message clearly and guide visitors towards meaningful actions.",
    features: [
      "Modern landing page design",
      "Clear content structure",
      "Strong visual hierarchy",
    ],
    icon: RiPagesLine,
  },
  {
    number: "03",
    title: "React Front-End Development",
    description:
      "I develop interactive front-end experiences using React, with reusable components and well-organized code for easier maintenance.",
    features: [
      "Reusable React components",
      "Interactive interfaces",
      "Organized component structure",
    ],
    icon: RiCodeSSlashLine,
  },
  {
    number: "04",
    title: "Responsive Web Design",
    description:
      "I make websites adapt smoothly to different screen sizes, delivering a consistent browsing experience across mobile, tablet, and desktop.",
    features: [
      "Mobile-friendly layouts",
      "Tablet and desktop support",
      "Flexible page structures",
    ],
    icon: RiSmartphoneLine,
  },
  {
    number: "05",
    title: "UI Styling & Tailwind CSS",
    description:
      "I transform designs into polished interfaces using modern CSS and Tailwind CSS, focusing on spacing, typography, consistency, and detail.",
    features: [
      "Tailwind CSS styling",
      "Consistent design systems",
      "Polished UI components",
    ],
    icon: RiPaletteLine,
  },
  {
    number: "06",
    title: "JavaScript Interactivity",
    description:
      "I bring websites to life with useful interactions and dynamic features that make the user experience more engaging and intuitive.",
    features: [
      "Interactive navigation",
      "Tabs, menus and sliders",
      "Dynamic UI functionality",
    ],
    icon: RiFlashlightLine,
  },
];
