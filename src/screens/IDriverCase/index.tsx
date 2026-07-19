// modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router/dist/lib/hooks";
import { animateScroll } from "react-scroll";
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
import { useMediaQuery } from "react-responsive";
// styles
import styles from "./styles.module.css";
import HeroBackground from "./HeroBackground";
import AboutVisual from "./AboutVisual";
// constants
import { caseHeaderLinks } from "../../constants/headerLink/headerLinks";
import { IDriverColor } from "../../constants/projectColors";
import { modalWorkArr } from "../../constants/commerceProject";

const IDriverCase = () => {
  const [active, setActive] = useState<boolean>(false);
  const [workModal, setWorkModal] = useState<boolean>(false);
  const navigation: NavigateFunction = useNavigate();
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 1200px)" });

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleProjectNavigate = () => {
    window.open("https://idriver.ai", "_blank");
  };

  return (
    <>
      <div className={styles.container} id={"#idriver"}>
        <Header
          setModal={setActive}
          setWorkModal={setWorkModal}
          alternative
          data={caseHeaderLinks}
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
            <p className={styles.title}>IDriver</p>
            <AnimatedText
              text={"ЯВодій · learn Ukrainian traffic rules"}
              className={styles.description}
            />
            <span className={styles.heroChip}>
              React Native · NestJS · Full-Stack
            </span>
          </div>
          <div className={isMobile ? styles.heroPhoneMob : styles.heroPhone}>
            <img
              className={styles.heroScreen}
              src={require("../../assets/png/idriver_welcome_screen.png")}
              alt="IDriver welcome screen"
            />
          </div>
        </div>
        <div className={styles.workDescriptionBox}>
          <WorkDescription
            context={"Driving-theory app"}
            role={"Full-Stack Developer"}
            period={"April 2026 - Present"}
            titleColor={"#cdeb00"}
            style={{
              width: "1100px",
            }}
          />
        </div>
        <Introduction
          title={"Introduction"}
          description={
            "Lead Full-Stack developer of IDriver (ЯВодій), a mobile app for learning Ukrainian traffic rules (ПДР).\n" +
            "Built both the React Native app and the NestJS / TypeORM backend — including payments (RevenueCat), real-time features (WebSocket) and application security.\n" +
            "The app is already live on the App Store and Google Play."
          }
          onButtonPress={handleProjectNavigate}
        />
        <AboutProject
          visual={<AboutVisual />}
          data={IDriverColor}
          background={"#f4f5f3"}
          description={
            <p className={styles.workDescription}>
              Served as the <strong>lead Full-Stack developer</strong>. For about
              a month I worked as part of a two-person team, after which I became
              the <strong>sole developer</strong>. I developed both the{" "}
              <strong>frontend</strong> (admin panel and React Native app) and the{" "}
              <strong>backend</strong> (NestJS and TypeORM).
              <br />
              <br />
              Developed a <strong>card game from scratch</strong>, integrated{" "}
              <strong>Cloudflare</strong>, secured the payment process, implemented{" "}
              <strong>rate limiting</strong>, and enhanced the application's overall{" "}
              <strong>security</strong>.
            </p>
          }
        />
        <Modal active={active} setActive={setActive} />
      </div>
      <WorkNavigator
        nextProjectName={"Voice Notes"}
        onClick={() => handleNavigation(navigation, "/voiceNotes")}
        overlayColor={"#cdeb00"}
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

export default transitionPages(IDriverCase);
