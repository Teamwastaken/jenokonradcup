import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navigation from "./Navigation";
import Map from "./components/map";
import About from "./p/about";
import Home from "./p/home";
import P1 from "./p/hauptmarkt";
import P2 from "./p/hansSachsPlatz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map/*" element={<Map />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/map/hauptmarkt" element={<P1 />} />
        <Route path="/map/hanssachsplatz" element={<P2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
