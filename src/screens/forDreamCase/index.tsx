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
// styles
import styles from "./styles.module.css";
// constants
import {caseHeaderLinks} from "../../constants/headerLink/headerLinks";
import {ForDreamColor} from "../../constants/projectColors";
import {modalWorkArr} from "../../constants/commerceProject";
// utils
import {handleNavigation} from "../../utils/navigation";
import {useMediaQuery} from "react-responsive";

const ForDreamCase = () => {
    const [active, setActive] = useState<boolean>(false);
    const [workModal, setWorkModal] = useState<boolean>(false);
    const image = require("../../assets/png/macboockMock.png");
    const navigation: NavigateFunction = useNavigate();
    const isMobile: boolean = useMediaQuery({query: '(max-width: 1200px)'});

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    const handleProjectNavigate = () => {
        window.open("https://fordream.dev/", "_blank");
    };

    return (
        <>
            <div className={styles.container} id={"#forDream"}>
                <Header
                    setModal={setActive}
                    setWorkModal={setWorkModal}
                    alternative
                    data={caseHeaderLinks}
                    navigation={navigation}
                />
                <div className={isMobile ? styles.titleContainerMob : styles.titleContainer}>
                    <div className={isMobile ? styles.titleContentMob : styles.titleContent}>
                        <p className={styles.title}>For Dream</p>
                        <AnimatedText
                            text={"Landing page for company"}
                            className={styles.description}
                        />
                    </div>
                    <img className={styles.macImg} src={image} alt="macImage"/>
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
                    photoSource={require("../../assets/png/macForDream.png")}
                    data={ForDreamColor}
                    imageStyle={{
                        width: 550,
                        height: 350,
                    }}
                    description={
                        <p className={styles.workDescription}>
                            Project where I was a <strong>React Developer</strong>.
                            Independently managed the project from{" "}
                            <strong>start to hosting</strong> I chose which libraries to use
                            in the project, <strong>created flexible component models</strong>
                            , and enabled firebase for temporary hosting during development. I
                            also did <strong>form validation</strong>, connecting the bot to
                            Telegram and sending the form to the group
                            <br/>
                            <br/>
                            Also took an active part in the redesign,{" "}
                            <strong>offering my methods</strong> for optimizing various
                            sections of the project
                        </p>
                    }
                />
                <Modal active={active} setActive={setActive}/>
            </div>
            <WorkNavigator
                nextProjectName={"MyStatus"}
                onClick={() => handleNavigation(navigation, "/myStatus")}
                overlayColor={"#00c8e7"}
            />
            <AllWorkModal
                data={modalWorkArr}
                active={workModal}
                setActive={setWorkModal}
            />
            <Footer onLinkPress={scrollToTop}/>
        </>
    );
};

export default transitionPages(ForDreamCase);
