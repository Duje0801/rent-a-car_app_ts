import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import FleetPage from "./pages/fleetPage";
import Locations from "./pages/locations";
import AboutUs from "./pages/aboutUs";
import FAQ from "./pages/FAQ";
import { routes } from "./routes/routes";

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <Home />,
    },
    {
      path: routes.fleet,
      element: <FleetPage />,
    },
    {
      path: routes.locations,
      element: <Locations />,
    },
    {
      path: routes.aboutUs,
      element: <AboutUs />,
    },
    {
      path: routes.FAQ,
      element: <FAQ />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
