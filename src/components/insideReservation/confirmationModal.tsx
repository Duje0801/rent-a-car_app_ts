import { Dispatch, SetStateAction, useContext } from "react";
import { AppContext } from "../../context/context";
import ReactDOM from "react-dom";
import Translations from "../../data/translations";
import GetTimeInString from "../../logic/getTimeInString";
import GetCategoryString from "../../logic/getCategoryString";
import { Translate } from "../../interfaces/interfaces";

export default function ConfirmationModal(props: {
  fullPrice: number;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setOpenFinalModal: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const { reservation } = useContext(AppContext);

  const translations: Translate = Translations();

  let pickUp: string = GetTimeInString(reservation!.pickUpTime);
  let dropOff: string = GetTimeInString(reservation!.dropOffTime);
  let category: string = GetCategoryString(reservation!.category);

  const handleClickYes = (): void => {
    props.setOpenModal(false);
    props.setOpenFinalModal(true);
  };

  const handleClickNo = (): void => {
    props.setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <div>
      <div className="modalBackgroundR">
        <div className="modalR">
          <div>{translations.checkReservation}</div>
          <div>
            <span className="descriptionR">{translations.pickUpLocation}:</span>{" "}
            {reservation!.pickUpLocation}
          </div>
          <div>
            <span className="descriptionR">
              {translations.pickupDateAndTime}:
            </span>{" "}
            {pickUp}
          </div>
          <div>
            <span className="descriptionR">
              {translations.dropOffLocation}:
            </span>{" "}
            {reservation!.dropOffLocation}
          </div>
          <div>
            <span className="descriptionR">
              {translations.dropofDateAndTime}:
            </span>{" "}
            {dropOff}
          </div>
          <div>
            <span className="descriptionR">{translations.class}:</span>{" "}
            {category}
          </div>
          <div>
            <span className="descriptionR">
              {translations.additionalPackage}:
            </span>{" "}
            {reservation!.addPackage ? translations.yes : translations.no}
          </div>
          <div>
            <span className="descriptionR">{translations.addDriver}:</span>{" "}
            {reservation!.addDriver ? translations.yes : translations.no}
          </div>
          <div>
            <span className="descriptionR">{translations.crossBorder}:</span>{" "}
            {reservation!.crossBorder ? translations.yes : translations.no}
          </div>
          <div>
            <span className="descriptionR">{translations.fullPrice}:</span>{" "}
            <span className="fullPriceR">{props.fullPrice}€</span>
          </div>
          <div>
            <button onClick={handleClickYes} className="modalButtonYesR">
              {translations.yesConfirm}
            </button>
            <button onClick={handleClickNo} className="modalButtonNoR">
              {translations.no}
            </button>
          </div>
        </div>
      </div>
      ,
    </div>,
    document.querySelector<HTMLDivElement>(`.modal-container`)!
  );
}
