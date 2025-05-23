import {
  mobile,
  aws,
  CryptoMart,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  Imaginify,
  git,
  figma,
  docker,
  meta,
  threejs,
  Plura,
  ShopNest,
  RoyalEstate,
  Banao,
  Tutorlancer,
  next,
  express,
  mysql,
  python,
  java,
  cpp
} from "../assets";

import { Monitor,Server,Bot,BrainCircuit} from 'lucide-react';



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developement",
    icon: Monitor,
    color: "#F472B6", // Tailwind pink-400
  },
  {
    title: "Backend Developement",
    icon: Server,
    color: "#60A5FA", // Tailwind blue-400
  },
  {
    title: "Automation & Scraping",
    icon: Bot,
    color: "#FBBF24", // Tailwind yellow-400
  },
  {
    title: "DSA Problem Solving",
    icon: BrainCircuit,
    color: "#34D399", // Tailwind green-400
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C/C++",
    icon: cpp,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Abhay Education Pvt. Ltd.",
    icon: Tutorlancer, // Replace with company logo if available
    iconBg: "#E6DEDD",
    date: "December 2024 - Present",
    points: [
      "Revamped website UI using React, TypeScript, Tailwind CSS, and Material-UI, increasing engagement by 25%.",
      "Integrated Twilio SDK for calling functionality, supporting the sales team with seamless communication.",
      "Automated data extraction (Web Scrapping) with Node.js, Puppeteer, MongoDB and LLM-powered categorization and analysis (DeepSeek, Ola Krutrim), cutting manual effort by 60%.",
      "Implemented SEO best practices, improving the website's search engine rankings and overall performance metrics by 35%.",
      "Collaborated on multiple projects creating 2-3 websites from scratch, brainstorming ideas, implementing features, and fixing bugs."
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "Banao Technologies",
    icon: Banao, // Replace with company logo if available
    iconBg: "#383E56",
    date: "August 2024 - October 2024",
    points: [
      "Engineered several RESTful APIs using Node.js and Express.js, MongoDB boosting data retrieval speeds by 40%.",
      "Implemented Odoo ERP models to automate data management for customers, vehicles, and invoices, enhancing platform accuracy and consistency.",
      "Optimized database queries and backend processes, reducing API response times by 35% and ensuring seamless integration for 1,000+ users."
    ],
  },
];

const testimonials = [
  {
    testimonial: "This product has completely transformed the way we work. It's intuitive, efficient, and user-friendly. Highly recommend it!",
    name: "John Doe",
    designation: "CEO",
    company: "Tech Solutions",
    image: "https://via.placeholder.com/150",
  },
  {
    testimonial: "The customer service is excellent. They always go above and beyond to help us with our needs. We've seen significant improvements in our workflow since we started using this.",
    name: "Jane Smith",
    designation: "Marketing Manager",
    company: "Creative Agency",
    image: "https://via.placeholder.com/150",
  },
  {
    testimonial: "An amazing tool for our team! It has streamlined our processes and made collaboration so much easier. We couldn't ask for more.",
    name: "Mark Johnson",
    designation: "Product Manager",
    company: "Innovation Corp",
    image: "https://via.placeholder.com/150",
  },
  {
    testimonial: "This product has completely transformed the way we work. It's intuitive, efficient, and user-friendly. Highly recommend it!",
    name: "John Doe",
    designation: "CEO",
    company: "Tech Solutions",
    image: "https://via.placeholder.com/150",
  },
];


const projects = [
  {
    name: "Plura",
    description:
      "A white labelled SaaS platform with Intuitive Dashboard, Agency management and Website Builder",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "ShadcnUI",
        color: "pink-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: Plura,
    source_code_link: "https://github.com/avinash-2912/Plura",
  },
  {
    name: "RoyalEstate",
    description:
      "A RealEstate Web-Application which provide listing of Property for buying, renting purpose, location on map and with Real-time chat facility",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: RoyalEstate,
    source_code_link: "https://github.com/avinash-2912/RoyalEstate",
  },
  {
    name: "Imaginify",
    description:
      "Web-based platform that allows you to manipulate images such as generative filling, background removal, color changing, object removing etc.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typeScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: Imaginify,
    source_code_link: "https://github.com/avinash-2912/Imaginify",
  },
  {
    name: "CryptoMart",
    description:
      "Web-based platform that allows you to see crypto currencies real time details and News, you can also compare different crypto currencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ant desgin",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: CryptoMart,
    source_code_link: "https://cryptoomartt.netlify.app/",
  },
  {
    name: "ShopNest",
    description:
      "It is an E-commerce website that allow user to buy various products, place order and do payment",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: ShopNest,
    source_code_link: "https://github.com/avinash-2912/shopNest",
  },
];

export { services, technologies, experiences, testimonials, projects };