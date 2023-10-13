import { Dispatch, SetStateAction, useContext } from "react";
import { AppContext } from "../../context/context";
import Translations from "../../data/translations";
import { Translate } from "../../interfaces/interfaces";

//Imports from Datepicker library
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import hr from "date-fns/locale/hr";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReservationDates(
  pickUpDropOff: string,
  startDate: Date,
  endDate: Date,
  setStartEndDate: Dispatch<SetStateAction<Date>>
): JSX.Element {
  const { language } = useContext(AppContext);

  const translations: Translate = Translations();

  //Calls datepicker in Croatian language
  registerLocale("hr", hr);

  //User can't select date or time in past
  const filterPassedTime = (time: Date): boolean => {
    const currentDate: Date = new Date();
    const selectedDate: Date = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <label>
      {translations.pickupDateAndTime}:
      <div>
        <DatePicker
          onKeyDown={(e) => e.preventDefault()}
          portalId="root-portal"
          name={pickUpDropOff}
          className="datePickerFr"
          popperClassName="popDatePickerFr"
          selected={pickUpDropOff === `pickUpTime` ? startDate : endDate}
          onChange={(date: Date): void => setStartEndDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={setHours(setMinutes(new Date(), 30), 19)}
          showTimeSelect
          timeIntervals={30}
          timeFormat="p"
          dateFormat="Pp"
          timeInputLabel="Time:"
          filterTime={filterPassedTime}
          locale={language === `en` ? `` : `hr`}
        />
      </div>
    </label>
  );
}