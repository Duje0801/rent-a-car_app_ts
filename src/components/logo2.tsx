import logo from "../img/logo.png";
import "../style/components/logo.css";

export default function Logo2(): JSX.Element {
  //Second company logo that appears between explore and testimonials
  //This logo shows on all screen sizes (on smaller screens between fleet and testimonials)
  return (
    <div className="logo2Break">
      <img src={logo} alt="logo" className="logoBreakImg"></img>
    </div>
  );
}
