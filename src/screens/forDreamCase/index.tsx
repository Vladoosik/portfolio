// modules
import React, {useState} from 'react';
// components
import {Header, Modal} from '../../components';
// utils
import transitionPages from "../../utils/transitionPages";

const ForDreamCase = () => {
    const [active, setActive] = useState<boolean>(false);
    return (
        <div>
            <Header setModal={setActive}/>
            <span>For Dream Case</span>
            <Modal active={active} setActive={setActive}/>
        </div>
    );
};

export default transitionPages(ForDreamCase);