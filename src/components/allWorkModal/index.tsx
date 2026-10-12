// modules
import React, { FC, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
// components
import { Button, CardModal } from "../index";
// styles
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalWorkType } from "../../types/WorksType";
// utils
import { useModalBehavior } from "../../utils/useModalBehavior";

interface AllWorkModalProps {
  data: ModalWorkType[];
  active: boolean;
  setActive: (b: boolean) => void;
}

const AllWorkModal: FC<AllWorkModalProps> = (props) => {
  const { data, active, setActive } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const modalRef = useRef<HTMLDivElement>(null);

  useModalBehavior(active, () => setActive(false), modalRef);

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
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="All works"
          tabIndex={-1}
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
            {data?.map((item: ModalWorkType, index: number) => (
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
