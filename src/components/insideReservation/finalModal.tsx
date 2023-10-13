import { useContext,Dispatch,
    SetStateAction, } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../../context/context";
import Translations from "../../data/translations";
import logo from "../../img/logo.png";
import { Translate } from "../../interfaces/interfaces";
import "../../style/pages/reservation.css";

function FinalModal(props: { setOpenFinalModal: Dispatch<SetStateAction<boolean>>}): JSX.Element {
  const { setReservation, setIsReservationPage } = useContext(AppContext);

  const translations: Translate = Translations();

  const handleClick = (): void => {
    props.setOpenFinalModal(false);
    setIsReservationPage(false)
    setReservation(null);
    //Removes overflow hidden when user goes to home page
    document.body.classList.remove(`overflow-hidden`);
  };

  return ReactDOM.createPortal(
    <div>
      <div className="modalBackgroundR">
        <div className="modalR">
          <img src={logo} alt="logo"></img>
          <div className="finalModalTitleR">{translations.thanks}</div>
          <div>
            <button onClick={handleClick} className="modalButtonYesR">
              {translations.goBack}
            </button>
          </div>
        </div>
      </div>
      ,
    </div>,
    document.querySelector(`.modal-container`)!
  );
}

export default FinalModal;
