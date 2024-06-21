// modules
import { motion } from "framer-motion";
import React, { FC } from "react";
// components
import Button from "../button";
// styles
import "./styles.css";

type CardModalProps = {
  item: any;
  index: number;
};
const CardModal: FC<CardModalProps> = (props) => {
  const { item, index } = props;
  const odd: boolean = index % 2 === 0;

  const imageVariants = {
    hidden: { x: odd ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: odd ? -100 : 100, opacity: 0 },
  };

  const textVariants = {
    hidden: { x: odd ? 150 : -150, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: odd ? 150 : -150, opacity: 0 },
  };

  const transition = { duration: 0.4, ease: "easeInOut", delay: odd ? 0 : 0.3 };

  const Image = () => (
    <motion.img
      src={item.image}
      alt={"WorkImage"}
      className={"img"}
      style={{
        order: !odd ? 1 : 0,
      }}
      initial="hidden"
      animate="visible"
      variants={imageVariants}
      transition={transition}
    />
  );

  const DescriptionText = () => (
    <motion.div
      style={{ order: !odd ? 0 : 1 }}
      className={"textContainer"}
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={transition}
    >
      <div>
        <p className={"title"}>{item.title}</p>
        <p className={"modalSubtitle"}>
          {item.role} - {item.period}
        </p>
        <p className={"modalDescription"}>{item.description}</p>
      </div>
      <div className={"modalButtonBox"}>
        <Button text={"Case study"} widthArrow={false} />
      </div>
    </motion.div>
  );

  return (
    <div className={"modalCard"}>
      <Image />
      <DescriptionText />
    </div>
  );
};

export default CardModal;
