////////// Navigation Links  /////////

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
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

////////////  Services Section Data   //////////

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

//////////  About Section Data   //////////

import {
  RiGraduationCapLine,
  RiLayout4Line,
  RiLightbulbLine,
  RiHtml5Line,
  RiCss3Line,
} from "@remixicon/react";

export const aboutData = {
  eyebrow: "GET TO KNOW ME",

  heading: "A little about me",

  highlightedText: "and what I do.",

  name: "Zeeshan Khan",

  role: "Front-End Developer",

  introduction:
    "I enjoy turning ideas into modern, meaningful, and engaging digital experiences.",

  description:
    "I'm a Front-End Developer and a Computer Science student passionate about building clean, responsive, and user-friendly websites. I use modern front-end technologies to bring ideas to life through thoughtful design and structured code.",

  moreAbout:
    "My journey in web development is driven by curiosity and a desire to keep improving. I enjoy exploring new techniques, solving interface challenges, and learning how design and development work together to create better user experiences. Alongside my development journey, I'm pursuing a Bachelor's degree in Computer Science and continuously strengthening my technical foundation.",

  image: "/images/about.webp",

  imageAlt: "Professional portrait of Zeeshan Khan",

  education: {
    label: "EDUCATION",
    degree: "Bachelor of Science",
    field: "Computer Science",
    status: "Currently pursuing",
    icon: RiGraduationCapLine,
  },

  focusAreas: [
    {
      title: "Clean Development",
      description:
        "Writing organized, readable, and maintainable front-end code.",
      icon: RiCodeSSlashLine,
    },
    {
      title: "Responsive Design",
      description:
        "Building interfaces that work smoothly across different screen sizes.",
      icon: RiLayout4Line,
    },
    {
      title: "Continuous Learning",
      description:
        "Improving my skills and exploring modern web development techniques.",
      icon: RiLightbulbLine,
    },
  ],

  skills: [
    { name: "HTML5", icon: RiHtml5Line },
    { name: "CSS3", icon: RiCss3Line },
  ],

  availability: "Open to learning opportunities and collaboration",
};

/////////////   Skills Section Data   //////////

import {
  RiGitBranchLine,
  RiReactjsLine,
  RiJavascriptLine,
} from "@remixicon/react";

export const skillsData = {
  eyebrow: "MY SKILLS",

  heading: "Technologies I",
  highlight: "Work With",

  description:
    "A collection of tools and technologies I use to create modern, responsive, and engaging web experiences.",

  skills: [
    {
      name: "HTML5",
      category: "Markup",
      icon: RiHtml5Line,
      description: "Semantic and accessible web structure.",
    },
    {
      name: "CSS3",
      category: "Styling",
      icon: RiCss3Line,
      description: "Modern layouts, styling, and animations.",
    },
    {
      name: "JavaScript",
      category: "Programming",
      icon: RiJavascriptLine,
      description: "Interactive and dynamic web experiences.",
    },
    {
      name: "React",
      category: "Library",
      icon: RiReactjsLine,
      description: "Component-based user interfaces.",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: RiTailwindCssFill,
      description: "Utility-first responsive styling.",
    },
    {
      name: "Framer Motion",
      category: "Animation",
      icon: RiFlashlightLine,
      description: "Smooth and engaging UI animations.",
    },
    {
      name: "Git",
      category: "Version Control",
      icon: RiGitBranchLine,
      description: "Tracking and managing code changes.",
    },
    {
      name: "GitHub",
      category: "Collaboration",
      icon: RiGithubFill,
      description: "Hosting and managing repositories.",
    },
    {
      name: "VS Code",
      category: "Code Editor",
      icon: RiCodeSSlashLine,
      description: "My everyday development environment.",
    },
    {
      name: "Figma",
      category: "Design",
      icon: RiPaletteLine,
      description: "Exploring and working with UI designs.",
    },
  ],

  summary: {
    number: "10",
    label: "Tools & Technologies",
    heading: "Always learning.",
    description:
      "I believe great development comes from continuous learning, practice, and attention to detail.",
  },

  cta: {
    label: "Explore My Projects",
    href: "#projects",
  },
};

////////////// Contact Section Data   //////////

import {
  RiMailLine,
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiArrowRightUpLine,
  RiMapPinLine,
  RiSparkling2Line,
  RiCalendarCheckLine,
} from "@remixicon/react";

export const contactData = {
  eyebrow: "GET IN TOUCH",

  heading: "Let's Build Something",
  highlight: "Meaningful.",

  description:
    "Have a project in mind, an opportunity to discuss, or simply want to connect? I'd love to hear from you. Let's turn good ideas into great digital experiences.",

  availability: "Open to opportunities and collaboration",

  contactTitle: "Let's start a conversation",

  contactDescription:
    "I'm always interested in connecting with people, discussing ideas, and exploring opportunities in front-end development.",

  email: {
    label: "EMAIL ME",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },

  location: {
    label: "LOCATION",
    value: "Pakistan",
    icon: RiMapPinLine,
  },
  Availability: {
    label: "AVAILABILITY",
    value: "Open for freelance work",
    icon: RiCalendarCheckLine,
  },

  socialTitle: "FIND ME ONLINE",

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/your-username",
      icon: RiGithubFill,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/your-username",
      icon: RiLinkedinBoxFill,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/your-username",
      icon: RiInstagramLine,
    },
  ],

  form: {
    title: "Send Me a Message",
    description: "Tell me a little about what you have in mind.",

    fields: [
      {
        name: "name",
        label: "YOUR NAME",
        placeholder: "Enter your name",
        type: "text",
      },
      {
        name: "email",
        label: "EMAIL ADDRESS",
        placeholder: "Enter your email",
        type: "email",
      },
      {
        name: "subject",
        label: "SUBJECT",
        placeholder: "What would you like to discuss?",
        type: "text",
      },
    ],

    message: {
      name: "message",
      label: "YOUR MESSAGE",
      placeholder: "Tell me about your project or idea...",
    },

    button: "Send Message",
    successMessage: "Your email draft is ready to send.",
  },

  footerNote: "Let's create something worth remembering.",

  decoration: {
    icon: RiSparkling2Line,
    contactIcon: RiMailLine,
    arrowIcon: RiArrowRightUpLine,
  },
};
