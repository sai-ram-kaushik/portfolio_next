import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import {
  FaInstagram,
  FaHtml5,
  FaCss3,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
export const menuList = [
  { label: "Skills", path: "#skills" },
  { label: "Experience", path: "#experience" },
  { label: "Project", path: "#projects" },
  { label: "Contact Me", path: "#contact-me" },
];

export const socials = [
  {
    label: "GitHub",
    link: "https://github.com/sai-ram-kaushik",
    icon: <FaGithub />,
  },
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/sairamkaushik/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/sai_ram_kaushik",
    icon: <FaXTwitter />,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/sairamkaushik/",
    icon: <FaInstagram />,
  },
];

export const skills = [
  { label: "HTML", icon: <FaHtml5 /> },
  { label: "CSS", icon: <FaCss3 /> },
  { label: "JavaScript", icon: <IoLogoJavascript /> },
  { label: "ReactJs", icon: <FaReact /> },
  { label: "NodeJs", icon: <FaNodeJs /> },
  { label: "MongoDB", icon: <BiLogoMongodb /> },
  { label: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
  { label: "Git", icon: <FaGitAlt /> },
  { label: "GitHub", icon: <FaGithub /> },
  { label: "Linux", icon: <FaLinux /> },
  { label: "Figma", icon: <FaFigma /> },
];

export const experience = [
  {
    label: "Web Developer Intern",
    date: "November, 2023 - Present, Remote",
    company: "Goolluck Investments",
    desc: "Tech stacks NextJS, JavaScript, GraphCMS, Tailwind CSS and Vercel, Build from the scratch and maintaining the codebase for the website",
    logo: "/assets/goolluck.png",
  },
  {
    label: "Frontend Developer Intern",
    date: "February, 2023 - September, 2023, Remote",
    company: "Gymmi",
    desc: "Tech stacks NextJS, JavaScript, GraphCMS, Tailwind CSS and Vercel, Build from the scratch and maintaining the codebase for the website",
    logo: "/assets/gymmi.webp",
  },
  {
    label: "Frontend Developer Intern",
    date: "January, 2023 - February, 2023, Remote",
    company: "Infodal",
    desc: "Tech stacks NextJS, JavaScript, GraphCMS, Tailwind CSS and Vercel, Build from the scratch and maintaining the codebase for the website",
    logo: "/assets/infodal.png",
  },
];
