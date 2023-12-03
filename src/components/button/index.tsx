// modules
import React, {FC} from 'react';
// styles
import styles from './styles.module.css';
import {ArrowIcon} from "../../assets";

type ButtonProps = {
    text: string
    widthArrow?: boolean
    onClick?: () => void
}

const Button: FC<ButtonProps> = (props) => {
    const {text, widthArrow = true, onClick} = props
    return (
        <div style={{position: 'relative'}} onClick={onClick}>
            <div className={styles.button}>
                <p className={styles.btnText}>{text}</p>
                <div className={styles.buttonMask}/>
            </div>
            {widthArrow &&
                <ArrowIcon className={styles.buttonArrow}/>
            }
        </div>
    );
};

export default Button;