// modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router/dist/lib/hooks"; // components
import {
  AllWorkModal,
  AnimatedText,
  ColorCircle,
  Header,
  Modal,
  WorkDescription,
  WorkNavigator,
} from "../../components"; // utils
import transitionPages from "../../utils/transitionPages"; // styles
import styles from "./styles.module.css"; // constants
import { caseHeaderLinks } from "../../constants/headerLink/headerLinks";

const projectColor = [
  { id: 12, color: "#0179CF", name: "blue1" },
  { id: 32, color: "#200CBE", name: "blue2" },
  { id: 52, color: "#90D1FF", name: "blue_light" },
  { id: 52, color: "#ACAAA9", name: "gray1_40" },
  { id: 52, color: "#94C3E4", name: "blue1_40" },
];
const MyStatusCase = () => {
  const [active, setActive] = useState<boolean>(false);
  const [workModal, setWorkModal] = useState<boolean>(false);
  const navigation: NavigateFunction = useNavigate();

  return (
    <>
      <div className={styles.mainContainer}>
        <Header
          setWorkModal={setWorkModal}
          alternative
          data={caseHeaderLinks}
          setModal={setActive}
          navigation={navigation}
        />
        <div className={styles.titleContainer}>
          <div>
            <p className={styles.title}>MyStatus project</p>
            <AnimatedText
              className={styles.text}
              text={"Social Network on React-Native"}
            />
          </div>
        </div>
        <WorkDescription
          role={"React-Native Developer"}
          context={"Social Network"}
          period={"Since 2022 - Present"}
        />
        <Modal active={active} setActive={setActive} />
        <AllWorkModal
          data={projectColor}
          active={workModal}
          setActive={setWorkModal}
        />
      </div>
      <div className={styles.theProjectContainer}>
        <p className={styles.projectTitle}>The Project</p>
        <p className={styles.projectText}>
          A social network that focuses on the user’s geolocations. You can
          create various events related to a specific location, share your
          geolocation and track your friends and contacts.Also similar to
          Instagram, you can post your photos/videos. The application also
          provides chats with your friends and contacts
        </p>
        <button className={styles.button}>Visit Website</button>
        <span className={styles.coverText}>My Status</span>
      </div>
      <div className={styles.cardContainer}>
        <p className={styles.workTitle}>ANALYSIS & PREPARATION</p>
        <h2 className={styles.workText}>Responsibilities</h2>
        <div className={styles.workCard}>
          <div>
            <p className={styles.cardTitle}>
              Designed with customer care and love.
            </p>
            <div className={styles.line} />
            <p className={styles.workDescription}>
              My job was to <strong>develop the application</strong>, create new
              functionality, support and optimize old solutions in the
              application, as well as <strong>connect the server</strong>{" "}
              component of the application.
              <br />
              <br />
              Overall, the project is quite large and I learned a lot during its
              development. In this case <strong>MobX and Typescript</strong>
              were actively used, which helped me understand them in{" "}
              <strong>more detail</strong>. Of course, there were other
              libraries that can often be found in react-native, for example{" "}
              <strong>React-Navigation</strong>
            </p>
          </div>
          <div className={styles.phoneContainer}>
            <img
              className={styles.phoneCard}
              src={require("../../assets/png/phone.png")}
              alt="phone"
            />
          </div>
        </div>
        <div className={styles.circleContainer}>
          {projectColor.map((item, index) => (
            <ColorCircle key={index} item={item} />
          ))}
        </div>
      </div>
      <WorkNavigator nextProjectName={"Catchy Web"} />
    </>
  );
};

export default transitionPages(MyStatusCase);
