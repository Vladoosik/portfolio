// modules
import React, {FC} from 'react';
// styles
import styles from './styles.module.css';
// assets
import {ArrowIcon} from "../../assets";

type ButtonProps = {
    text: string
    widthArrow?: boolean
    onClick?: () => void
    disabled?: boolean
}

const Button: FC<ButtonProps> = (props) => {
    const {text, widthArrow = true, onClick, disabled = false} = props;

    const handleButtonPress = () => {
        if (onClick && !disabled) {
            onClick()
        }
    }

    return (
        <div style={{position: 'relative', cursor: disabled ? 'not-allowed' : 'pointer'}} onClick={handleButtonPress}>
            <div className={styles.button}>
                <p className={disabled ? styles.disabledText : styles.btnText}>{text}</p>
                <div className={styles.buttonMask}/>
            </div>
            {widthArrow && <ArrowIcon className={styles.buttonArrow}/>}
        </div>
    );
};

export default Button;