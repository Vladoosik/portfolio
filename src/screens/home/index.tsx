// modules
import React, {useEffect, useRef, useState} from "react";
// styles
import styles from "./styles.module.css";
// components
import {AnimatedIcons, Button, Header, Modal} from "../../components";
// assets
import {AnimatedLogo, GitHub, GitLab, Gmail, LinkedIn, Telegram,} from "../../assets";
// types
import {CursorPositionType} from "../../types/AnimatedIconType";

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState<CursorPositionType>({
        x: 0,
        y: 0,
    });
    const [modalActive, setModalActive] = useState(false);
    const cursorPositionRef = useRef(cursorPosition);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const {clientX, clientY} = event;
            cursorPositionRef.current = {x: clientX, y: clientY};
            setCursorPosition({x: clientX, y: clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className={styles.container} id={'home'}>
                <Header setModal={setModalActive}/>
                <div className={styles.contentContainer}>
                    <div className={styles.nameContainer}>
                        <div style={{zIndex: 2}}>
                            <h4 className={styles.name}>Vlad Khrushchev</h4>
                            <span className={styles.description}>
                                Interactive Frontend-Developer
                            </span>
                            <div className={styles.buttonContainer}>
                                <Button
                                    text={"About Me"}
                                    onClick={() => setModalActive(true)}
                                />
                            </div>
                        </div>
                        <div className={styles.logoContainer}>
                            <AnimatedLogo/>
                        </div>
                    </div>
                    <div className={styles.iconContainer}>
                        <LinkedIn className={styles.icon}/>
                        <GitHub className={styles.icon}/>
                        <GitLab className={styles.icon}/>
                        <Telegram className={styles.icon}/>
                        <Gmail className={styles.icon}/>
                    </div>
                </div>
                <div>
                    <AnimatedIcons cursorPosition={cursorPositionRef.current}/>
                </div>
                <Modal active={modalActive} setActive={setModalActive}/>
                <div className={styles.worksContainer}>
                    <p>Works</p>
                </div>
            </div>
        </>
    );
};

export default Home;
