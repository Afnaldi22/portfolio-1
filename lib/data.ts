import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TodolistImg from "@/public/Todolist.png";
import portfolioImg from "@/public/portfolio.png";
import blogImg from "@/public/blog.png";
import bookfindImg from "@/public/bookfind.png";
import MetaverseImg from "@/public/Metaverse.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bootcamp",
    location: "Grogol, Jakarta",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Still Studying",
    location: "Tomang, JKT",
    description:
      "I am currently still studying at Esa Unggul University.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
  {
    title: "Front-End Developer",
    location: "Pondok Indah, Jakarta",
    description:
      "I worked as a front-end developer for 3 years in 1 Partime job and 2 year Fulltime job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Jendral Sudirman, JKT",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Javascript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },

] as const;

export const projectsData = [
  {
    title: "TodoList",
    description:
      "My first project.",
    tags: ["React", "Tailwind", "HTML5"],
    imageUrl: TodolistImg,
  },
  {
    title: "Portfolio",
    description:
      "This is my first portfolio.",
    tags: ["React", "Javascript", "Tailwind", ],
    imageUrl: portfolioImg,
  },
  {
    title: "Blog",
    description:
      "create the first website blog.",
    tags: ["Next.js", "GraphQl", "Tailwind", ],
    imageUrl: blogImg,
  },
  {
    title: "Book Find",
    description:
      "create the first MERN Book find project.",
    tags: ["Next.js", "Mangodb", "Tailwind", "Express", "React" ],
    imageUrl: bookfindImg,
  },
  {
    title: "Metaverse",
    description:
      "Build Metaverse project.",
    tags: ["Next.js", "FrameMotion", "Tailwind" ],
    imageUrl: MetaverseImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Three.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "RestAPI",
  "Python",
  "Django",
  "Framer Motion",
  "AWS",
  "Firebase",
  "Docker",
] as const;
