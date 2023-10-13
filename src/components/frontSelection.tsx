import { useState, useContext } from "react";
import { AppContext } from "../context/context";
import { CorrectTime } from "../logic/correctTime";
import { ReservationDetails, Translate } from "../interfaces/interfaces";
import Translations from "../data/translations";
import ReservationDates from "./insideFrontSelection/reservationDates";
import ReservationLocations from "./insideFrontSelection/reservationLocations";
import logo from "../img/logo.png";

export default function FrontSelection(): JSX.Element {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [warning, setWarning] = useState<string>(``);

  const translations: Translate = Translations();

  const { language, setReservation, setIsReservationPage } =
    useContext(AppContext);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const form: HTMLFormElement = document.querySelector(`.form`)!;

    //Gets data from form
    const formData: FormData = new FormData(form);

    let pickUpTime: Date;
    let dropOffTime: Date;

    //Corrects selected dates (different for english and croatian language)
    if (language === `en`) {
      pickUpTime = new Date(formData.get("pickUpTime") as string);
      dropOffTime = new Date(formData.get("dropOffTime") as string);
    } else {
      pickUpTime = CorrectTime(formData.get("pickUpTime") as string);
      dropOffTime = CorrectTime(formData.get("dropOffTime") as string);
    }

    //Sets reservation object
    const reservation: ReservationDetails = {
      pickUpTime,
      dropOffTime,
      pickUpLocation: formData.get("pickUpLocation") as string,
      dropOffLocation: formData.get("dropOffLocation") as string,
      addPackage: false,
      addDriver: false,
      crossBorder: false,
      category: 2,
    };

    //Calculates 365 days from today, reservations are not available more than one year in advance
    const yearFromNow: Date = new Date();
    yearFromNow.setDate(yearFromNow.getDate() + 365);

    // Checks if pick-up and drop-off locations are selected
    if (!reservation.pickUpLocation)
      return setWarning(`${translations.pickUpError}`);
    if (!reservation.dropOffLocation)
      return setWarning(`${translations.dropOffError}`);
    //Checks if selected drop-off time is after pick-up time
    if (reservation.pickUpTime >= reservation.dropOffTime)
      return setWarning(`${translations.timelineError}`);
    //Checks if reservations are too much in future (after 365 days)
    if (
      reservation.pickUpTime >= yearFromNow ||
      reservation.dropOffTime >= yearFromNow
    )
      return setWarning(`${translations.afterYear}`);

    //Adds first info about reservation (final info will be added later, after reservation page)
    setReservation(reservation);
    setIsReservationPage(true);
    setWarning(``);
  };

  return (
    <div className="selectionFr">
      <div className="selectionTitleFr">
        <img src={logo} alt="logo" className="selectionLogoFr" />
        <div>
          <div>Oldtimer</div>
          <div>Rent-a-car</div>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formWarningFr">{warning}</div>
        <div className="formRowFr">
          {ReservationLocations(`pickUpLocation`)}
        </div>
        <div className="formRowFr">
          {ReservationLocations(`dropOffLocation`)}
        </div>
        <div className="formRowFr">
          {ReservationDates(`pickUpTime`, startDate, endDate, setStartDate)}
        </div>
        <div className="formRowFr">
          {ReservationDates(`dropOffTime`, startDate, endDate, setEndDate)}
        </div>
        <div className="selectionBtnBoxFr">
          <button type="submit" className="selectionBtnFr">
            {translations.showCars}
          </button>
        </div>
      </form>
    </div>
  );
}
