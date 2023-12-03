// modules
import React, {useEffect, useState} from "react";
// styles
import styles from "./styles.module.css";
// components
import {Button, Header} from "../../components";
// assets
import {
    AnimatedLogo,
    DoubleWave,
    GitHub,
    GitLab,
    Gmail,
    Line,
    LinkedIn,
    SemiCircle,
    Telegram,
    Triangle,
    Wave
} from "../../assets";

type CursorPositionType = {
    x: number
    y: number
}

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState<CursorPositionType>({x: 0, y: 0});

    useEffect(() => {

        window.addEventListener('mousemove', (event: MouseEvent) => {
            const {clientX, clientY} = event;
            setCursorPosition({x: clientX, y: clientY});
        });
        return () => {
            window.removeEventListener('mousemove', (event: MouseEvent) => {
                const {clientX, clientY} = event;
                setCursorPosition({x: clientX, y: clientY});
            });
        };
    }, [cursorPosition]);

    const iconPosition = (top: string, left: string, transX: string) => {
        return {
            position: 'absolute',
            top,
            left,
            transform: `translateX(${transX})`,
        };
    };

    const arrayIcons = [
        {
            id: 1,
            icon: <Wave color={'#CF4981'}/>,
            style: iconPosition('25%', '90%', '50%'),
            invertedMove: false
        },
        {
            id: 2,
            icon: <DoubleWave color={'#CF4981'}/>,
            style: iconPosition('50%', '20%', '50%'),
            invertedMove: true
        },
        {id: 3, icon: <Line color={'#CF4981'}/>, style: iconPosition('12%', '50%', '50%'), invertedMove: false},
        {id: 4, icon: <Triangle color={'#0f6898'}/>, style: iconPosition('80%', '10%', '10%'), invertedMove: true},
        {
            id: 5,
            icon: <Wave color={'yellow'}/>,
            color: '#CF4981',
            style: iconPosition('70%', '40%', '50%'),
            invertedMove: false
        },
        {id: 6, icon: <Triangle color={'#3a9a5c'}/>, style: iconPosition('10%', '10%', '10%'), invertedMove: false},
        {id: 7, icon: <Triangle color={'#49cfb0'}/>, style: iconPosition('10%', '80%', '50%'), invertedMove: true},
        {id: 8, icon: <SemiCircle/>, style: iconPosition('90%', '50%', '50%'), invertedMove: false},
        {id: 9, icon: <Triangle color={'#49cfb0'}/>, style: iconPosition('70%', '90%', '50%'), invertedMove: true},
        {id: 121, icon: <Line/>, style: iconPosition('12%', '25%', '60%'), invertedMove: false},
    ]

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.contentContainer}>
                <div className={styles.nameContainer}>
                    <div style={{zIndex: 2}}>
                        <h4 className={styles.name}>Vlad Khrushchev</h4>
                        <span className={styles.description}>Interactive Frontend-Developer</span>
                        <div className={styles.buttonContainer}>
                            <Button text={'About Me'}/>
                        </div>
                    </div>
                    <div className={styles.logoContainer}>
                        <AnimatedLogo/>
                    </div>
                </div>
                <div className={styles.iconContainer}>
                    <LinkedIn className={styles.icon}/>
                    <GitHub className={styles.icon}/>
                    <GitLab className={styles.icon}/>
                    <Telegram className={styles.icon}/>
                    <Gmail className={styles.icon}/>
                </div>
            </div>
            {arrayIcons.map((item) => {
                const horizontalDuration = item.invertedMove ? -cursorPosition.x : cursorPosition.x;
                const verticalDuration = item.invertedMove ? -cursorPosition.y : cursorPosition.y;
                return (
                    <div
                        key={item.id}
                        className={styles.iconAnimation}
                        // @ts-ignore
                        style={{
                            ...item.style,
                            transform: `translate(-50%, -50%) translate(${horizontalDuration * 0.08}px, ${
                                verticalDuration * 0.08
                            }px)`,
                        }}
                    >
                        {item.icon}
                    </div>
                )
            })}
        </div>
    );
};

export default Home;
