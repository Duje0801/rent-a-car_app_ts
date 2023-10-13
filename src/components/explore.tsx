import ExploreData from "../data/exploreData";
import { Explore, Translate } from "../interfaces/interfaces";
import Translations from "../data/translations";
import "../style/components/explore.css";

export default function ExploreComponent(): JSX.Element {
  //Explore is visible only if screen is 1024px or wider

  const explore: Explore[] = ExploreData();
  const translations: Translate = Translations();

  const mappedExplore = explore.map((ex, i) => {
    return (
      <div className="exploreBoxE" key={i}>
        <img src={ex.img} alt="exploreImage" className="exploreImgE"></img>
        <div className="exploreTextE">{ex.text}</div>
      </div>
    );
  });

  return (
    <div className="exploreE">
      <div className="titleE">{translations.exploreTitle}</div>
      <div className="exploreDivsE">{mappedExplore}</div>
    </div>
  );
}
