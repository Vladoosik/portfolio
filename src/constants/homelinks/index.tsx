// modules
import React from "react";
// assets
import {GitHub, GitLab, Gmail, LinkedIn, Telegram} from "../../assets";
// styles
import styles from "../../screens/home/styles.module.css";

export const SocialIcons = [
    {
        id: 11,
        icon: <LinkedIn className={styles.icon}/>,
        link: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D1%85%D1%80%D1%83%D1%89%D1%91%D0%B2-46a8b018a/',
        params: '_clamp'
    },
    {id: 12, icon: <GitHub className={styles.icon}/>, link: 'https://github.com/Vladoosik', params: '_clamp'},
    {id: 23, icon: <GitLab className={styles.icon}/>, link: 'https://gitlab.com/Vladoosik', params: '_clamp'},
    {id: 32, icon: <Telegram className={styles.icon}/>, link: 'https://t.me/vladoosik1', params: '_clamp'},
    {id: 44, icon: <Gmail className={styles.icon}/>, link: 'x.vlad2101@gmail.com', params: ''}
]