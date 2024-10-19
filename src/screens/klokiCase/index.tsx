// modules
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {animateScroll} from "react-scroll";
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
import {handleNavigation} from "../../utils/navigation";
// constants
import {caseHeaderLinks} from "../../constants/headerLink/headerLinks";
import {PlanerColor} from "../../constants/projectColors";
// styles
import styles from "./styles.module.css";
import {modalWorkArr} from "../../constants/commerceProject";

const PlannerCase = () => {
    const [active, setActive] = useState<boolean>(false);
    const [workModal, setWorkModal] = useState<boolean>(false);
    const navigation: NavigateFunction = useNavigate();
    const image = require("../../assets/png/kloki_main_menu.png");

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

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
                    <div className={styles.titleContainer}>
                        <div className={styles.titleContent}>
                            <p className={styles.title}>Kloki</p>
                            <AnimatedText
                                text={"All your plans in one app"}
                                className={styles.description}
                            />
                        </div>
                        <img className={styles.macImg} src={image} alt="macImage"/>
                    </div>
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
                            My work on this project was to
                            <strong>interact with the designer</strong>, add new features together, and
                            also create the main functionality of the application using various tools, for
                            example <strong>Redux Toolkit</strong>
                            <br/>
                            <br/>
                            as the main state manager. <strong>MMKV</strong> for storage, React
                            Navigation for navigation,
                            <strong>Typescript</strong> for typing components and more convenient work with properties,
                            and <strong>Firebase</strong> as
                            authorization, server storage and database
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
                <Footer onLinkPress={scrollToTop}/>
                <Modal active={active} setActive={setActive}/>
                <AllWorkModal
                    data={modalWorkArr}
                    active={workModal}
                    setActive={setWorkModal}
                />
            </div>
        </>
    );
};

export default transitionPages(PlannerCase);
