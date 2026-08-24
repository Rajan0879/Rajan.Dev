export const skillCategories = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend & UI" },
  { id: "backend", name: "Backend & APIs" },
  { id: "database", name: "Databases" },
  { id: "state", name: "State & Forms" },
  { id: "mobile", name: "Mobile Development" },
  { id: "tools", name: "DevOps & Tools" },
  { id: "foundations", name: "Foundations" },
];

export const skills = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    badge: "Core Stack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Component lifecycle, custom hooks, virtual DOM optimization, SPA architecture."
  },
  {
    name: "Next.js",
    category: "frontend",
    badge: "Production",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "App Router, SSR, SSG, Server Components, API routes & performance optimization."
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    badge: "Core",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Async/await, closures, prototypes, event loop, DOM manipulation & modular JS."
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    badge: "Styling",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    description: "Utility-first modern design systems, custom themes, dark mode & responsiveness."
  },
  {
    name: "ShadCN UI",
    category: "frontend",
    badge: "UI System",
    icon: "https://raw.githubusercontent.com/radix-ui/primitives/main/packages/react/src/images/radix-icon.png",
    description: "Accessible, customizable, headless Radix-based reusable component systems."
  },
  {
    name: "GSAP",
    category: "frontend",
    badge: "Motion",
    icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    description: "ScrollTrigger, timeline orchestrations, high-performance web animations."
  },
  {
    name: "Framer Motion",
    category: "frontend",
    badge: "Motion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    description: "Spring physics, layout animations, exit transitions, gesture handling."
  },
  {
    name: "Styled Components",
    category: "frontend",
    badge: "CSS-in-JS",
    icon: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
    description: "Dynamic theming, scoped styling, CSS-in-JS for enterprise React apps."
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    badge: "Standard",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Semantic HTML, web accessibility, Flexbox, Grid, CSS animations."
  },

  // State & Forms
  {
    name: "Zustand",
    category: "state",
    badge: "State",
    icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg",
    description: "Lightweight, un-opinionated reactive state management with zero boilerplate."
  },
  {
    name: "Redux Toolkit",
    category: "state",
    badge: "State",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    description: "Predictable state container, slices, RTK Query, middleware & async thunks."
  },
  {
    name: "React Hook Form",
    category: "state",
    badge: "Forms",
    icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.png",
    description: "High-performance, minimal re-renders, uncontrolled forms with dynamic validation."
  },
  {
    name: "Zod",
    category: "state",
    badge: "Validation",
    icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
    description: "TypeScript-first schema declaration, strict runtime data validation & error parsing."
  },
  {
    name: "Context API",
    category: "state",
    badge: "Core",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Scoped state distribution and dependency injection across React trees."
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "backend",
    badge: "Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Asynchronous I/O, event-driven backend microservices, REST server architectures."
  },
  {
    name: "Express.js",
    category: "backend",
    badge: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Robust middleware pipeline, RESTful API design, route controllers, error handlers."
  },
  {
    name: "REST APIs",
    category: "backend",
    badge: "Architecture",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    description: "Scalable API design, HTTP status patterns, rate limiting, request validation."
  },
  {
    name: "Firebase",
    category: "backend",
    badge: "BaaS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description: "Firestore, cloud authentication, real-time database, cloud functions & hosting."
  },
  {
    name: "JWT Authentication",
    category: "backend",
    badge: "Security",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",
    description: "Stateless session authentication, token refresh flows, RBAC authorization."
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "database",
    badge: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Relational database modeling, complex SQL joins, indexing, query optimization."
  },
  {
    name: "MongoDB",
    category: "database",
    badge: "NoSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "Document aggregation pipelines, schema design with Mongoose, indexing."
  },

  // Mobile
  {
    name: "Capacitor",
    category: "mobile",
    badge: "Cross-Platform",
    icon: "https://raw.githubusercontent.com/ionic-team/capacitor/main/assets/logo.png",
    description: "Packaging modern Next.js/React web apps into native Android APKs/bundles."
  },
  {
    name: "Android Development",
    category: "mobile",
    badge: "Mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    description: "Mobile viewport handling, native device bridge, camera & storage permissions."
  },

  // DevOps & Tools
  {
    name: "Docker",
    category: "tools",
    badge: "Containers",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Containerization, multi-stage Dockerfiles, consistent local/prod environments."
  },
  {
    name: "Git & GitHub",
    category: "tools",
    badge: "VCS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Branching workflows, pull requests, semantic versioning, merge conflict resolution."
  },
  {
    name: "CI/CD & Deployment",
    category: "tools",
    badge: "DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description: "Automated pipelines, Vercel, Netlify, Render cloud deployments & continuous delivery."
  },

  // Languages & Foundations
  {
    name: "C / C++",
    category: "foundations",
    badge: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    description: "Low-level memory management, pointers, OOP, high-performance problem solving."
  },
  {
    name: "DSA & Problem Solving",
    category: "foundations",
    badge: "Foundations",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "100+ problems solved on LeetCode & platforms. Trees, graphs, DP, recursion."
  }
];

export const marqueeTech = [
  "Next.js", "React.js", "Node.js", "PostgreSQL", "MongoDB", "Express.js",
  "Capacitor", "Zustand", "Redux Toolkit", "GSAP", "Tailwind CSS", "Docker",
  "React Hook Form", "Zod", "Firebase", "REST APIs", "Git", "DSA"
];
