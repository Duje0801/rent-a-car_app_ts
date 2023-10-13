import logo from "../img/logo.png";
import "../style/components/logo.css";

export default function Logo1(): JSX.Element {
  //First company logo that appears between fleet and explore
  //Only shows on screens 1024px and wider

  return (
    <div className="logo1Break">
      <img src={logo} alt="logo" className="logoBreakImg"></img>
    </div>
  );
}
