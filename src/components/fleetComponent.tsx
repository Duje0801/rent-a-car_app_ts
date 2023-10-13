import { useContext } from "react";
import { AppContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Translations from "../data/translations";
import CarData from "../data/carData";
import { Cars, Translate } from "../interfaces/interfaces";
import { routes } from "../routes/routes";
import "../style/components/fleetComponent.css";

export default function FleetComponent(): JSX.Element {
  //There are two possible mappings, one is if screen is wider than 768px (shows all 4 car categories),
  //Another one is if screen is narrower than 767px (with `resp` in className and user can see only one class category),
  //but can change to another category after clicking on arrows (left or right)

  const { selectedClass, setSelectedClass } = useContext(AppContext);

  const navigate = useNavigate();

  const translations: Translate = Translations();
  const carDataArray: Cars[] = CarData();

  //Selects to see info about category (bigger screens)
  const handleNav = (number: number): void => {
    navigate(routes.fleet);
    setSelectedClass(number);
  };

  //Changes category to see (smaller screens)
  const handleArrowClick = (side: string): void => {
    if (side === `L` && selectedClass === 0) return setSelectedClass(3);
    if (side === `L` && selectedClass > 0)
      return setSelectedClass(selectedClass - 1);
    if (side === `R` && selectedClass === 3) return setSelectedClass(0);
    if (side === `R` && selectedClass < 3)
      return setSelectedClass(selectedClass + 1);
  };

  //Maps if screen width is 768px or wider
  const carInfo = carDataArray.map((car, i) => {
    return (
      <div className="carDisplayFC" key={i}>
        <div>{car.category}</div>
        <div className="carImgBoxFC">
          <img src={car.img} alt="carImg" className="carImgFC" />
        </div>
        <div onClick={() => handleNav(i)} className="seeMoreFC">
          {translations.seeMore}
        </div>
      </div>
    );
  });

  //Maps if screen width is narrower than 768px
  const responsiveCarInfoMapped = carDataArray.map((car, i) => {
    if (i !== selectedClass) return;
    else
      return (
        <div className="respCarDisplayFC" key={i}>
          <div>{car.category}</div>
          <div className="respCarImgBoxFC">
            <IoIosArrowBack
              onClick={() => handleArrowClick(`L`)}
              className="arrowFC"
            />
            <img src={car.img} alt="Car image" className="respCarImgFC" />
            <IoIosArrowForward
              onClick={() => handleArrowClick(`R`)}
              className="arrowFC"
            />
          </div>
          <div onClick={() => handleNav(i)} className="seeMoreFC">
            {translations.seeMore}
          </div>
        </div>
      );
  });

  const responsiveCarInfo: JSX.Element = (
    <div className="respCarSelectionFC">
      <div className="arrowBoxFC">
        <IoIosArrowBack
          onClick={() => handleArrowClick(`L`)}
          className="arrowFC"
        />
      </div>
      {responsiveCarInfoMapped}
      <div className="arrowBoxFC">
        <IoIosArrowForward
          onClick={() => handleArrowClick(`R`)}
          className="arrowFC"
        />
      </div>
    </div>
  );

  return (
    <div className="fleetFC">
      <div className="titleFC">{translations.ourFleet}</div>
      <div className="carSelectionFC">
        {/* 
          if screen is 768px and wider carInfoMapped opens, 
          if screen is 768px and narrower responsiveCarInfo opens
        */}
        {carInfo}
        {responsiveCarInfo}
      </div>
    </div>
  );
}
