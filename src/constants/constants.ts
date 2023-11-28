// Skill Cards images

import cplus from '../assets/c++.svg';
import css from '../assets/css.svg';
import express from '../assets/express.svg';
import html from '../assets/html.svg';
import js from '../assets/js.svg';
import mongodb from '../assets/mongodb.png';
import nodejs from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import tailwindcss from '../assets/tailwindcss.svg';
import typescript from '../assets/typescript.svg';
// Project Cards images
import portfolio from '../assets/portfolio.png';
import redditClone from '../assets/redditClone1.png';
import reactNote from '../assets/reactNote-app.png';


interface Skill {
    name: string,
    img: string
}

interface Project {
    name: string,
    description: string,
    img: string,
    githubLink?: string,
    siteLink?: string,
}

// Skill Cards Values (info)

export const Skills: Skill[] = [
    {
        name: 'C++',
        img: cplus,
    },
    {
        name: 'Html',
        img: html
    },
    {
        name: 'CSS',
        img: css
    },
    {
        name: 'Javascript',
        img: js
    },
    {
        name: 'React',
        img: react
    },
    {
        name: 'Tailwind CSS',
        img: tailwindcss
    },
    {
        name: 'Typescript',
        img: typescript
    },
    {
        name: 'Mongodb',
        img: mongodb
    },
    {
        name: 'Express',
        img: express
    },
    {
        name: 'Nodejs',
        img: nodejs
    },
    {
        name: 'Nextjs',
        img: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg'
    },

];

// Project Cards Values (info)

export const Projects: Project[] = [
    {
        name: 'Portfolio',
        description: "This is my first portfolio.I created this using react",
        img: portfolio,
        githubLink: "https://github.com/salub-xd/salub-portfolio",
        siteLink: "https://Salub.netlify.app"
    },
    {
        name: 'Reddit Clone',
        description: "I made this project for practice using MERN (MongoDB, Express.js, React, Node.js) stack.",
        img: redditClone,
        githubLink: "https://github.com/salub-xd/reddit-clone",
    },
    {
        name: 'React Note-app',
        description: "I created a note-taking app using React, and it marked my first project in the MERN (MongoDB, Express.js, React, Node.js) stack.",
        img: reactNote,
        githubLink: "https://github.com/salub-xd/react-note-app",
    },
];