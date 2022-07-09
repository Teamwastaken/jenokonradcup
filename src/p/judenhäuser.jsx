import React, { Component } from "react";
import { ScalingImages, Images } from "./styledComponents";
import Hero from "../img/Knauerstrasse27.avif";
import Tafel from "../img/TafelJudenhäuser.avif";
import Außen from "../img/JudenhäuserAußen.avif";
import Innen from "../img/JudenhäuserInnen.avif";
class P5 extends Component {
  state = {};
  render() {
    return (
      <div className="w-5/6 mx-auto max-w-5xl">
        <img src={Hero} alt="" />
        <h1>Die Judenhäuser in Nürnberg</h1>
        <p>
          Am 30. April 1939 schufen die Nationalsozialisten mit dem „Gesetz über
          die Mietverhältnisse der Juden“ die Grundlage für die Konzentration
          der verbliebenen jüdischen Deutschen, in sogenannte „Judenhäuser.“
        </p>
        <p>
          Das NS- Regime gewann dadurch weiteren Wohnraum für seine Anhänger und
          es wurde somit ein vereinfachter Ablauf der im Spätherbst beginnenden
          Deportationen ermöglicht.{" "}
        </p>
        <p>
          In Nürnberg gab es in den Jahren 1941 und 1942 insgesamt 52
          Judenhäuser, wovon 13 sich im Stadtteil Gostenhof befanden.{" "}
        </p>
        <p>
          Die Judenhäuser wurden entweder in ehemaligen Einrichtungen der
          israelitischen Kultusgemeinde oder in arisiertend(d.h.
          zwangsenteigneten) Privathäusern untergebracht.
        </p>
        <p>
          Eines der größten Judenhäuser befand sich in der Knauerstraße 27 und
          es war 1941 und 1942 für mindestens 156 Menschen jüdischen Glaubens
          aus Nürnberg die letzte Station vor ihrer Deportation in die
          Konzentrationslager Izbica, Krasnicyn, Riga und Theresienstadt. Fast
          alle Juden wurden in diesen Konzentrationslagern ermordet.{" "}
        </p>
        <p>
          Heutzutage werden die damaligen Judenhäuser als normale Wohnhäuser
          genutzt und es erinnert nur noch eine kleine Gedenktafel daran.{" "}
        </p>
        <ScalingImages>
          <Images src={Tafel} alt="" />
          <Images src={Innen} alt="" />
          <Images src={Außen} alt="" />
        </ScalingImages>
        <p>Julia Valerie</p>
      </div>
    );
  }
}

export default P5;
