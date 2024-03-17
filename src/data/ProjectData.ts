import { Project } from "../models/Project";

export const ProjectData: Project[] = [
  {
    id: 1,
    projectTitle: "Pottery Studio",
    projectImg: "../../src/assets/pottery-shop.webp",
    projectInfo: "E-commerce website: pottery products & workshops",
    projectSkills: ["React", "Tailwind", "Strapi, Stripe"],
    projectOnGithub: "https://github.com/h4zan/pottery-studio",
    projectLive: "",
  },

  {
    id: 2,
    projectTitle: "Tic Tac Toe",
    projectImg: "../../src/assets/tictactoe.webp",
    projectInfo: "Enjoy classic Tic-Tac-Toe with Vue and TypeScript.",
    projectSkills: ["Vue", "Typescript", "Vite"],
    projectOnGithub: "https://github.com/h4zan/ticTacToe-vue",
    projectLive: "https://project-tictactoe-vue.netlify.app/",
  },

  {
    id: 3,
    projectTitle: "Todo List",
    projectImg: "../../src/assets/todo.webp",
    projectInfo: "A minimalist Vue Todo List App for managing tasks.",
    projectSkills: ["Vue", "Typescript", "Vite", "Css"],
    projectOnGithub: "https://github.com/h4zan/todo-vue",
    projectLive: "https://project-todo-app-vue.netlify.app/",
  },
  {
    id: 4,
    projectTitle: "The Zoo",
    projectImg: "../../src/assets/zoo.webp",
    projectInfo: "A React and TypeScript-based interactive zoo SPA.",
    projectSkills: ["React", "Typescript", "Vite", "Css"],
    projectOnGithub: "https://github.com/h4zan/zoo-react",
    projectLive: "",
  },
  {
    id: 5,
    projectTitle: "MatchMe App",
    projectImg: "../../src/assets/match.webp",
    projectInfo:
      "A Vanilla JavaScript web app showcasing a gallery of profiles from a given API endpoint.",
    projectSkills: ["Javascript", "Html", "Scss"],
    projectOnGithub: "https://github.com/h4zan/match-dot-com",
    projectLive: "",
  },

  {
    id: 6,
    projectTitle: "Aurora Jewlery",
    projectImg: "../../src/assets/aurora-shop.webp",
    projectInfo: `An agile school group project with Jennie Forsell and Adam Danielsson.`,
    projectSkills: ["Typescript", "Html", "Scss"],
    projectOnGithub: "https://github.com/h4zan/Group_assignment_group_1",
    projectLive: "",
  },
];
