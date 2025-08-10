import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Landingpage } from "./screens/Landingpage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Landingpage />
  </StrictMode>,
);
