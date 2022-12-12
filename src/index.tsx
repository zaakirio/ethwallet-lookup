import React from "react";
import ReactDOM from "react-dom/client";
import { DataRender } from "./components/DataRender/DataRender";
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar/>
    <DataRender />
  </React.StrictMode>
);
