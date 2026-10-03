// modules
import React, { FC, memo } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// styles
import styles from "./styles.module.css";
// types
import { HeaderLinksProps } from "../../constants/headerLink/headerLinks";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";

interface LinksProps extends Omit<ReactScrollLinkProps, "to"> {
  item: HeaderLinksProps;
}

const AnimatedLinks: FC<LinksProps> = (props) => {
  const { item, onClick, ...scrollProps } = props;

  // external link
  if (/^https?:\/\//.test(item.path)) {
    return (
      <a
        href={item.path}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={styles.headerBtn}
      >
        <span>{item.name}</span>
      </a>
    );
  }

  // route
  if (item.path.startsWith("/")) {
    return (
      <RouterLink to={item.path} className={styles.headerBtn}>
        <span>{item.name}</span>
      </RouterLink>
    );
  }

  // no target, only an action (opens a modal)
  if (!item.path) {
    return (
      <button type={"button"} className={styles.headerBtn} onClick={onClick}>
        <span>{item.name}</span>
      </button>
    );
  }

  // anchor on the current page
  return (
    <Link
      {...scrollProps}
      onClick={onClick}
      to={item.path}
      href={`#${item.path}`}
      className={styles.headerBtn}
    >
      <span>{item.name}</span>
    </Link>
  );
};

export default memo(AnimatedLinks);
