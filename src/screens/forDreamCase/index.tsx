// modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router/dist/lib/hooks";
// components
import {
  AboutProject,
  AnimatedText,
  Header,
  Introduction,
  Modal,
  WorkDescription,
  WorkNavigator,
} from "../../components";
// utils
import transitionPages from "../../utils/transitionPages";
// styles
import styles from "./styles.module.css";
// constants
import { caseHeaderLinks } from "../../constants/headerLink/headerLinks";
import { ForDreamColor } from "../../constants/projectColors";
// utils
import { handleNavigation } from "../../utils/navigation";

const ForDreamCase = () => {
  const [active, setActive] = useState<boolean>(false);
  const image = require("../../assets/png/macboockMock.png");
  const navigation: NavigateFunction = useNavigate();

  const handleProjectNavigate = () => {
    window.open("https://fordream.dev/", "_blank");
  };

  return (
    <>
      <div className={styles.container}>
        <Header
          setModal={setActive}
          alternative
          data={caseHeaderLinks}
          navigation={navigation}
        />
        <div className={styles.titleContainer}>
          <div className={styles.titleContent}>
            <p className={styles.title}>For Dream</p>
            <AnimatedText
              text={"Landing page for company"}
              className={styles.description}
            />
          </div>
          <img className={styles.macImg} src={image} alt="image" />
        </div>
        <div className={styles.workDescriptionBox}>
          <WorkDescription
            context={"Landing Page"}
            role={"Front-End Developer"}
            period={"May 2022 - December 2022"}
            titleColor={"#00c8e7"}
            style={{
              width: "1100px",
            }}
          />
        </div>
        <Introduction
          title={"Introduction"}
          description={
            "A beautiful company website, which was developed by me independently. " +
            "There are a large number of animations, interactive elements and also a" +
            " description of the company’s work. There is a large number of technologies" +
            " under the hood related mainly to animations"
          }
          onButtonPress={handleProjectNavigate}
        />
        <AboutProject
          data={ForDreamColor}
          description={
            <p className={styles.workDescription}>
              Project where I was a <strong>React Developer</strong>.
              Independently managed the project from{" "}
              <strong>start to hosting</strong> I chose which libraries to use
              in the project, <strong>created flexible component models</strong>
              , and enabled firebase for temporary hosting during development. I
              also did <strong>form validation</strong>, connecting the bot to
              Telegram and sending the form to the group
              <br />
              <br />
              Also took an active part in the redesign,{" "}
              <strong>offering my methods</strong> for optimizing various
              sections of the project
            </p>
          }
        />
        <Modal active={active} setActive={setActive} />
      </div>
      <WorkNavigator
        nextProjectName={"MyStatus"}
        onClick={() => handleNavigation(navigation, "/myStatus")}
        overlayColor={"#00c8e7"}
      />
    </>
  );
};

export default transitionPages(ForDreamCase);
