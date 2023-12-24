import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export const menuList = [
  { label: "About Me", path: "#about-me" },
  { label: "Skills", path: "#skills" },
  { label: "Project", path: "#project" },
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
    link: "https://github.com/sai-ram-kaushik",
    icon: <FaInstagram />,
  },
];
