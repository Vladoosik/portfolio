// modules
import React, {FC} from "react";
// assets
import {Logo} from "../../assets";
// constants
import {headerLinks, HeaderLinksProps} from "../../constants/headerLink/headerLinks";
// styles
import styles from "./styles.module.css";
// components
import AnimatedLinks from "../animatedLinks";

interface HeaderProp {
    setModal: (b: boolean) => void
}

const Header: FC<HeaderProp> = (props) => {
    const {setModal} = props;

    const onLinkPress = (path: string) => {
        if (!path) {
            setModal(true)
        }
    }
    return (
        <div className={styles.container}>
            <div>
                <Logo/>
            </div>
            <div className={styles.linkContainer}>
                {headerLinks.map((item: HeaderLinksProps) => (
                    <AnimatedLinks onClick={() => onLinkPress(item.path)} smooth key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default Header;
