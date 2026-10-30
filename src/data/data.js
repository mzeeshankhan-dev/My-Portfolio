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

// import {
//   Code2,
//   Palette,
//   Braces,
//   GitBranch,
//   // Github,
//   Wind,
//   Atom,
//   Monitor,
//   Zap,
// } from "lucide-react";

// const skills = [
//   {
//     name: "HTML",
//     icon: Code2,
//   },
//   {
//     name: "CSS",
//     icon: Palette,
//   },
//   {
//     name: "JavaScript",
//     icon: Braces,
//   },
//   {
//     name: "Git",
//     icon: GitBranch,
//   },
//   // {
//   //   name: "GitHub",
//   //   icon: Github,
//   // },
//   {
//     name: "Tailwind CSS",
//     icon: Wind,
//   },
//   {
//     name: "React",
//     icon: Atom,
//   },
//   {
//     name: "VS Code",
//     icon: Monitor,
//   },
//   {
//     name: "Framer Motion",
//     icon: Zap,
//   },
// ];

// export default skills;

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

const skills = [
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

export default skills;
