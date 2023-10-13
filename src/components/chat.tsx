import { useEffect, useState, useContext } from "react";
import { GoX } from "react-icons/go";
import { BsChatLeft } from "react-icons/bs";
import { AppContext } from "../context/context";
import Translations from "../data/translations";
import { Translate } from "../interfaces/interfaces";
import logo from "../img/logo.png";
import "../style/components/chat.css";

export default function Chat(): JSX.Element {
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [state, setState] = useState<string>(``);

  const { messageList, setMessageList, language } = useContext(AppContext);

  const translations: Translate = Translations();

  useEffect((): void => {
    setMessageList([translations.chat1]);
    setState(``);
  }, [language]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (messageList.length === 3) return;
    // When user send message, automaticaly gets an answer from company
    setMessageList([...messageList, state, translations.chat2]);
    setState(``);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setState(e.currentTarget.value);
  };

  const handleClick = (): void => {
    if (chatOpen) return setChatOpen(false);
    else return setChatOpen(true);
  };

  const mapMessages = messageList.map((message, i) => {
    if (i === 1)
      return (
        <div className="messageUserC" key={i}>
          {message}
        </div>
      );
    return (
      <div className="messageBoxC" key={i}>
        <img src={logo} alt="logo"></img>
        <div className="messageC">{message}</div>
      </div>
    );
  });

  if (chatOpen)
    return (
      <div className="chatC">
        <GoX onClick={handleClick} className="closeC" />
        <form onSubmit={handleSubmit}>
          <div className="titleC">Oldtimer Rent-a-car</div>
          <div className="messagesDisplayC">
            <div>{mapMessages}</div>
          </div>
          <input
            value={state}
            onChange={handleChange}
            className="chatInputC"
            maxLength={100}
            placeholder={translations.typeMessage}
          />
          <button className="chatBtnC" type="submit"></button>
        </form>
      </div>
    );
  else
    return (
      <div onClick={handleClick} className="chatClosedC">
        <BsChatLeft />
      </div>
    );
}
