import React, { Component } from "react";
import Hero from "../img/Obere Kanalstraße.jpeg";
class P4 extends Component {
  state = {};
  render() {
    return (
      <div className="w-5/6 mx-auto max-w-5xl">
        <img src={Hero} alt="" />
        <p>
          Die im Jahre 1920 von Georg Levy gegründete Blechspielwarenfabrik in
          der Oberen Kanalstraße 25 wurde bereits ab 1934 als jüdische Volks-
          und Berufsschule genutzt. In Folge der hohen Anzahl der Mitglieder der
          Schulen wurde sogar eine Turnhalle eingerichtet. Der Vorsitzende der
          jüdischen Gemeinde in Nürnberg, Ludwig Rosenzweig, bezeichnete die
          Einrichtung als Asyl für jüdische Kinder, welche aus den allgemeinen
          Bildungseinrichtungen verbannt wurden.
        </p>
        <p>
          Da die Synagoge am Hans-Sachs-Platz zerstört wurde, wurden die
          Gottesdienste in die Fabrik verlegt. Auch Veranstaltungen des
          jüdischen Kulturbundes fanden nach und nach dort statt. An Vorträgen
          informierte man beispielsweise über eine Auswanderung nach Palästina,
          in den Lehrwerkstätten kümmerte man sich sogar um die berufliche Aus-
          und Weiterbildung der Auswanderungswilligen.
        </p>
        <p>
          Nach den ersten Deportationen im Jahre 1942 verwertete die
          Finanzverwaltung das Vermögen der Gemeinde. Dies brachte insgesamt
          etwa 6000 R.M. ein. Die Werkstatteinrichtung brachte man ins Ghetto
          Theresienstadt.
        </p>
        <p>Giuliano, Simon, Benedikt</p>
      </div>
    );
  }
}

export default P4;
