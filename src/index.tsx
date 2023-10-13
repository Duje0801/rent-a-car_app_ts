import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./context/context";
import App from "./App";
import "./style/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
