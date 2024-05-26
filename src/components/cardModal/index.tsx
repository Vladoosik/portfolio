// modules
import React, { FC } from "react"; // styles
import Button from "../button";
import "./styles.css";

type CardModalProps = {
  item: any;
  index: number;
};
const CardModal: FC<CardModalProps> = (props) => {
  const { item, index } = props;
  const odd: boolean = index % 2 === 0;

  const Image = () => (
    <img
      src={item.image}
      alt={"WorkImage"}
      className={"img"}
      style={{
        order: !odd ? 1 : 0,
      }}
    />
  );

  const DescriptionText = () => (
    <div style={{ order: !odd ? 0 : 1 }} className={"textContainer"}>
      <p className={"title"}>{item.title}</p>
      <p className={"modalSubtitle"}>
        {item.role} - {item.period}
      </p>
      <p className={"modalDescription"}>{item.description}</p>
      <div className={"modalButtonBox"}>
        <Button text={"Case study"} widthArrow={false} />
      </div>
    </div>
  );

  return (
    <div className={"modalCard"}>
      <Image />
      <DescriptionText />
    </div>
  );
};

export default CardModal;
