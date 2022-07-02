import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./p/about";
import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/map";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/map/*" element={<Map />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
