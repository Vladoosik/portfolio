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
                            My job was to <strong>develop the application</strong>, create new
                            functionality, support and optimize old solutions in the
                            application, as well as <strong>connect the server</strong>{" "}
                            component of the application.
                            <br/>
                            <br/>
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
