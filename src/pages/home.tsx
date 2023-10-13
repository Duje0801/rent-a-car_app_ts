import { useContext } from "react";
import { AppContext } from "../context/context";
import Navigation from "../components/navigation";
import Front from "../components/front";
import FleetComponent from "../components/fleetComponent";
import Logo1 from "../components/logo1";
import ExploreComponent from "../components/explore";
import Logo2 from "../components/logo2";
import TestimonialsComponent from "../components/testimotionalsComponent";
import Footer from "../components/footer";
import Reservation from "./reservation";
import Chat from "../components/chat";
import "../style/index.css";

export default function Home(): JSX.Element {
  const { isReservationPage } = useContext(AppContext);

  if (isReservationPage) return <Reservation />;
  else
    return (
      <>
        <div>
          <Navigation />
          <Front />
          <FleetComponent />
          <Logo1 />
          <ExploreComponent />
          <Logo2 />
          <TestimonialsComponent />
          <Footer />
        </div>
        <Chat />
      </>
    );
}
