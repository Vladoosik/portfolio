// types
import { ModalWorkType, WorksType } from "../../types/WorksType";

export const modalWorkArr: ModalWorkType[] = [
  {
    id: 15,
    path: "idriver",
    title: "IDriver",
    role: "Full-Stack Developer",
    period: "April 2026 - Present",
    image: require("../../assets/png/idrvier_logo.png"),
    description:
      "A mobile app for learning Ukrainian traffic rules (ПДР). As the lead" +
      " full-stack developer I built both the React Native app and the NestJS /" +
      " TypeORM backend — including payments, real-time features and application" +
      " security. The app is live on the App Store and Google Play.",
  },
  {
    id: 12,
    path: "voiceNotes",
    title: "Voice Notes",
    role: "React-Native Developer",
    period: "July 2025 - Present",
    image: require("../../assets/png/VoiceNotesCase.png"),
    description:
      "An internal CRM system for managing client records and session notes." +
      " Built from scratch with React Native CLI, Firebase, TypeScript and" +
      " Zustand, and released on the App Store as a co-founder and sole developer.",
  },
  {
    id: 14,
    path: "kloki",
    title: "Mobile planer",
    role: "React-Native Developer",
    period: "January 2024 - Present",
    image: require("../../assets/png/planer.jpg"),
    description:
      "The project created in React-Native is a planner" +
      " that allows you to add, delete plans, daily habits," +
      " monitor your progress, and also receive notifications " +
      "from the application about upcoming plans",
  },
];

export const worksArr: WorksType[] = [
  {
    id: 15,
    title: "IDriver",
    text: "Ukrainian driving app · Full-Stack",
    image: require("../../assets/png/idrvier_logo.png"),
    path: "idriver",
  },
  {
    id: 12,
    title: "VoiceNotes",
    text: "CRM for small business",
    image: require("../../assets/png/VoiceNotesCase.png"),
    path: "voiceNotes",
  },
  {
    id: 14,
    title: "Kloki Planer",
    text: "planer on React-Native",
    image: require("../../assets/png/planer.jpg"),
    path: "kloki",
  },
];
