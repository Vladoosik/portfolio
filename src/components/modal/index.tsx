// modules
import React, {FC} from 'react';
import './styles.css';

interface ModalProps {
    active: boolean
    setActive: (b: boolean) => void
}

const Modal: FC<ModalProps> = (props) => {
    const {active, setActive} = props;
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modalContent active' : 'modalContent'} onClick={(e) => e.stopPropagation()}>
                some content
            </div>
        </div>
    );
};

export default Modal;