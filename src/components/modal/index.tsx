// modules
import axios from "axios";
import React, {ChangeEvent, FC, memo, useCallback, useMemo, useState,} from "react";
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

type MessageType = {
    name: string;
    email: string;
    description: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// serverless function (api/contact.js), it holds the Telegram credentials
const CONTACT_API = "/api/contact";

const Modal: FC<ModalProps> = (props) => {
    const {active, setActive} = props;
    const [messageIsSend, setMessageIsSend] = useState<boolean>(false);
    const [sendError, setSendError] = useState<boolean>(false);
    // honeypot: hidden from people, bots fill it in
    const [website, setWebsite] = useState<string>("");
    const [message, setMessage] = useState<MessageType>({
        name: "",
        email: "",
        description: "",
    });
    const memoizedMessage = useMemo(() => message, [message]);

    const handleInputChange = useCallback(
        <T extends keyof MessageType>(field: T, value: MessageType[T]) => {
            setMessage((prevMessage) => ({
                ...prevMessage,
                [field]: value,
            }));
        },
        [],
    );

    const checkMessage = (): boolean => {
        return (
            Object.values(memoizedMessage).some((value) => value.trim() === "") ||
            !EMAIL_PATTERN.test(memoizedMessage.email.trim())
        );
    };

    const resetMessage = () => {
        setMessage({
            name: "",
            email: "",
            description: "",
        });
    };

    const handleSendMessage = async (): Promise<void> => {
        setSendError(false);

        await axios
            .post(CONTACT_API, {...memoizedMessage, website})
            .then(() => {
                setMessageIsSend(true);
                resetMessage();
            })
            .catch((error) => {
                console.log(error.message);
                setSendError(true);
            });
    };

    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modalContent active" : "modalContent"}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className={
                        active && !messageIsSend
                            ? "halfAbout active"
                            : active && messageIsSend
                                ? "halfAbout success"
                                : "halfAbout"
                    }
                >
                    {messageIsSend && (
                        <div className={"successContainer"}>
                            <h2>Your message has been sent!</h2>
                            <p>You can close this modal</p>
                            <Button
                                text={"Close"}
                                widthArrow={false}
                                onClick={() => setActive(false)}
                            />
                        </div>
                    )}
                    <div className={messageIsSend ? "hideContent" : "aboutContent"}>
                        <h3 className={"aboutMe"}>About Me.</h3>
                        <p className={"aboutDescription"}>
                            Full-Stack Developer · React Native / NestJS
                        </p>
                        <p className={"mainAboutText"}>
                            Hi, I'm Vlad Khrushchov, a{" "}
                            <strong>Full-Stack Developer</strong> from Ukraine. I build
                            mobile apps with <strong>React Native</strong> and backends
                            with <strong>NestJS</strong>, from the first screen to the
                            store release.
                            <br/>
                            Recently I built <strong>IDriver</strong>, a driving-theory app
                            live on the App Store and Google Play: the mobile app, the admin
                            panel and the backend with payments, real-time features and
                            security hardening. Before that I shipped{" "}
                            <strong>Voice Notes</strong>, a CRM app, to the App Store as
                            the sole developer.
                            <br/>
                            I'm open to <strong>new proposals and interesting projects</strong>.
                            Outside of work: gym, guitar and games.
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
                        {/*    download={"CV Vlad Khrushchov"}*/}
                        {/*    className={"downloadLink"}*/}
                        {/*  >*/}
                        {/*    Download My Cv*/}
                        {/*    <Download className={"downloadIcon"} />*/}
                        {/*  </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div
                    className={
                        active && !messageIsSend
                            ? "halfContact active"
                            : messageIsSend
                                ? "halfContact success"
                                : "halfContact"
                    }
                >
                    <div className={messageIsSend ? "hideContact" : "contactContainer"}>
                        <div className={"closeBtnContainer"}>
                            <button
                                type="button"
                                aria-label="Close"
                                className="close-container"
                                onClick={() => setActive(false)}
                            >
                                <span className="leftright"/>
                                <span className="rightleft"/>
                            </button>
                        </div>
                        <div>
                            <h3 className={"contactTitle"}>Let’s talk.</h3>
                            <p className={"contactText"}>
                                New projects, freelance inquiry or even a coffee.
                            </p>
                        </div>
                        <div className={"inputContainer"}>
                            <label className={"inputLabel"} htmlFor={"contact-name"}>Name</label>
                            <div className={"inputContent"}>
                                <input
                                    type="text"
                                    id={"contact-name"}
                                    className={"input"}
                                    name={"name"}
                                    value={memoizedMessage.name}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        handleInputChange("name", e.target.value)
                                    }
                                />
                                <span className={"inputCover"}/>
                            </div>
                        </div>
                        <div style={{marginTop: 25}}>
                            <div className={"inputContainer"}>
                                <label className={"inputLabel"} htmlFor={"contact-email"}>Email</label>
                                <div className={"inputContent"}>
                                    <input
                                        type="email"
                                        id={"contact-email"}
                                        className={"input"}
                                        name={"email"}
                                        value={memoizedMessage.email}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                            handleInputChange("email", e.target.value)
                                        }
                                    />
                                    <span className={"inputCover"}/>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: 25}}>
                            <div className={"inputContainer"}>
                                <label className={"inputLabel"} htmlFor={"contact-message"}>Message</label>
                                <div className={"inputContent"}>
                  <textarea
                      id={"contact-message"}
                      className={"textArea"}
                      name={"description"}
                      value={memoizedMessage.description}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          handleInputChange("description", e.target.value)
                      }
                  />
                                    <span className={"textAreaCover"}/>
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            name={"website"}
                            className={"honeypot"}
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden
                            value={website}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setWebsite(e.target.value)
                            }
                        />
                        {sendError && (
                            <p className={"formError"} role="alert">
                                The message was not sent. Please try again or email me at
                                x.vlad2101@gmail.com
                            </p>
                        )}
                        <div className={"buttonContainer"}>
                            <Button
                                text={"Send Message"}
                                widthArrow={false}
                                disabled={checkMessage()}
                                onClick={handleSendMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Modal);
