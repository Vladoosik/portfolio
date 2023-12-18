// modules
import React, {FC, memo} from 'react';
import {Link} from "react-scroll";
// styles
import styles from "./styles.module.css";
// types
import {HeaderLinksProps} from "../../constants/headerLink/headerLinks";
import {ReactScrollLinkProps} from "react-scroll/modules/components/Link";

interface LinksProps extends Omit<ReactScrollLinkProps, 'to'> {
    item: HeaderLinksProps
}

const AnimatedLinks: FC<LinksProps> = (props) => {
    const {item} = props;
    return (
        <Link {...props} to={item.path} className={styles.headerBtn} key={item.id}>
            <span>{item.name}</span>
        </Link>
    );
};

export default memo(AnimatedLinks);