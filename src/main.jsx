// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Importa Provider desde react-redux
import { store } from "./redux/store"; // Importa tu store de Redux
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}> {/* Envuelve la aplicación con el Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
