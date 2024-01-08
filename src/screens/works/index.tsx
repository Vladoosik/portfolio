// modules
import React from "react";
import {useMediaQuery} from "react-responsive";
import {useNavigate} from "react-router-dom";
import {NavigateFunction} from "react-router/dist/lib/hooks";
// styles
import styles from "./styles.module.css";
// components
import {WorkCards} from "../../components";
// types
import {WorksType} from "../../types/WorksType";
// constants
import {worksArr} from "../../constants/commerceProject";
import {staticIcons} from "../../constants/iconsArray";

const Works = () => {
    const isBigScreen: boolean = useMediaQuery({query: '(min-width: 2193px)'});
    const navigate: NavigateFunction = useNavigate();

    return (
        <div id={'work'} style={{position: "relative"}}>
            <p className={styles.workTitle}>CASE STUDIES</p>
            <h2 className={styles.workText}>Latest Works</h2>
            <div className={styles.cardContainer}>
                {worksArr.map((item: WorksType, index: number) => (
                    <WorkCards navigate={navigate} item={item} index={index} key={item.id}/>
                ))}
            </div>
            {isBigScreen &&
                <div className={styles.iconsContainer}>
                    {staticIcons.map((item) => (
                        <div key={item.id} style={{...item.style}}>
                            {item.icon}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default Works;
