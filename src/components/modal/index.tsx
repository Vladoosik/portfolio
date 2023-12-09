// modules
import React, {FC} from "react";
// components
import Button from "../button";
// styles
import "./styles.css";
// assets
import {CssIcon, JsIcon, ReactIcon, TsIcon} from "../../assets";

interface ModalProps {
    active: boolean;
    setActive: (b: boolean) => void;
}

const Modal: FC<ModalProps> = (props) => {
    const {active, setActive} = props;
    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modalContent active" : "modalContent"}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={active ? "halfAbout active" : "halfAbout"}>
                    <div className={"aboutContent"}>
                        <h3 className={"aboutMe"}>About Me.</h3>
                        <p className={"aboutDescription"}>
                            Interactive Front-End Developer
                        </p>
                        <p className={"mainAboutText"}>
                            Hi, I'm Vlad Khrushchev, a 23-years-old Ukrainian{" "}
                            <strong>Front-End and Mobile Developer.</strong> I love coding and
                            learning new technologies. I am also always open to{" "}
                            <strong>some new proposals and interesting projects</strong>.
                            <br/>
                            Since I have been developing applications in{" "}
                            <strong>react-native</strong> for a long time, I give priority to
                            the development of <strong>mobile applications</strong>, but if
                            you have great suggestions for react, then why not :) <br/>
                            In my free time from coding, I work out at the{" "}
                            <strong>gym</strong>, learn to play the <strong>guitar</strong>{" "}
                            and sometimes play <strong>games</strong>
                        </p>
                        <div className={"aboutIconContainer"}>
                            <ReactIcon className={"reactIcon"}/>
                            <JsIcon className={"jsIcon"}/>
                            <CssIcon className={"cssIcon"}/>
                            <TsIcon className={"tsIcon"}/>
                        </div>
                        {/*<div className={"linkContainer"}>*/}
                        {/*  <a*/}
                        {/*    href="../../assets/cv/CV.pdf"*/}
                        {/*    download={"CV Vlad Khrushchev"}*/}
                        {/*    className={"downloadLink"}*/}
                        {/*  >*/}
                        {/*    Download My Cv*/}
                        {/*    <Download className={"downloadIcon"} />*/}
                        {/*  </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className={active ? "halfContact active" : "halfContact"}>
                    <div className={"contactContainer"}>
                        <div className={"closeBtnContainer"}>
                            <div className="close-container" onClick={() => setActive(false)}>
                                <div className="leftright"/>
                                <div className="rightleft"/>
                            </div>
                        </div>
                        <div>
                            <h3 className={"contactTitle"}>Let’s talk.</h3>
                            <p className={"contactText"}>
                                New projects, freelance inquiry or even a coffee.
                            </p>
                        </div>
                        <div className={"inputContainer"}>
                            <label className={"inputLabel"}>Name</label>
                            <div className={"inputContent"}>
                                <input type="text" className={"input"}/>
                                <span className={"inputCover"}/>
                            </div>
                        </div>
                        <div style={{marginTop: 25}}>
                            <div className={"inputContainer"}>
                                <label className={"inputLabel"}>Email</label>
                                <div className={"inputContent"}>
                                    <input type="text" className={"input"}/>
                                    <span className={"inputCover"}/>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: 25}}>
                            <div className={"inputContainer"}>
                                <label className={"inputLabel"}>Message</label>
                                <div className={"inputContent"}>
                                    <textarea className={"textArea"}/>
                                    <span className={"textAreaCover"}/>
                                </div>
                            </div>
                        </div>
                        <div className={"buttonContainer"}>
                            <Button text={"Send Message"} widthArrow={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
