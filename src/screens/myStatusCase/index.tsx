// modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router/dist/lib/hooks";
// components
import {
  AboutProject,
  AllWorkModal,
  AnimatedText,
  Footer,
  Header,
  Introduction,
  Modal,
  WorkDescription,
  WorkNavigator,
} from "../../components";
// utils
import transitionPages from "../../utils/transitionPages";
import { handleNavigation } from "../../utils/navigation";
// styles
import styles from "./styles.module.css";
// constants
import { caseHeaderLinks } from "../../constants/headerLink/headerLinks";
import { MyStatusColor } from "../../constants/projectColors";
import { modalWorkArr } from "../../constants/commerceProject";

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
          data={modalWorkArr}
          active={workModal}
          setActive={setWorkModal}
        />
      </div>
      <Introduction
        title={"The Project"}
        description={
          "A social network that focuses on the user’s geolocations. You can\n" +
          "create various events related to a specific location, share your\n" +
          "geolocation and track your friends and contacts.Also similar to\n" +
          "Instagram, you can post your photos/videos. The application also\n" +
          "provides chats with your friends and contacts  "
        }
        workLogo={<span className={styles.coverText}>My Status</span>}
      />
      <AboutProject
        data={MyStatusColor}
        description={
          <p className={styles.workDescription}>
            My job was to <strong>develop the application</strong>, create new
            functionality, support and optimize old solutions in the
            application, as well as <strong>connect the server</strong>{" "}
            component of the application.
            <br />
            <br />
            Overall, the project is quite large and I learned a lot during its
            development. In this case <strong>MobX and Typescript</strong> were
            actively used, which helped me understand them in{" "}
            <strong>more detail</strong>. Of course, there were other libraries
            that can often be found in react-native, for example{" "}
            <strong>React-Navigation</strong>
          </p>
        }
      />
      <WorkNavigator
        nextProjectName={"Planer Mobile"}
        onClick={() => handleNavigation(navigation, "/kloki")}
      />
      <Footer />
    </>
  );
};

export default transitionPages(MyStatusCase);
