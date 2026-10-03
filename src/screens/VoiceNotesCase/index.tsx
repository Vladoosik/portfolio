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
// styles
import styles from "./styles.module.css";
import HeroBackground from "./HeroBackground";
import AboutVisual from "./AboutVisual";
// constants
import { caseHeaderLinks } from "../../constants/headerLink/headerLinks";
import { VoiceNotesColor } from "../../constants/projectColors";
import { modalWorkArr } from "../../constants/commerceProject";
// utils
import { handleLinkClick } from "../../utils/navigation";
import { usePageMeta } from "../../utils/usePageMeta";
import { useMediaQuery } from "react-responsive";

const VoiceNotesCase = () => {
  const [active, setActive] = useState<boolean>(false);
  const [workModal, setWorkModal] = useState<boolean>(false);
  const navigation: NavigateFunction = useNavigate();
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 1200px)" });

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  usePageMeta(
    "Voice Notes case study — Vlad Khrushchov",
    "Voice Notes: a CRM app for client records and session notes, built from scratch with React Native CLI and Firebase and released on the App Store.",
  );

  return (
    <>
      <div className={styles.container} id={"#voiceNotes"}>
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
          <div
            className={isMobile ? styles.titleContentMob : styles.titleContent}
          >
            <h1 className={styles.title}>Voice Notes</h1>
            <AnimatedText
              text={"CRM System for small business"}
              className={styles.description}
            />
          </div>
          <img
            className={isMobile ? styles.heroAssetMob : styles.heroAsset}
            src={require("../../assets/png/hero_voice_notes.webp")}
            alt="Voice Notes app"
          />
        </div>
        <div className={styles.workDescriptionBox}>
          <WorkDescription
            context={"CRM System"}
            role={"React-Native Developer"}
            period={"July 2025 - Present"}
            titleColor={"#00c8e7"}
          />
        </div>
        <Introduction
          title={"Introduction"}
          description={
            "Co-founder and sole developer of Voice Notes, a CRM system designed for managing client records and session notes.\n" +
            "Built the entire application from scratch using React Native CLI, Firebase, TypeScript, and Zustand.\n" +
            "Successfully launched the first version on the App Store within a short timeframe."
          }
          link={
            "https://apps.apple.com/ua/app/voice-notes-crm-%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B0/id6749210527?l=ru"
          }
          linkText={"View on the App Store"}
        />
        <AboutProject
          title={"From first commit to App Store release."}
          visual={<AboutVisual />}
          data={VoiceNotesColor}
          description={
            <p className={styles.workDescription}>
              <strong>Voice Notes</strong> is an internal CRM system designed to
              help professionals organize client information and track session
              notes efficiently.{" "}
              <strong>As a co-founder and the sole developer</strong>, I was
              responsible for implementing the full functionality of the app —
              from architecture and development to testing and App Store
              release.
              <br />
              <br />
              The project is built with{" "}
              <strong>
                React Native CLI, Firebase Firestore, OneSignal, TypeScript, and
                Zustand.
              </strong>{" "}
              Our small team consisted of two co-founders and a designer. The
              initial version was released quickly and is already available on
              the <strong>App Store</strong>, with plans to evolve into a
              subscription-based product.
            </p>
          }
        />
        <Modal active={active} setActive={setActive} />
      </div>
      <WorkNavigator
        nextProjectName={"Kloki Planner"}
        href={"/kloki"}
        onClick={(e) => handleLinkClick(e, navigation, "/kloki")}
        overlayColor={"#00c8e7"}
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

export default transitionPages(VoiceNotesCase);
