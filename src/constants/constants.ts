import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faX,
    faBars,
    faWindowRestore,
    faBagShopping,
    faDiceD6,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
    faReact,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
    htmlIcon,
    cssIcon,
    jsIcon,
    reactIcon,
    awsIcon,
    javaIcon,
    gitIcon,
    githubIcon,
    psqlIcon,
    nodeIcon,
    mysqlIcon,
    mongodbIcon,
    tsIcon,
    pawsitivePrototype,
    calculator,
    memoryGame,
    avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
    htmlIcon,
    cssIcon,
    jsIcon,
    reactIcon,
    awsIcon,
    javaIcon,
    gitIcon,
    githubIcon,
    psqlIcon,
    mysqlIcon,
    mongodbIcon,
    tsIcon,
    nodeIcon,
    avatar,
};

const icons = {
    faBars,
    faX,
    faWindowRestore,
    faBagShopping,
    faDiceD6,
    faReact,
    faGithub,
    faLinkedin,
    faEnvelope,
};

const introduction = {
    text: [
        "Hello there, I'm so happy you are here! 😊",

        "My name is Baymax, I'm 25 and a Associate Software Engineer.",

        "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
    ],
};

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'skills',
        title: 'Skills',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const projects = [
    {
        name: "Arasartara's Gallery",
        description: 'A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.',
        image: memoryGame,
        source_code_link: 'https://github.com/sitaramoli/artMemoryGame',
        demo_link: 'https://arasarmemory.netlify.app/',
    },
    {
        name: 'Pawsitive',
        description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
        image: pawsitivePrototype,
        source_code_link: 'https://github.com/sitaramoli/pawsitive',
        demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
    },
    {
        name: 'Basic Calculator',
        description: 'A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.',
        image: calculator,
        source_code_link: 'https://github.com/sitaramoli/calculator',
        demo_link: 'https://bl33hscalculator.netlify.app/',
    },
];

const memoji = {
    image: [avatar],
};

const skills = [
    {
        id: 'html',
        title: 'HTML',
        icon: htmlIcon,
        description:
            'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
    },
    {
        id: 'css',
        title: 'CSS',
        icon: cssIcon,
        description:
            'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
    },
    {
        id: 'javascript',
        title: 'JavaScript',
        icon: jsIcon,
        description:
            'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
    },
    {
        id: 'react',
        title: 'React',
        icon: reactIcon,
        description:
            'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
    },
    {
        id: 'java',
        title: 'Java',
        icon: javaIcon,
        description:
            'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
    },
    {
        id: 'git',
        title: 'Git',
        icon: gitIcon,
        description:
            'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
    },
    {
        id: 'github',
        title: 'GitHub',
        icon: githubIcon,
        description:
            'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
    },
    {
        id: 'psql',
        title: 'Postgresql',
        icon: psqlIcon,
        description:
            'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity.',
    },
    {
        id: 'node',
        title: 'Node',
        icon: nodeIcon,
        description:
            'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
    },
    {
        id: 'typescript',
        title: 'Typescript',
        icon: tsIcon,
        description:
            'I possess extensive experience using TypeScript to bring interactivity and functionality to web pages, leading to the creation of dynamic user interfaces.',
    },
    {
        id: 'mysql',
        title: 'MySql',
        icon: mysqlIcon,
        description:
            'I have a strong command of MySQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity.',
    },
    {
        id: 'mongodb',
        title: 'MongoDB',
        icon: mongodbIcon,
        description:
            'I have a robust proficiency in MongoDB, covering a diverse set of skills including database design, querying, and front-end integration.'
    },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
    media,
    introduction,
    projects,
    memoji,
    skills,
    markerSvg,
    icons,
};