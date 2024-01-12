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
}

const Header: FC<HeaderProp> = (props) => {
  const { setModal, alternative, data = headerLinks, navigation } = props;

  const onLinkPress = (path: string) => {
    if (!path) {
      setModal(true);
    }
    if (alternative && navigation) {
      navigation(path);
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
            onClick={() => onLinkPress(item.path)}
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
