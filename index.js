import React from "react";
import App from "./src/App";
import "./src/App.css"
// Import createRoot from react-dom/client
import { createRoot } from "react-dom/client";


// Get the root element
const container = document.getElementById("root");

// Create a root and render the app
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
