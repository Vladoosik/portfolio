// modules
import React, { FC } from "react";
import { Link } from "react-scroll";
// assets
import { Logo } from "../../assets";
// styles
import styles from "./styles.module.css";
// constants
import { FooterLinks } from "../../constants/footerLinks";
import { HeaderLinksProps } from "../../constants/headerLink/headerLinks";
// components
import { AnimatedLinks } from "../index";

type FooterProps = {
  linkToTop?: string;
  onLinkPress?: () => void;
};
const Footer: FC<FooterProps> = (props) => {
  const { linkToTop = "home", onLinkPress } = props;
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Link
          to={linkToTop}
          href={`#${linkToTop}`}
          smooth={"100"}
          className={styles.iconLink}
          onClick={onLinkPress}
        >
          <Logo />
          <span className={styles.toTop}>To Top</span>
        </Link>
        <div className={styles.linkContainer}>
          {FooterLinks.map((item: HeaderLinksProps) => (
            <AnimatedLinks key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.licenceContainer}>
          <span className={styles.license}>
            © {year} Vlad Khrushchov{" - "}
            <a href={"mailto:x.vlad2101@gmail.com"} className={styles.contact}>
              Contact
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
