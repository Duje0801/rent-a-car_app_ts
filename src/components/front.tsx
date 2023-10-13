import Navigation from "./navigation";
import FrontSelection from "./frontSelection";
import frontImg from "../img/frontImg.jpg";
import "../style/components/front.css";

export default function Front(): JSX.Element {
  return (
    <div className="frontFr">
      <Navigation />
      <img src={frontImg} className="frontImageFr" alt="Front image" />
      <FrontSelection />
    </div>
  );
}
