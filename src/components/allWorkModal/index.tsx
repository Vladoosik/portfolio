// modules
import React, { FC } from "react"; // styles
import "./style.css";

interface AllWorkModalProps {
  data: any;
  active: boolean;
  setActive: (b: boolean) => void;
}

const AllWorkModal: FC<AllWorkModalProps> = (props) => {
  const { data, active, setActive } = props;
  return (
    <div
      className={active ? "modalWork active" : "modalWork"}
      onClick={() => setActive(false)}
    >
      {data.map((item: any) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default AllWorkModal;
