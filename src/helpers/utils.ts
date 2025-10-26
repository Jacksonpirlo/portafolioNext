import html from "@/assets/html.png"
import css from "@/assets/css.png"
import js from "@/assets/js.png"
import nodejs from "@/assets/Node.js.svg"
// import react from "@/assets/react.png"
import npm from "@/assets/NPM.png"
import python from "@/assets/Python.png"
import express from "@/assets/express.png"
import { Skills } from "@/dto/skills"

// *************************************

import project1 from "@/assets/greengables.jpeg";
import project2 from "@/assets/caja_fuerte.jpeg";
import project3 from "@/assets/random-dogs.jpeg";
import project4 from "@/assets/login.jpeg";
import { Projects } from "@/dto/Projects"

// *************************************

import chinese from "@/assets/ch.png"
import english from "@/assets/en.png"
import { Languages } from "@/dto/Languages"


export const skills: Skills = { html, css, js, nodejs, npm, python, express };
export const projects: Projects = [
	{
		id: "greengables",
		name: "Green Gables",
		description: "Website for my school",
		image: project1,
		url: "https://jacksonpirlo.github.io/GreenGables/"
	},
	{
		id: "safe",
		name: "Safe",
		description: "Safe made for practicing Vue JS",
		image: project2,
		url: "https://jacksonpirlo.github.io/Caja-fuerte/"
	},
	{
		id: "register",
		name: "Register",
		description: "Login made with PHP and SQL",
		image: project3,
		url: "https://github.com/Jacksonpirlo/Registro-php-sql"
	},
	{
		id: "randomdogs",
		name: "Random dogs",
		description: "Random Dog Website",
		image: project4,
		url: "https://jacksonpirlo.github.io/Random-Dogs/"
	}
];
export const languages: Languages = { chinese, english };