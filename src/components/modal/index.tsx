// modules
import axios from "axios";
import React, {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";
// components
import Button from "../button";
// styles
import "./styles.css";
// assets
import { CssIcon, JsIcon, ReactIcon, TsIcon } from "../../assets";
// constants
import { CHAT_ID, URI_API } from "../../constants/postValue";

interface ModalProps {
  active: boolean;
  setActive: (b: boolean) => void;
}

type MessageType = {
  name: string;
  email: string;
  description: string;
};

const Modal: FC<ModalProps> = (props) => {
  const { active, setActive } = props;
  const [messageIsSend, setMessageIsSend] = useState<boolean>(false);
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
    return Object.values(memoizedMessage).some((value) => value === "");
  };

  const handleSendMessage = async (): Promise<void> => {
    let message = `<b>Письмо с сайта</b>\n`;
    message += `<b>Отправиитель: </b> ${memoizedMessage.name} \n`;
    message += `<b>Почта: </b> ${memoizedMessage.email} \n`;
    message += `<b>Описание: </b> ${memoizedMessage.description}`;

    await axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then(() => setMessageIsSend(true))
      .catch((error) => console.log(error.message))
      .finally(() => {
        setMessage({
          name: "",
          email: "",
          description: "",
        });
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
              <h2>Your message has been send!</h2>
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
              Interactive Front-End Developer
            </p>
            <p className={"mainAboutText"}>
              Hi, I'm Vlad Khrushchev, a 23-years-old Ukrainian{" "}
              <strong>Front-End and Mobile Developer.</strong> I love coding and
              learning new technologies. I am also always open to{" "}
              <strong>some new proposals and interesting projects</strong>.
              <br />
              Since I have been developing applications in{" "}
              <strong>react-native</strong> for a long time, I give priority to
              the development of <strong>mobile applications</strong>, but if
              you have great suggestions for react, then why not :) <br />
              In my free time from coding, I work out at the{" "}
              <strong>gym</strong>, learn to play the <strong>guitar</strong>{" "}
              and sometimes play <strong>games</strong>
            </p>
            <div className={"aboutIconContainer"}>
              <ReactIcon className={"reactIcon"} />
              <JsIcon className={"jsIcon"} />
              <CssIcon className={"cssIcon"} />
              <TsIcon className={"tsIcon"} />
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
              <div className="close-container" onClick={() => setActive(false)}>
                <div className="leftright" />
                <div className="rightleft" />
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
                <input
                  type="text"
                  className={"input"}
                  name={"name"}
                  value={memoizedMessage.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("name", e.target.value)
                  }
                />
                <span className={"inputCover"} />
              </div>
            </div>
            <div style={{ marginTop: 25 }}>
              <div className={"inputContainer"}>
                <label className={"inputLabel"}>Email</label>
                <div className={"inputContent"}>
                  <input
                    type="text"
                    className={"input"}
                    name={"email"}
                    value={memoizedMessage.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("email", e.target.value)
                    }
                  />
                  <span className={"inputCover"} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: 25 }}>
              <div className={"inputContainer"}>
                <label className={"inputLabel"}>Message</label>
                <div className={"inputContent"}>
                  <textarea
                    className={"textArea"}
                    name={"description"}
                    value={memoizedMessage.description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                  <span className={"textAreaCover"} />
                </div>
              </div>
            </div>
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
