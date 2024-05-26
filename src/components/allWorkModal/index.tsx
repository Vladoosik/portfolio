// modules
import React, { FC, useEffect } from "react";
// components
import { Button, CardModal } from "../index";
// styles
import "./style.css";

interface AllWorkModalProps {
  data: any;
  active: boolean;
  setActive: (b: boolean) => void;
}

const AllWorkModal: FC<AllWorkModalProps> = (props) => {
  const { data, active, setActive } = props;

  useEffect(() => {
    const body = document.querySelector("body");
    if (active) {
      body?.classList.add("modal-open");
    } else {
      body?.classList.remove("modal-open");
    }
  }, [active]);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      className={active ? "modalWork active" : "modalWork"}
      onClick={() => setActive(false)}
    >
      <div className={"buttonBox"}>
        <Button
          text={"X Close"}
          onClick={() => setActive(false)}
          widthArrow={false}
        />
      </div>
      <div className={"cardModalContainer"} onClick={handleModalClick}>
        {data.map((item: any, index: number) => (
          <CardModal item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AllWorkModal;
