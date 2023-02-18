import React from "react";
import ReactDOM from "react-dom/client";
import DataCard from "./components/DataCard/DataCard";
import { Searchbar } from "./components/Searchbar/Searchbar";
import Navbar from "./components/Navbar/Navbar";
import './index.css'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Searchbar/>
    <DataCard/>
  </React.StrictMode>
);
