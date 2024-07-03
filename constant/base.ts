import { IconType } from "react-icons"
import {
  FaCss3Alt,
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si"
import { TbBrandRedux } from "react-icons/tb"

export const socialLinks = [
  {
    link: "http://www.github.com/misbahurbd",
    icon: FaGithub,
  },
  {
    link: "http://www.linkedin.com/in/misbahurbd",
    icon: FaLinkedinIn,
  },
  {
    link: "http://www.facebook.com/misbahurbd",
    icon: FaFacebookF,
  },
]

export interface ISkill {
  id: number
  label: string
  value: string
  icon: IconType
  color: string
}

export const skills: ISkill[] = [
  {
    id: 1,
    label: "HTML 5",
    value: "html5",
    icon: FaHtml5,
    color: "#e34f26",
  },
  {
    id: 2,
    label: "CSS 3",
    value: "css3",
    icon: FaCss3Alt,
    color: "#2865f0",
  },
  {
    id: 3,
    label: "JavaScript",
    value: "javascript",
    icon: IoLogoJavascript,
    color: "#e9d111",
  },
  {
    id: 3,
    label: "TypeScript",
    value: "typescript",
    icon: SiTypescript,
    color: "#3178c6",
  },

  {
    id: 4,
    label: "TailwindCSS",
    value: "tailwindcss",
    icon: RiTailwindCssFill,
    color: "#26c0cd",
  },
  {
    id: 5,
    label: "React.Js",
    value: "reactjs",
    icon: FaReact,
    color: "#00d8ff",
  },
  {
    id: 6,
    label: "Next.Js",
    value: "nextjs",
    icon: RiNextjsFill,
    color: "#26313b",
  },
  {
    id: 7,
    label: "Node.Js",
    value: "nodejs",
    icon: FaNodeJs,
    color: "#6cc24a",
  },
  {
    id: 8,
    label: "Express.Js",
    value: "expressjs",
    icon: SiExpress,
    color: "#26313b",
  },
  {
    id: 9,
    label: "PostgreSQL",
    value: "postgresql",
    icon: SiPostgresql,
    color: "#336790",
  },
  {
    id: 10,
    label: "MongoDB",
    value: "mongodb",
    icon: SiMongodb,
    color: "#14a44d",
  },
  {
    id: 11,
    label: "Redux",
    value: "redux",
    icon: TbBrandRedux,
    color: "#7a50be",
  },
  {
    id: 11,
    label: "Prisma",
    value: "prisma",
    icon: SiPrisma,
    color: "#0c344b",
  },
  {
    id: 12,
    label: "ShadcnUI",
    value: "shadcnui",
    icon: SiShadcnui,
    color: "#111111",
  },
]
