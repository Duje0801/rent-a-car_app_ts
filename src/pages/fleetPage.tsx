import { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AppContext } from "../context/context";
import { Cars, Translate } from "../interfaces/interfaces";
import Navigation from "../components/navigation";
import Chat from "../components/chat";
import carData from "../data/carData";
import Translations from "../data/translations";
import frontImg from "../img/frontImg.jpg";
import "../style/pages/fleetPage.css";

export default function FleetPage(): JSX.Element {
  const { language, selectedClass, setSelectedClass } = useContext(AppContext);

  const carList: Cars[] = carData();
  const translations: Translate = Translations();

  const handleArrowClick = (side: string): void => {
    if (side === `L` && selectedClass === 0) return setSelectedClass(3);
    if (side === `L` && selectedClass > 0)
      return setSelectedClass(selectedClass - 1);
    if (side === `R` && selectedClass === 3) return setSelectedClass(0);
    if (side === `R` && selectedClass < 3)
      return setSelectedClass(selectedClass + 1);
  };

  const mappedCarList = carList.map((car, i) => {
    if (i === selectedClass)
      return (
        <div className="showFleetFP" key={i}>
          <div className="selectionFleetFP">
            <FaArrowLeft
              className="arrowFleetFP"
              onClick={() => handleArrowClick(`L`)}
            />
            <div className="carCategoryFleetFP">{car.category}</div>
            <FaArrowRight
              className="arrowFleetFP"
              onClick={() => handleArrowClick(`R`)}
            />
          </div>
          <div className="carInfoFleetFP">
            <div className="imgBoxFleetFP">
              <img src={car.img} alt={car.category} className="imgFleetFP" />
            </div>
            <div className="infoBoxFleetFP">
              <div>
                {translations.from}{" "}
                <span className="priceFleetFP">{car.price} €</span> /{" "}
                {translations.day}
              </div>
              <div>
                {translations.brand}: {car.make}
              </div>
              <div>Model: {car.model}</div>
              <div>
                {translations.power}: {car.power}{" "}
                {language === `en` ? `hp` : `KS`}
              </div>
              <div>
                {translations.engine}: {car.engine}
              </div>
              <div>
                {translations.year}: {car.year}.
              </div>
            </div>
          </div>
        </div>
      );
  });

  return (
    <div>
      <div className="frontFP">
        <Navigation />
        <img src={frontImg} alt="front image" className="frontImageFP" />
        <div className="fleetFP">
          <div>{translations.fleet}</div>
          {mappedCarList}
        </div>
      </div>
      <Chat />
    </div>
  );
}
