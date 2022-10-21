import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";


const container = document.getElementById("app-root");
if (!container) {
  throw new Error("Could not get the root element from DOM");
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
