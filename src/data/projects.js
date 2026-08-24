import intelion from "../assets/intelion.png";
import aiReviewer from "../assets/ai-reviewer.png";
import bookstore from "../assets/bookstore.png";
import sellCar from "../assets/sellCar.png";
import MarketingComp from "../assets/MarketingComp.png";
import chatbot from "../assets/chatbot.png";
import learnees from "../assets/learnees.png";

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "featured", name: "Featured" },
  { id: "fullstack", name: "Full Stack" },
  { id: "ai", name: "AI & Tools" },
  { id: "frontend", name: "Frontend & Motion" },
];

export const projects = [
  {
    id: 1,
    featuredNumber: "01",
    title: "Learnees — Next-Gen Learning Platform",
    category: "fullstack",
    tagline: "Full-Stack EdTech Web Application",
    description:
      "A comprehensive, production-grade learning management platform engineered with end-to-end responsibility. Features role-based authentication, interactive course modules, cloud media storage, user progress analytics, and responsive real-time workflows.",
    longDescription:
      "Architected both frontend (Next.js) and backend (Node.js & Firebase) during Software Developer Internship. Engineered robust REST APIs, secure user authorization pipelines, and optimized cloud database queries for maximum throughput.",
    image: learnees,
    tags: ["Next.js", "Node.js", "Firebase", "Tailwind CSS", "REST APIs", "Cloud Auth"],
    demo: "https://learnees.com/",
    github: null, // Private commercial repository
    featured: true,
    accent: "from-red-600/20 to-red-900/40"
  },
  {
    id: 2,
    featuredNumber: "02",
    title: "AI Code Reviewer & Analyzer",
    category: "ai",
    tagline: "Intelligent Developer Productivity Tool",
    description:
      "An automated code inspection platform powered by Google Gemini AI. Evaluates source code for syntax errors, edge cases, algorithmic time complexity, and security vulnerabilities with real-time markdown feedback and an embedded code editor.",
    longDescription:
      "Integrated Google Gemini generative AI API with structured system prompts to return pinpoint refactoring suggestions. Features dynamic syntax highlighting, multi-language code parsing, and instant actionable reviews.",
    image: aiReviewer,
    tags: ["React.js", "Google Gemini API", "Tailwind CSS", "Monaco Editor", "Express.js"],
    github: "https://github.com/boylish/AI-Code-Reviewer",
    demo: "https://ai-code-reviewer-vins.onrender.com/",
    featured: true,
    accent: "from-rose-600/20 to-zinc-900/40"
  },
  {
    id: 3,
    featuredNumber: "03",
    title: "Productivity Dashboard & Task Manager",
    category: "fullstack",
    tagline: "Collaborative Team Workflow Suite",
    description:
      "A high-efficiency project and task orchestration dashboard. Empowers agile teams with Kanban boards, custom task lifecycles, priority tagging, assignment delegates, and real-time status transitions.",
    longDescription:
      "Constructed on the MERN stack with JWT authentication and secure session cookies. Provides interactive drag-and-drop task workflows, team member privilege management, and insightful productivity telemetry.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT"],
    github: "https://github.com/boylish/TaskManager",
    demo: "https://task-manager0879.netlify.app/",
    featured: true,
    accent: "from-red-700/20 to-neutral-900/40"
  },
  {
    id: 4,
    featuredNumber: "04",
    title: "Online Bookstore & E-Commerce",
    category: "fullstack",
    tagline: "Full-Featured Digital Commerce Store",
    description:
      "A high-converting digital bookstore featuring a responsive catalogue, instant search, dynamic filtering by genre and rating, Redux-powered persistent cart state, and an intuitive checkout flow.",
    longDescription:
      "Engineered backend REST endpoints for product catalogue management, inventory tracking, order history, and customer authentication. Optimized MongoDB indexing for millisecond response times.",
    image: bookstore,
    tags: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    github: "https://github.com/boylish/BookStore",
    demo: "https://bookstore-07.netlify.app/",
    featured: true,
    accent: "from-crimson-600/20 to-stone-900/40"
  },
  {
    id: 5,
    featuredNumber: "05",
    title: "CarSell — Auto Marketplace",
    category: "fullstack",
    tagline: "Automotive Listing & Discovery Portal",
    description:
      "A modern vehicle marketplace web application with listing creation, multi-attribute search filters, image gallery uploads, and inquiry messaging between buyers and sellers.",
    longDescription:
      "Leveraged Next.js App Router for optimal SEO indexing and fast server-side rendering, paired with MongoDB for flexible vehicle attribute schemas.",
    image: sellCar,
    tags: ["Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    github: "https://github.com/boylish/Car-Sell-WebApp",
    demo: "https://car-sell-web-app.vercel.app/",
    featured: false,
    accent: "from-red-500/20 to-zinc-900/40"
  },
  {
    id: 6,
    featuredNumber: "06",
    title: "E-Commerce Conversational AI Chatbot",
    category: "ai",
    tagline: "Context-Aware Automated Assistant",
    description:
      "A full-stack conversational chatbot tailored for online storefronts. Handles product inquiries, order tracking, and FAQ resolution with backend conversation persistence in MongoDB.",
    longDescription:
      "Provides real-time typing indicators, customizable automated intent matching, and clean UI integration for customer support workflows.",
    image: chatbot,
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    github: "https://github.com/boylish/E-commerce_Chatbot",
    demo: "https://chatbot0879.netlify.app/",
    featured: false,
    accent: "from-rose-500/20 to-neutral-900/40"
  },
  {
    id: 7,
    featuredNumber: "07",
    title: "Intelion Interactive Motion Experience",
    category: "frontend",
    tagline: "High-Performance GSAP Animated Showcase",
    description:
      "An award-winning caliber interactive agency landing page showcasing cutting-edge GSAP ScrollTrigger orchestrations, magnetic cursor interactions, and responsive UI choreography.",
    longDescription:
      "Built to demonstrate advanced frontend motion engineering with zero layout jank, optimized paint cycles, and 60fps smooth scrolling.",
    image: intelion,
    tags: ["JavaScript (ES6+)", "React.js", "GSAP", "ScrollTrigger", "Tailwind CSS"],
    github: "https://github.com/boylish/Intelion-Landing-Page",
    demo: "https://intelion-landing-page-two.vercel.app/",
    featured: false,
    accent: "from-red-600/20 to-zinc-900/40"
  },
  {
    id: 8,
    featuredNumber: "08",
    title: "Marketing Studio Digital Showcase",
    category: "frontend",
    tagline: "Creative Agency Experience",
    description:
      "A high-impact editorial landing page created for a creative studio, featuring dark glassmorphism, animated typography reveals, and seamless micro-interactions.",
    longDescription:
      "Focused on high-converting visual hierarchy, custom vector assets, and flawless cross-browser compatibility.",
    image: MarketingComp,
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "UI Design"],
    github: "https://github.com/boylish/GIF_Studio_Task",
    demo: "https://gif-studio-task.netlify.app/",
    featured: false,
    accent: "from-red-800/20 to-black/60"
  },
];
