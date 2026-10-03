// modules
import React, {memo, useEffect, useRef, useState} from "react";
import {Link} from "react-scroll";
import {useHover} from "@use-gesture/react";
// styles
import styles from "./styles.module.css";
// components
import {AnimatedIcons, AnimatedText, Button, CvLink, Header, Modal,} from "../../components";
// assets
import {AnimatedLogo} from "../../assets";
// types
import {CursorPositionType} from "../../types/AnimatedIconType";
// constants
import {SocialIcons} from "../../constants/iconsArray";

const Home = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean | undefined>(false);
    const bind = useHover((state) => {
        setIsHovered(state.hovering);
    });

    const cursorPositionRef = useRef<CursorPositionType>({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            cursorPositionRef.current = {x: event.clientX, y: event.clientY};
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHovered]);

    return (
        <>
            <div className={styles.container} id={"home"} {...bind()}>
                <div
                    className={modalActive ? styles.hiddenHeader : styles.headerContainer}
                >
                    <Header setModal={setModalActive}/>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.nameContainer}>
                        <div style={{zIndex: 2}}>
                            <h1 className={styles.name}>Vlad Khrushchov</h1>
                            <AnimatedText
                                text={"Full-Stack Developer · React Native / NestJS"}
                                className={styles.description}
                            />
                            <div className={styles.buttonContainer}>
                                <Button
                                    text={"About Me"}
                                    onClick={() => setModalActive(true)}
                                />
                                <CvLink className={styles.cvLink}/>
                            </div>
                        </div>
                        <div className={styles.logoContainer}>
                            <AnimatedLogo/>
                        </div>
                    </div>
                    <div
                        className={
                            modalActive ? styles.hiddenElement : styles.iconContainer
                        }
                    >
                        {SocialIcons.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                aria-label={item.name}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <AnimatedIcons cursorPosition={cursorPositionRef}/>
                </div>
                <Modal active={modalActive} setActive={setModalActive}/>
                <div className={styles.worksContainer}>
                    <Link to={"work"} href={"#work"} smooth>
                        <p className={styles.works}>Works</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default memo(Home);
