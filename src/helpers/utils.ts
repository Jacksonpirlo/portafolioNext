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
import { Skills } from "@/dto/skills"

// *************************************

import project1 from "@/assets/greengables.jpeg";
import project2 from "@/assets/ecommerce.png";
import project3 from "@/assets/login.jpeg";
import project4 from "@/assets/random-dogs.jpeg";
import { Projects } from "@/dto/Projects"

// *************************************

import chinese from "@/assets/ch.png"
import english from "@/assets/en.png"
import { Languages } from "@/dto/Languages"


export const skills: Skills = { html, css, ts, nodejs, npm, python, express, react, tailwind, sql, bootstrap, git, mongodb, nextjs, cypress };
export const projects: Projects = [
	{
		id: "greengables",
		name: "Green Gables",
		description: "Website for my school",
		image: project1,
		url: "https://jacksonpirlo.github.io/GreenGables/",
		detailedDescription: "Green Gables is a comprehensive website developed for a school research group dedicated to educating students about the dangers of psychoactive substances. The platform serves as an educational hub, providing valuable information and resources to help young people make informed decisions.",
		purpose: "Created for a school research group focused on awareness and prevention of psychoactive substance abuse among students.",
		technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
		features: [
			"Educational content about substance abuse prevention",
			"Responsive design for mobile and desktop access",
			"Clean and professional interface for students",
			"Interactive sections for better engagement",
			"Resource library with helpful information"
		]
	},
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
		id: "register",
		name: "Register",
		description: "Login made with PHP and SQL",
		image: project3,
		url: "https://github.com/Jacksonpirlo/Registro-php-sql",
		detailedDescription: "A secure authentication system implementing both registration and login functionality. This project demonstrates backend development skills with PHP and database management using SQL, including proper security practices for user authentication.",
		purpose: "Built to learn and implement secure authentication systems with proper password hashing and database integration.",
		technologies: ["PHP", "MySQL", "SQL", "HTML", "CSS", "Session Management"],
		features: [
			"Secure user registration with password hashing",
			"Login authentication system",
			"Session management for user persistence",
			"SQL database integration",
			"Form validation and error handling",
			"Protected routes and user authorization"
		]
	},
	{
		id: "randomdogs",
		name: "Random Dogs",
		description: "Random Dog Website",
		image: project4,
		url: "https://jacksonpirlo.github.io/Random-Dogs/",
		detailedDescription: "A delightful web application that fetches and displays random dog images using an external API. Perfect for dog lovers and as a demonstration of API integration and asynchronous JavaScript.",
		purpose: "Created to practice API consumption and asynchronous programming while bringing smiles with adorable dog pictures.",
		technologies: ["JavaScript", "HTML5", "CSS3", "REST API", "Fetch API"],
		features: [
			"Random dog image generation from API",
			"Asynchronous data fetching",
			"Clean and intuitive interface",
			"Fast loading times",
			"Mobile-friendly design"
		]
	}
];
export const languages: Languages = { chinese, english };