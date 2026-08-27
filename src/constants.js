// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import codaphicsLogo from './assets/company_logo/codaphics.png';
import blaLogo from './assets/company_logo/BLA.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';

import mysqlLogo from './assets/tech_logo/mysql.png';


import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from "./assets/tech_logo/render.png";
import cloudinaryLogo from "./assets/tech_logo/cloudinary.png";
import postgreLogo from './assets/tech_logo/postgre.png';




// Education Section Logo's
import fgipsLogo from './assets/education_logo/fgips.png';
import bssLogo from './assets/education_logo/bss.png';

// Project Section Logo's
import floraCureLogo from './assets/work_logo/floracure.png';
import githubFinderLogo from './assets/work_logo/githubfilter.png';
import shopHeavenLogo from './assets/work_logo/shopheaven.png';
import shopHeavenV2Logo from './assets/work_logo/shopheavenv2.png';
import weatherLogo from './assets/work_logo/weatherly.png';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "Django", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "Spring Boot", logo: springbootLogo },
      { name: "REST API", logo: postmanLogo },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "SQL", logo: mysqlLogo },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },

  {
    title: "Deployment & Cloud",
    skills: [
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Render", logo: renderLogo },
      { name: "Cloudinary", logo: cloudinaryLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: codaphicsLogo,
    role: "Software Development Trainee Intern",
    company: "Codaphics Private Limited",
    date: "Dec 2025 - May 2026",
    desc: "Completed a 6-month software development internship focused on Python, Tkinter, and Django. Built FloraCure, a Django and SQLite web application featuring an Expert System for plant disease diagnosis. Developed rule-based diagnosis covering 41+ symptoms across 6 plant disease categories and integrated Weather API, PDF reports, user authentication, responsive UI, and diagnosis history.",
    skills: [
      "Python",
      "Django",
      "SQLite",
      "Tailwind CSS",
      "REST API",
      "Tkinter",
    ],
  },

  {
    id: 1,
    img: blaLogo,
    role: "Frontend Development Trainee",
    company: "Barrownz Learning",
    date: "Jul 2024 - Aug 2024",
    desc: "Completed an intensive 45-day frontend development training focused on HTML, CSS, JavaScript, and Bootstrap. Built responsive page layouts and practiced cross-browser UI implementation based on design mockups.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
];
  
  export const education = [
  {
    id: 0,
    img: fgipsLogo,
    school: "Feroze Gandhi Institute of Professional Studies, Raebareli",
    date: "2023 - 2026",
    grade: "8.45 CGPA",
    desc: "I am pursuing a Bachelor of Computer Applications (BCA) from Feroze Gandhi Institute of Professional Studies. During my degree, I have developed a strong foundation in programming, web development, databases, software development, and computer science concepts. I have worked on projects using React.js, Python, Django, JavaScript, and REST APIs.",
    degree: "Bachelor of Computer Applications - BCA",
  },

  {
  id: 1,
  img: bssLogo,
  school: "BSS Public School, Raebareli",
  date: "2022 - 2023",
  grade: "76.40%",
  desc: "Completed Class 12 education with Physics, Chemistry, and Mathematics (PCM) from BSS Public School, Raebareli, under the CBSE board.",
  degree: "CBSE - Class XII (PCM)",
},

  {
  id: 2,
  img: bssLogo,
  school: "BSS Public School, Raebareli",
  date: "2020 - 2021",
  grade: "89.00%",
  desc: "Completed Class 10 education from BSS Public School, Raebareli, under the CBSE board.",
  degree: "CBSE - Class X",
},
];
  
 export const projects = [
  {
    id: 0,
    title: "SHOP_HEAVEN V2",
    description:
      "A modern and responsive e-commerce web application built with React.js and Django. The platform provides product browsing, category navigation, product details, cart functionality, and a smooth shopping experience across desktop and mobile devices.",
    image: shopHeavenV2Logo,
   tags: [
  "React JS",
  "Django",
  "Python",
  "PostgreSQL",
  "REST API",
  "Tailwind CSS",
  "Cloudinary",
  "Render",
  "Vercel",
],
    github: "https://github.com/FatimaSayyed27/SHOP_HEAVEN_V2",
    webapp: "https://shop-heaven-v2-eta.vercel.app/",
  },

  {
    id: 1,
    title: "FloraCure",
    description:
      "A Django-based plant disease diagnosis web application featuring a rule-based Expert System. FloraCure provides plant disease diagnosis, weather information, diagnosis history, user authentication, responsive UI, and PDF report generation.",
    image: floraCureLogo,
    tags: [
      "Python",
      "Django",
      "SQLite",
      "Tailwind CSS",
      "Expert System",
      "REST API",
    ],
    github: "https://github.com/FatimaSayyed27/FloraCure",
    webapp: "#",
  },

  {
    id: 2,
    title: "Weather App",
    description:
      "A responsive React weather application that fetches real-time weather information using the OpenWeather API. The application is designed to provide a clean and user-friendly experience across mobile and desktop devices.",
    image: weatherLogo,
    tags: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "OpenWeather API",
    ],
    github: "https://github.com/FatimaSayyed27/weather-app",
    webapp: "https://weather-app-theta-dun-62.vercel.app/",
  },

  {
    id: 3,
    title: "GitHub Finder",
    description:
      "A React-based application that allows users to search for GitHub profiles and explore developer information through GitHub API integration. It provides a simple and responsive interface for discovering GitHub users.",
    image: githubFinderLogo,
    tags: [
      "React JS",
      "JavaScript",
      "GitHub API",
      "API Integration",
      "Tailwind CSS",
    ],
    github: "https://github.com/FatimaSayyed27/github-finder",
    webapp: "https://github-finder-alpha-nine.vercel.app/",
  },

  {
    id: 4,
    title: "SHOP_HEAVEN",
    description:
      "A responsive React-based e-commerce website created to provide users with a smooth online shopping experience. The project includes product browsing, categories, reusable components, and responsive layouts for different screen sizes.",
    image: shopHeavenLogo,
    tags: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    github: "https://github.com/FatimaSayyed27/SHOP_HAVEN",
    webapp: "https://shop-haven-ten.vercel.app/",
  },
];
  