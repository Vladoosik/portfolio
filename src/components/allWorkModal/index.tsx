// modules
import React, { FC, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
// components
import { Button, CardModal } from "../index";
// styles
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";

interface AllWorkModalProps {
  data: any;
  active: boolean;
  setActive: (b: boolean) => void;
}

const AllWorkModal: FC<AllWorkModalProps> = (props) => {
  const { data, active, setActive } = props;
  const navigate = useNavigate();
  const location = useLocation();

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

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="modalWork active"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={transition}
          onClick={() => setActive(false)}
        >
          <div className="buttonBox">
            <Button
              text="X Close"
              onClick={() => setActive(false)}
              widthArrow={false}
              className={"buttonModal"}
            />
          </div>
          <motion.div
            className="cardModalContainer"
            onClick={handleModalClick}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={transition}
          >
            {data?.map((item: any, index: number) => (
              <CardModal
                currentPath={location.pathname}
                navigate={navigate}
                item={item}
                index={index}
                key={item.id}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AllWorkModal;
