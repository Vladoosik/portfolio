// types
import { ModalWorkType, WorksType } from "../../types/WorksType";

export const modalWorkArr: ModalWorkType[] = [
  {
    id: 12,
    title: "ForDream",
    role: "Front-End Developer",
    period: "May 2022 - December 2022",
    image: require("../../assets/png/ForDreamCase.png"),
    description:
      "A beautiful company website, which was developed by me independently. " +
      "There are a large number of animations, interactive elements and also a" +
      " description of the company’s work. There is a large number of technologies" +
      " under the hood related mainly to animations",
  },
  {
    id: 13,
    title: "My status",
    role: "React-Native Developer",
    period: "Since 2022 - Present",
    image: require("../../assets/png/MyStatus.jpg"),
    description:
      "A social network that focuses on the user’s geolocations. You can\n" +
      "create various events related to a specific location, share your\n" +
      "geolocation and track your friends and contacts.Also similar to\n" +
      "Instagram, you can post your photos/videos. The application also\n" +
      "provides chats with your friends and contacts  ",
  },
  {
    id: 14,
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
    id: 12,
    title: "ForDream",
    text: "Landing Site for company",
    image: require("../../assets/png/ForDreamCase.png"),
    path: "forDream",
  },
  {
    id: 13,
    title: "My status",
    text: "Social Network on React-Native",
    image: require("../../assets/png/MyStatus.jpg"),
    path: "myStatus",
  },
  {
    id: 14,
    title: "Kloki Planer",
    text: "planer on React-Native",
    image: require("../../assets/png/planer.jpg"),
    path: "kloki",
  },
];
