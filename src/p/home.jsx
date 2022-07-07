import React, { Component } from "react";
import { Link } from "react-router-dom";

import Synagoge from "../img/bild-startseite.avif";
import JenoKonradCup from "../img/Jenoe-Konrad-Cup.avif";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="map">
          <img className="w-5/6 m-auto p-10" src={Synagoge} alt="" />
        </Link>
        <p className="text-center w-5/6 m-auto pb-10">
          Klicken Sie auf das Bild um zur Stadtkarte mit Orten der jüdischen
          Geschichte zu gelangen.
        </p>
        <p className="text-center w-5/6 m-auto ">
          Ein Projekt der Klasse 9D des des Sigmund Schuckert Gymnasiums,
          Nürnberg Eibach für den Jenö Konrad-Cup 2022
        </p>
        <img className="w-5/6 m-auto p-10" src={JenoKonradCup} alt="" />
      </div>
    );
  }
}

export default Home;
