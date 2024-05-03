// modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router/dist/lib/hooks";
// components
import {
  AboutProject,
  Header,
  Introduction,
  Modal,
  WorkDescription,
  WorkNavigator,
} from "../../components";
// utils
import transitionPages from "../../utils/transitionPages";
import { handleNavigation } from "../../utils/navigation";
// constants
import { caseHeaderLinks } from "../../constants/headerLink/headerLinks";
import { PlanerColor } from "../../constants/projectColors";
// styles
import styles from "./styles.module.css";

const PlannerCase = () => {
  const [active, setActive] = useState<boolean>(false);
  const [workModal, setWorkModal] = useState<boolean>(false);
  const navigation: NavigateFunction = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <Header
          setWorkModal={setWorkModal}
          alternative
          data={caseHeaderLinks}
          setModal={setActive}
          navigation={navigation}
        />
        <div className={styles.contentBox}>
          <p>For Dream Case</p>
          <WorkDescription
            role={"React-Native Developer"}
            context={"Mobile Planer"}
            period={"January 2024 - Present"}
            titleColor={"#7AAC2D"}
          />
        </div>
        <div>
          <Introduction
            title={"About Project"}
            description={
              "The project created in React-Native is a planner" +
              " that allows you to add, delete plans, daily habits," +
              " monitor your progress, and also receive notifications " +
              "from the application about upcoming plans"
            }
          />
        </div>
        <AboutProject
          data={PlanerColor}
          description={
            <p className={styles.workDescription}>
              My job was to <strong>develop the application</strong>, create new
              functionality, support and optimize old solutions in the
              application, as well as <strong>connect the server</strong>{" "}
              component of the application.
              <br />
              <br />
              Overall, the project is quite large and I learned a lot during its
              development. In this case <strong>
                MobX and Typescript
              </strong>{" "}
              were actively used, which helped me understand them in{" "}
              <strong>more detail</strong>. Of course, there were other
              libraries that can often be found in react-native, for example{" "}
              <strong>React-Navigation</strong>
            </p>
          }
          photoSource={require("../../assets/png/planer_mobile.png")}
        />
        <WorkNavigator
          nextProjectName={"ForDream Web"}
          onClick={() => handleNavigation(navigation, "/forDream")}
          overlayColor={"#030D22"}
          backgroundColor={"white"}
        />
        <Modal active={active} setActive={setActive} />
      </div>
    </>
  );
};

export default transitionPages(PlannerCase);
