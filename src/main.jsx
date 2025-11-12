import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GloabalContextProvider from "./store/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GloabalContextProvider>
      <App />
    </GloabalContextProvider>
  </StrictMode>
);
