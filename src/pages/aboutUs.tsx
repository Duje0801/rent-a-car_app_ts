import Navigation from "../components/navigation";
import Translations from "../data/translations";
import { Translate } from "../interfaces/interfaces";
import frontImg from "../img/frontImg.jpg";
import "../style/pages/aboutUs.css";

export default function AboutUs(): JSX.Element {
  const translations: Translate = Translations();

  return (
    <div>
      <div className="frontA">
        <Navigation />
        <img src={frontImg} alt="frontImage" className="frontImageA" />
        <div className="aboutUsA">
          <div>{translations.aboutUs}</div>
          <div className="aboutUsTextA">
            <p>{translations.aboutUs1}</p>
            <p>{translations.aboutUs2}</p>
            <p>{translations.aboutUs3}</p>
            <p>{translations.aboutUs4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
