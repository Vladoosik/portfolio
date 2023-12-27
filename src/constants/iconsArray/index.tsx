// modules
import React from "react";
// assets
import {DoubleWave, GitHub, GitLab, Gmail, Line, LinkedIn, SemiCircle, Telegram, Triangle, Wave} from "../../assets";
// styles
import styles from "../../screens/home/styles.module.css";
// utils
import {iconPosition} from "../../utils/iconPosition";

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

export const animatedIcons = [
    {
        id: 1,
        icon: <Wave color={"#CF4981"}/>,
        style: iconPosition("25%", "90%", "50%"),
        invertedMove: false,
    },
    {
        id: 2,
        icon: <DoubleWave color={"#CF4981"}/>,
        style: iconPosition("50%", "70%", "50%"),
        invertedMove: true,
    },
    {
        id: 3,
        icon: <Line color={"#CF4981"}/>,
        style: iconPosition("12%", "50%", "50%"),
        invertedMove: false,
    },
    {
        id: 4,
        icon: <Triangle color={"#0f6898"}/>,
        style: iconPosition("80%", "10%", "10%"),
        invertedMove: true,
    },
    {
        id: 5,
        icon: <Wave color={"yellow"}/>,
        color: "#CF4981",

        invertedMove: false,
    },
    {
        id: 6,
        icon: <Triangle color={"#3a9a5c"}/>,
        style: iconPosition("10%", "10%", "10%"),
        invertedMove: false,
    },
    {
        id: 7,
        icon: <Triangle color={"#49cfb0"}/>,
        style: iconPosition("10%", "80%", "50%"),
        invertedMove: true,
    },
    {
        id: 8,
        icon: <SemiCircle/>,
        style: iconPosition("50%", "20%", "50%"),
        invertedMove: false,
    },
    {
        id: 9,
        icon: <Triangle color={"#49cfb0"}/>,
        style: iconPosition("70%", "90%", "50%"),
        invertedMove: true,
    },
    {
        id: 12,
        icon: <Triangle color={"#49cfb0"}/>,
        style: iconPosition("82%", "50%", "50%"),
        invertedMove: true,
    },
    {
        id: 121,
        icon: <Line/>,
        style: iconPosition("12%", "25%", "60%"),
        invertedMove: false,
    },
];

export const staticIcons = [
    {
        id: 121,
        icon: <Line width={100} height={100}/>,
        style: iconPosition("12%", "5%", "60%"),
    }, {
        id: 123,
        icon: <Triangle color={"#49cfb0"} width={100} height={100}/>,
        style: iconPosition("32%", "18%", "60%"),
    }, {
        id: 124,
        icon: <Line width={100} height={100}/>,
        style: iconPosition("52%", "3%", "60%"),
    }, {
        id: 125,
        icon: <SemiCircle width={100} height={100} color={'orange'}/>,
        style: iconPosition("82%", "20%", "60%"),
    },
    {
        id: 126,
        icon: <Triangle width={100} height={100}/>,
        style: iconPosition("12%", "80%", "60%"),
    },
    {
        id: 127,
        icon: <Wave width={100} height={100} color={"orange"}/>,
        style: iconPosition("32%", "90%", "60%"),
    },
    {
        id: 128,
        icon: <DoubleWave width={100} height={100} color={"#49cfb0"}/>,
        style: iconPosition("52%", "70%", "60%"),
    },
    {
        id: 129,
        icon: <Wave width={100} height={100} color={"orange"}/>,
        style: iconPosition("82%", "90%", "60%"),
    },
]