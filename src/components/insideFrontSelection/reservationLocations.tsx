import LocationsData from "../../data/locationsData";
import Translations from "../../data/translations";
import { Translate, Cities } from "../../interfaces/interfaces";

export default function ReservationLocations(pickUpDropOf: string): JSX.Element {
  const cities: Cities[] = LocationsData();
  const translations: Translate = Translations();

  const mappingCities = cities.map((city, i) => {
    return (
      <option value={city.name} key={i}>
        {city.name}
      </option>
    );
  });

  return (
    <div className="locationsFr">
      <div>
        <label>
          {pickUpDropOf === `pickUpLocation`
            ? translations.pickUpLocation
            : translations.dropOffLocation}
          :{" "}
        </label>
      </div>
      <div>
        <select className="pickUpDropOffLocationFr" name={pickUpDropOf}>
          <option value="">---</option>
          {mappingCities}
        </select>
      </div>
    </div>
  );
}