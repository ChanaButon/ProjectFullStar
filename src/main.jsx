import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./Router.jsx";
import TanstackProv_ider from "./QueryClientProv_ider.jsx";

const root = document.getElementBy_id("root");

createRoot(root).render(
  <TanstackProv_ider>
    <Router />
  </TanstackProv_ider>,
);
