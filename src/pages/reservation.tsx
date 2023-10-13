import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import carData from "../data/carData";
import Translations from "../data/translations";
import Packages from "../components/insideReservation/packages";
import { Cars, Translate } from "../interfaces/interfaces";
import logo from "../img/logo.png";
import ConfirmationModal from "../components/insideReservation/confirmationModal";
import FinalModal from "../components/insideReservation/finalModal";
import { routes } from "../routes/routes";
import "../style/pages/reservation.css";

export default function Reservation(): JSX.Element {
  const [fullPrice, setFullPrice] = useState<number>(0);
  const [diffLocation, setDiffLocation] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openFinalModal, setOpenFinalModal] = useState<boolean>(false);

  //Scrolls to top of the reservation page at page opening
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const {
    language,
    reservation,
    setReservation,
    selectedClass,
    setSelectedClass,
    setIsReservationPage,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const carList: Cars[] = carData();
  const translations: Translate = Translations();

  //Gets code for packages
  const packages: JSX.Element = Packages();

  //Gets how many days selected car will be rented
  const differenceDays: number = Math.ceil(
    (Number(reservation!.dropOffTime) - Number(reservation!.pickUpTime)) /
      (1000 * 60 * 60 * 24)
  );

  //Adds packages to full price every time one of the packages is selected
  useEffect(() => {
    let fullPriceCalc: number = carList[selectedClass].price * differenceDays;
    if (reservation!.pickUpLocation !== reservation!.dropOffLocation) {
      fullPriceCalc = Number((fullPriceCalc * 1.25).toFixed(2));
      setDiffLocation(true);
    }
    if (reservation!.addPackage)
      fullPriceCalc += (selectedClass + 1) * 25 * differenceDays;
    if (reservation!.addDriver) fullPriceCalc += 50;
    if (reservation!.crossBorder) fullPriceCalc += 100;

    setFullPrice(fullPriceCalc);
  }, [selectedClass, reservation]);

  //Changes if modal is open or not
  useEffect(() => {
    if (openModal || openFinalModal) {
      //Scroll to the top of the page when modals are open
      document.body.classList.add(`overflow-hidden`);
    } else document.body.classList.remove(`overflow-hidden`);
  }, [openModal, openFinalModal]);

  const handleSelectClass = (numb: number): void => {
    setReservation({ ...reservation!, category: numb });
    setSelectedClass(numb);
  };

  const handleBackClick = (): void => {
    setReservation(null);
    setIsReservationPage(false);
    navigate(routes.home);
  };

  const handleConfirm = (): void => {
    setOpenModal(true);
  };

  const mappingCategories = carList.map((car, i) => {
    //Check is class selected, if true, give border to selected class
    const catShowClass =
      selectedClass === i
        ? "categoryShowR categoryShowBorderR"
        : "categoryShowR";
    return (
      <div
        onClick={() => handleSelectClass(i)}
        className={catShowClass}
        key={i}
      >
        <div>{car.category}</div>
        <div className="categoryShowBoxImg">
          <img src={car.img} alt="car" className="categoryShowImg" />
        </div>
        <div>
          {translations.brand}: {car.make}
        </div>
        <div>Model: {car.model}</div>
        <div>
          {translations.power}: {car.power} {language === `en` ? `hp` : `KS`}
        </div>
        <div>
          {translations.engine}: {car.engine}
        </div>
        <div>
          {translations.year}: {car.year}.
        </div>
      </div>
    );
  });

  return (
    <div className="reservationR">
      <div className="titleR">
        <div onClick={handleBackClick} className="backTitleR">
          <FaArrowLeft /> {translations.back}
        </div>
        <div className="titleLogoTextR">
          <img src={logo} className="logoR" alt="logo" />
          Oldtimer Rent-a-car
        </div>
      </div>

      <div className="gridR">
        {mappingCategories}
        {packages}
        <div className="priceConfirmR">
          <div className="fullPriceTextR">
            {translations.fullPrice}:{" "}
            <span className="fullPriceNumR">{fullPrice}€</span>
          </div>
          <button onClick={handleConfirm} className="confirmR">
            {translations.confirm}
          </button>
          {diffLocation && (
            <div className="diffLocationR">{translations.higherPrice}</div>
          )}
        </div>
      </div>

      {openModal && (
        <ConfirmationModal
          fullPrice={fullPrice}
          setOpenModal={setOpenModal}
          setOpenFinalModal={setOpenFinalModal}
        />
      )}
      {openFinalModal && <FinalModal setOpenFinalModal={setOpenFinalModal} />}
    </div>
  );
}
