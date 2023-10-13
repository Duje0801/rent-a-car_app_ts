import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";
import Translations from "../data/translations";
import { Translate } from "../interfaces/interfaces";
import flag1 from "../img/flag1.png";
import flag2 from "../img/flag2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { routes } from "../routes/routes";
import "../style/components/navigation.css";

export default function Navigation(): JSX.Element {
  // In Navigation function I do everything two times because isOpen status is available only in responsive design
  // (when screen width is 1024px or narrower)
  // Also for same reason I used 4 useRefs instead od 2

  //If screen width is narrower than 1024px, user can see div with className respNavigationN
  //If screen width is wider than 1024px, user can see div with className navigationN

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { language, setLanguage } = useContext(AppContext);

  const navigate = useNavigate();

  const translations: Translate = Translations();

  const navScroll = useRef<HTMLDivElement>(null);
  const refEn = useRef<HTMLImageElement>(null);
  const refHr = useRef<HTMLImageElement>(null);
  const refEnResp = useRef<HTMLImageElement>(null);
  const refHrResp = useRef<HTMLImageElement>(null);

  useEffect((): void => {
    //Checks which flag needs to be grayscaled
    if (
      !refEn.current ||
      !refHr.current ||
      !refEnResp.current ||
      !refHrResp.current
    )
      return;
    else if (refEn && refHr && refEnResp && refHrResp && language === `en`) {
      refEn.current.style.filter = `none`;
      refHr.current.style.filter = `grayscale(100%)`;
      refEnResp.current.style.filter = `none`;
      refHrResp.current.style.filter = `grayscale(100%)`;
    } else if (refEn && refHr && refEnResp && refHrResp && language === `hr`) {
      refEn.current.style.filter = `grayscale(100%)`;
      refHr.current.style.filter = `none`;
      refEnResp.current.style.filter = `grayscale(100%)`;
      refHrResp.current.style.filter = `none`;
    }
  }, [language]);

  const handleNav = (newPage: string): void => {
    if (newPage === `Home`) return navigate(routes.home);
    if (newPage === `Fleet`) return navigate(routes.fleet);
    if (newPage === `Locations`) return navigate(routes.locations);
    if (newPage === `AboutUs`) return navigate(routes.aboutUs);
    if (newPage === `FAQ`) return navigate(routes.FAQ);
    if (newPage === `Contact`) return navigate(routes.contact);
  };

  const handleLanguage = (selectedLanguage: string): void => {
    if (selectedLanguage === language) return;
    else setLanguage(selectedLanguage);
  };

  const handleBurger = (): void => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const navigationList: JSX.Element = (
    <ul className="listN">
      <li onClick={() => handleNav(`Home`)}>{translations.home}</li>
      <li onClick={() => handleNav(`Fleet`)}>{translations.fleet}</li>
      <li onClick={() => handleNav(`Locations`)}>{translations.locations}</li>
      <li onClick={() => handleNav(`AboutUs`)}>{translations.aboutUs}</li>
      <li onClick={() => handleNav(`FAQ`)}>{translations.FAQ}</li>
      <li onClick={() => handleNav(`Contact`)}>{translations.contact}</li>
    </ul>
  );

  return (
    <>
      <div ref={navScroll} className="navigationN">
        {navigationList}
        <div className="flagBoxN">
          <img
            onClick={() => handleLanguage(`en`)}
            src={flag1}
            ref={refEn}
            alt="Uk Flag"
            className="flagN"
          ></img>
          <img
            onClick={() => handleLanguage(`hr`)}
            src={flag2}
            ref={refHr}
            alt="Croatian Flag"
            className="flagN"
          ></img>
        </div>
      </div>
      <div className="respNavigationN">
        <div className="flagBoxN">
          <img
            onClick={() => handleLanguage(`en`)}
            src={flag1}
            ref={refEnResp}
            alt="UK Flag"
            className="flagN"
          ></img>
          <img
            onClick={() => handleLanguage(`hr`)}
            src={flag2}
            ref={refHrResp}
            alt="Croatian Flag"
            className="flagN"
          ></img>
        </div>
        <div>
          <GiHamburgerMenu onClick={handleBurger} className="burgerN" />
        </div>
      </div>
      {isOpen && <div>{navigationList}</div>}
    </>
  );
}
