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
import P3 from "./p/essenweinstarsse";
import P4 from "./p/kanalstraße";
import P5 from "./p/judenhäuser";

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
        <Route path="/map/essenweinstrasse" element={<P3 />} />
        <Route path="/map/kanalstrasse" element={<P4 />} />
        <Route path="/map/judenhaeuser" element={<P5 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
