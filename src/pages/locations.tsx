import { useState } from "react";
import Navigation from "../components/navigation";
import LocationsData from "../data/locationsData";
import Translations from "../data/translations";
import { Cities, Translate } from "../interfaces/interfaces";
import frontImg from "../img/frontImg.jpg";
import "../style/pages/locations.css";

export default function Locations(): JSX.Element {
  const [displayedLocation, setDisplayedLocation] =
    useState<string>(`Dubrovnik`);

  const locationsList: Cities[] = LocationsData();
  const translation: Translate = Translations();

  const mappedLocationNames = locationsList.map((location, i) => {
    return (
      <li
        onClick={() => setDisplayedLocation(location.name)}
        className="locationTitleL"
        key={i}
      >
        {location.name}
      </li>
    );
  });

  const locationToDisplay = locationsList.map((location, i) => {
    if (location.name === displayedLocation)
      return (
        <div className="locationToDisplayL" key={i}>
          <div className="locationTitleL">{location.name}</div>
          <div className="locationAdressL">{location.adress}</div>
          <div className="locationLinkL">{location.link}</div>
        </div>
      );
    else return;
  });

  return (
    <div>
      <div className="frontL">
        <Navigation />
        <img src={frontImg} alt="front image" className="frontImageL" />
        <div className="locationsL">
          <div>{translation.locations}</div>
          <div className="locationsDisplayL">
            <ul className="locationsListL">{mappedLocationNames}</ul>
            <div>{locationToDisplay}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
