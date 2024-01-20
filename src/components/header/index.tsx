// modules
import React, { FC } from "react";
// assets
import { Logo } from "../../assets";
// constants
import {
  headerLinks,
  HeaderLinksProps,
} from "../../constants/headerLink/headerLinks";
// styles
import styles from "./styles.module.css";
// components
import AnimatedLinks from "../animatedLinks";
import { NavigateFunction } from "react-router/dist/lib/hooks";

interface HeaderProp {
  setModal: (b: boolean) => void;
  alternative?: boolean;
  data?: HeaderLinksProps[];
  navigation?: NavigateFunction;
  setWorkModal?: (b: boolean) => void;
}

const Header: FC<HeaderProp> = (props) => {
  const {
    setModal,
    alternative,
    data = headerLinks,
    navigation,
    setWorkModal,
  } = props;

  const onLinkPress = (path: string, name?: string) => {
    if (!path && name !== "All Works") {
      setModal(true);
    }
    if (alternative && navigation) {
      navigation(path);
    }
    if (!path && name === "All Works" && setWorkModal) {
      setWorkModal(true);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <Logo />
      </div>
      <div className={styles.linkContainer}>
        {data.map((item: HeaderLinksProps) => (
          <AnimatedLinks
            onClick={() => onLinkPress(item.path, item.name)}
            smooth
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
