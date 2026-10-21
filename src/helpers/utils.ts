import html from "@/assets/html.png"
import css from "@/assets/css.png"
import ts from "@/assets/TypeScript.svg"
import nodejs from "@/assets/Node.js.svg"
import react from "@/assets/reactts.png"
import tailwind from "@/assets/tailwind.png"
import bootstrap from "@/assets/bootstrap.png"
import sql from "@/assets/SQLite.svg"
import mongodb from "@/assets/MongoDB.svg"
import git from "@/assets/git.png"
// import react from "@/assets/react.png"
import npm from "@/assets/NPM.png"
import python from "@/assets/Python.png"
import express from "@/assets/express.png"
import nextjs from "@/assets/Next.js.svg"
import cypress from "@/assets/Cypress.svg"
import docker from "@/assets/Docker.svg"
import kubernetes from "@/assets/Kubernetes.svg"
import { Skills } from "@/dto/skills"

// *************************************

import project2 from "@/assets/ecommerce.png";
import hallaIcon from "@/assets/halla-icon-1024.png";
import { Projects } from "@/dto/Projects"

// *************************************

import chinese from "@/assets/ch.png"
import english from "@/assets/en.png"
import { Languages } from "@/dto/Languages"


export const skills: Skills = { html, css, ts, nodejs, npm, python, express, react, tailwind, sql, bootstrap, git, mongodb, nextjs, cypress, docker, kubernetes };
export const projects: Projects = [
	{
    id: "ecommerce",
    name: "Plantas Bonitas E-commerce",
    description: "Full-stack e-commerce platform for selling beautiful plants",
    image: project2,
    url: "https://ecommerce-drab-six.vercel.app/",
    detailedDescription: "A complete e-commerce solution developed to practice modern web development technologies. This project showcases authentication, database management, and real-time shopping cart functionality in a clean and user-friendly interface.",
    purpose: "Built as a comprehensive learning project to master Next.js 14, MongoDB, NextAuth, and modern e-commerce patterns with internationalization support.",
    technologies: ["Next.js 14", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS", "Zustand", "i18next", "Axios"],
    features: [
        "User authentication with NextAuth (credentials & Google OAuth)",
        "Product catalog with search and filtering",
        "Shopping cart with real-time updates",
        "MongoDB integration for data persistence",
        "Internationalization (English/Spanish)",
        "Responsive design with Tailwind CSS",
        "Protected routes and role-based access",
        "Image optimization with Next.js Image component"
    ]
},
	{
		id: "halla",
		name: "Halla",
		description: "Private project currently in development",
		image: hallaIcon,
		url: "/Halla-Preview.pdf",
		detailedDescription: "Halla is my most ambitious project to date, currently under active development. This presentation offers a preview of its direction, product vision, and the experience I am building while keeping the implementation private for now.",
		purpose: "A confidential product initiative focused on delivering a polished, scalable, and purposeful digital experience.",
		technologies: ["Product Development", "Full-Stack Architecture", "User Experience", "Scalable Systems"],
		features: [
			"Project vision and product direction",
			"Early experience and interface previews",
			"Implementation details intentionally kept private"
		]
	}
];
export const languages: Languages = { chinese, english };