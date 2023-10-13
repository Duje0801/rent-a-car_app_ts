import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import FleetPage from "./pages/fleetPage";
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
      path: "*",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
