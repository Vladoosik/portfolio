// modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router/dist/lib/hooks";
import { animateScroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
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
import { handleLinkClick } from "../../utils/navigation";
import { usePageMeta } from "../../utils/usePageMeta";
// constants
import { caseHeaderLinks } from "../../constants/headerLink/headerLinks";
import { PlanerColor } from "../../constants/projectColors";
import { modalWorkArr } from "../../constants/commerceProject";
// styles
import styles from "./styles.module.css";
import HeroBackground from "./HeroBackground";
import AboutVisual from "./AboutVisual";

const PlannerCase = () => {
  const [active, setActive] = useState<boolean>(false);
  const [workModal, setWorkModal] = useState<boolean>(false);
  const navigation: NavigateFunction = useNavigate();
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 1200px)" });

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  usePageMeta(
    "Kloki Planner case study — Vlad Khrushchov",
    "Kloki: a React Native planner with plans, daily habits, progress tracking and notifications, available on the App Store.",
  );

  return (
    <>
      <div className={styles.container} id={"#kloki"}>
        <Header
          setWorkModal={setWorkModal}
          alternative
          data={caseHeaderLinks}
          setModal={setActive}
          navigation={navigation}
        />
        <div
          className={
            isMobile ? styles.titleContainerMob : styles.titleContainer
          }
        >
          <HeroBackground />
          {!isMobile && <div className={styles.heroPhoneGlow} />}
          <div
            className={isMobile ? styles.titleContentMob : styles.titleContent}
          >
            <h1 className={styles.title}>Kloki</h1>
            <AnimatedText
              text={"all your plans in one app"}
              className={styles.description}
            />
            <span className={styles.heroChip}>
              React Native · Redux · Firebase
            </span>
          </div>
          <div className={isMobile ? styles.heroPhoneMob : styles.heroPhone}>
            <img
              className={styles.heroScreen}
              src={require("../../assets/png/kloki_todo_list.webp")}
              alt="Kloki habits screen"
            />
          </div>
        </div>
        <div className={styles.workDescriptionBox}>
          <WorkDescription
            role={"React-Native Developer"}
            context={"Mobile Planner"}
            period={"January 2024 - Present"}
            titleColor={"#a855f7"}
          />
        </div>
        <Introduction
          title={"About Project"}
          description={
            "The project created in React Native is a planner" +
            " that allows you to add, delete plans, daily habits," +
            " monitor your progress, and also receive notifications " +
            "from the application about upcoming plans"
          }
          link={"https://apps.apple.com/us/app/kloki-planner/id6746350225"}
          linkText={"View on the App Store"}
        />
        <AboutProject
          title={"Core features, built together with the designer."}
          visual={<AboutVisual />}
          data={PlanerColor}
          background={"#f3f0f7"}
          description={
            <p className={styles.workDescription}>
              My work on this project was to{" "}
              <strong>interact with the designer</strong>, add new features
              together, and also create the main functionality of the
              application using various tools, for example{" "}
              <strong>Redux Toolkit</strong>
              <br />
              <br />
              as the main state manager. <strong>MMKV</strong> for storage,
              React Navigation for navigation, <strong>Typescript</strong> for
              typing components and more convenient work with properties, and{" "}
              <strong>Firebase</strong> as authorization, server storage and
              database
            </p>
          }
        />
        <Modal active={active} setActive={setActive} />
      </div>
      <WorkNavigator
        nextProjectName={"IDriver"}
        href={"/idriver"}
        onClick={(e) => handleLinkClick(e, navigation, "/idriver")}
        overlayColor={"#a855f7"}
      />
      <AllWorkModal
        data={modalWorkArr}
        active={workModal}
        setActive={setWorkModal}
      />
      <Footer onLinkPress={scrollToTop} />
    </>
  );
};

export default transitionPages(PlannerCase);
