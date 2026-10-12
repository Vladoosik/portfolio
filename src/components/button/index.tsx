// modules
import React, { FC, KeyboardEvent } from "react";
// styles
import styles from "./styles.module.css";
// assets
import { ArrowIcon } from "../../assets";

type ButtonProps = {
  text: string;
  widthArrow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = (props) => {
  const {
    text,
    widthArrow = true,
    onClick,
    disabled = false,
    className,
  } = props;

  const handleButtonPress = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleButtonPress();
    }
  };

  // without onClick the button is only a visual part of a link around it
  const buttonProps = onClick
    ? {
        role: "button",
        tabIndex: disabled ? -1 : 0,
        "aria-disabled": disabled,
        onKeyDown: handleKeyDown,
      }
    : {};

  return (
    <div
      style={{
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={handleButtonPress}
      className={className}
      {...buttonProps}
    >
      <div className={styles.button}>
        <p className={disabled ? styles.disabledText : styles.btnText}>
          {text}
        </p>
        <div className={styles.buttonMask} />
      </div>
      {widthArrow && <ArrowIcon className={styles.buttonArrow} />}
    </div>
  );
};

export default Button;
