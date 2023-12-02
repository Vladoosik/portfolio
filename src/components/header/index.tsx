// modules
import React from "react";
import { Link } from "react-scroll";
// assets
import { Logo } from "../../assets";
// constants
import { headerLinks, HeaderLinksProps } from "../../constants/headerLinks";
// styles
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <Logo />
      </div>
      <div className={styles.linkContainer}>
        {headerLinks.map((item: HeaderLinksProps) => (
          <Link to={item.path} className={styles.headerBtn}>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
