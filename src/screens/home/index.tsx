// modules
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useHover } from "@use-gesture/react";
// styles
import styles from "./styles.module.css";
// components
import {
  AnimatedIcons,
  AnimatedText,
  Button,
  Header,
  Modal,
} from "../../components";
// assets
import { AnimatedLogo } from "../../assets";
// types
import { CursorPositionType } from "../../types/AnimatedIconType";
// constants
import { SocialIcons } from "../../constants/iconsArray";

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPositionType>({
    x: 0,
    y: 0,
  });
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean | undefined>(false);
  const bind = useHover((state) => {
    setIsHovered(state.hovering);
  });

  const cursorPositionRef = useRef<CursorPositionType>(cursorPosition);

  const handleIconPress = (path: string, params: string) => {
    if (params && path) {
      window.open(path, params);
    } else {
      const mailtoLink = `mailto:${path}?`;
      window.open(mailtoLink, "_blank");
    }
  };

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    cursorPositionRef.current = { x: clientX, y: clientY };
    setCursorPosition({ x: clientX, y: clientY });
  }, []);

  useEffect(() => {
    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isHovered, handleMouseMove]);

  return (
    <>
      <div className={styles.container} id={"home"} {...bind()}>
        <div
          className={modalActive ? styles.hiddenHeader : styles.headerContainer}
        >
          <Header setModal={setModalActive} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.nameContainer}>
            <div style={{ zIndex: 2 }}>
              <h4 className={styles.name}>Vlad Khrushchev</h4>
              <AnimatedText
                text={"Interactive Frontend-Developer"}
                className={styles.description}
              />
              <div className={styles.buttonContainer}>
                <Button
                  text={"About Me"}
                  onClick={() => setModalActive(true)}
                />
              </div>
            </div>
            <div className={styles.logoContainer}>
              <AnimatedLogo />
            </div>
          </div>
          <div
            className={
              modalActive ? styles.hiddenElement : styles.iconContainer
            }
          >
            {SocialIcons.map((item) => (
              <div
                key={item.id}
                onClick={() => handleIconPress(item.link, item.params)}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div>
          <AnimatedIcons cursorPosition={cursorPositionRef.current} />
        </div>
        <Modal active={modalActive} setActive={setModalActive} />
        <div className={styles.worksContainer}>
          <Link to={"work"} smooth>
            <p className={styles.works}>Works</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
