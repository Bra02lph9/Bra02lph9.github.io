import dnaProjectImg from "../assets/dna-project.png";
import geoProjectImg from "../assets/geo-project.png";
import cleanTrackImg from "../assets/clean-track.png";
import portfolioImg from "../assets/portfolioImg.png";

export const projects = [
  {
    title: "DNA Analysis Platform",
    description:
      "A bioinformatics web application dedicated to DNA sequence analysis, including ORF detection, promoter prediction, rho-independent terminators, and Shine-Dalgarno sequence identification while respecting biological context.",
    stack: ["React", "Flask", "Biopython", "Redis", "Celery", "Numba", "MongoDB", "Cython"],
    link: "https://github.com/Bra02lph9/DNA_APP.git",
    image: dnaProjectImg,
  },
  {
    title: "GeoLocalisation & Route Optimization App",
    description:
      "A geolocation application designed to locate points of interest, display positions on an interactive map, and generate routes between different locations with route calculation.",
    stack: ["React", "Leaflet", "Neo4j", "OpenStreetMap", "Flask", "Python", "Geolocation"],
    link: "https://github.com/Bra02lph9/NearMe.git",
    image: geoProjectImg,
  },

 {
  title: "Personal Portfolio Website",
  description:
    "A modern and interactive portfolio built with React and Tailwind CSS, featuring smooth animations with Framer Motion. It showcases my projects, skills, and expertise in bioinformatics, AI in healthcare, and full-stack development with a clean and premium user interface.",
  stack: ["React","Vite","Tailwind CSS","Framer Motion","JavaScript",],
  link: "https://github.com/TON_USERNAME/portfolio",
  image: portfolioImg,
},

{
    title: "Clean-Track Task Manager",
    description:
      "A team management and tracking application featuring a modern dashboard, task management, operational statistics, and a full-stack architecture.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://github.com/Bra02lph9/Task_Manager.git",
    image: cleanTrackImg,
  },
];
