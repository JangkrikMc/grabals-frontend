import React from "react";
import { 
  FaReact, FaDocker, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaPython, FaPhp, FaJava, FaDatabase 
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const stackItems = [
  <FaReact key="react" size={48} color="#61DBFB" />,
  <FaDocker key="docker" size={48} color="#0db7ed" />,
  <FaNodeJs key="nodejs" size={48} color="#68a063" />,
  <FaJsSquare key="js" size={48} color="#f7df1e" />,
  <FaHtml5 key="html" size={48} color="#e34f26" />,
  <FaCss3Alt key="css" size={48} color="#264de4" />,
  <SiTypescript key="ts" size={48} color="#007acc" />,
  <FaPython key="python" size={48} color="#306998" />,
  <FaGitAlt key="git" size={48} color="#f1502f" />,
  <FaPhp key="php" size={48} color="#777bb4" />,
  <FaJava key="java" size={48} color="#f89820" />,
  <SiMongodb key="mongodb" size={48} color="#4db33d" />,
  <SiMysql key="mysql" size={48} color="#4479a1" />,
  <SiNextdotjs key="nextjs" size={48} color="#000000" />,
  <SiTailwindcss key="tailwind" size={48} color="#06b6d4" />,
  <FaDatabase key="database" size={48} color="#f29111" />
];

export default stackItems;