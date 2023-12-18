// modules
import React from 'react';
import {Link} from "react-scroll";
// assets
import {Logo} from '../../assets';
// styles
import styles from './styles.module.css';
// constants
import {FooterLinks} from "../../constants/footerLinks";
import {HeaderLinksProps} from "../../constants/headerLink/headerLinks";
// components
import {AnimatedLinks} from '../../components';

const Footer = () => {
    const year = new Date().getFullYear();

    const openLink = (link: string) => {
        window.open(link, '_blank')
    }
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <Link to={'home'} smooth={'100'} className={styles.iconLink}>
                    <Logo/>
                    <span className={styles.toTop}>To Top</span>
                </Link>
                <div className={styles.linkContainer}>
                    {FooterLinks.map((item: HeaderLinksProps) => (
                        <AnimatedLinks onClick={() => openLink(item.path)} item={item}/>
                    ))}
                </div>
                <div className={styles.licenceContainer}>
                    <span className={styles.license}>© {year} Vlad Khrushchev{' - '}<Link to={''}>Contact</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;