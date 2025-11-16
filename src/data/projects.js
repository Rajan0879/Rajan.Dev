import intelion from "../assets/intelion.png";
import aiReviewer from "../assets/ai-reviewer.png";
import bookstore from "../assets/bookstore.png";
import sellCar from "../assets/sellCar.png";
import MarketingComp from "../assets/MarketingComp.png";
import chatbot from "../assets/chatbot.png";
import learnees from "../assets/learnees.png"; // <-- Add your project image here

export const projects = [
  {
    id: 1,
    title: "Learnees – Learning Platform",
    description:
      "A full-stack learning platform developed during my Software Developer Internship. Built using Next.js for the frontend and Node.js/Firebase for the backend. Includes secure authentication, optimized APIs, and efficient user management.",
    image: learnees,
    tags: ["Next.js", "Node.js", "Firebase", "Tailwind CSS"],
    demo: "https://yourDemoLinkHere.com", // optional
    featured: true,
  },

  {
    id: 2,
    title: "Task Management App",
    description:
      "A comprehensive task management application with features like task creation, assignment, progress tracking, and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/boylish/TaskManager",
    demo: "https://task-manager0879.netlify.app/",
    featured: true,
  },

  {
    id: 3,
    title: "AI Code Reviewer",
    description:
      "Built an AI-powered code reviewer using React. Integrated Google Gemini API for AI-based code analysis and a real-time code editor with syntax highlighting.",
    image: aiReviewer,
    tags: ["React", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/boylish/AI-Code-Reviewer",
    demo: "https://ai-code-reviewer-vins.onrender.com/",
    featured: true,
  },

  {
    id: 4,
    title: "Online Book Store",
    description:
      "A full-featured platform built with React, Node.js, and MongoDB. Includes user authentication, product management, and cart functionality.",
    image: bookstore,
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "https://github.com/boylish/BookStore",
    demo: "https://bookstore-07.netlify.app/",
    featured: true,
  },

  {
    id: 5,
    title: "Sell Car",
    description:
      "CarSell is a fullstack web application built with Next.js, MongoDB, and Tailwind CSS.",
    image: sellCar,
    tags: ["NextJs", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/boylish/Car-Sell-WebApp",
    demo: "https://car-sell-web-app.vercel.app/",
    featured: false,
  },

  {
    id: 6,
    title: "E-commerce Chatbot FullStack",
    description:
      "React-based chatbot integrated with a Node.js backend and MongoDB for chat logging and product management.",
    image: chatbot,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/boylish/E-commerce_Chatbot",
    demo: "https://chatbot0879.netlify.app/",
    featured: false,
  },

  {
    id: 7,
    title: "Marketing Company Landing Page",
    description:
      "An interactive landing page built with smooth animations and modern UI elements.",
    image: MarketingComp,
    tags: ["JavaScript", "React", "Tailwind CSS"],
    github: "https://github.com/boylish/GIF_Studio_Task",
    demo: "https://gif-studio-task.netlify.app/",
    featured: false,
  },

  {
    id: 8,
    title: "Animated landing page",
    description:
      "An interactive landing page built with smooth animations and modern UI elements.",
    image: intelion,
    tags: ["JavaScript", "React", "GSAP", "Tailwind CSS"],
    github: "https://github.com/boylish/Intelion-Landing-Page",
    demo: "https://intelion-landing-page-two.vercel.app/",
    featured: false,
  },
];
