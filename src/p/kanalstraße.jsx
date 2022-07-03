import React, { Component } from "react";
import Hero from "../img/ObereKanalstrasse.jpeg";
class P4 extends Component {
  state = {};
  render() {
    return (
      <div className="w-5/6 mx-auto max-w-5xl">
        <img src={Hero} alt="" />
        <p>
          Bild:{" "}
          <a
            className="text-blue-700"
            target="_blanc"
            href="https://www.google.com/maps/@49.4476194,11.0579742,3a,90y,121.39h,78.32t/data=!3m7!1e1!3m5!1s4KYPH5P6Noei0bx44Nb34w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D4KYPH5P6Noei0bx44Nb34w%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D108.289345%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656"
          >
            Google
          </a>
        </p>
        <p>
          Die im Jahre 1920 von Georg Levy gegründete Blechspielwarenfabrik in
          der Oberen Kanalstraße 25 wurde bereits ab 1934 als jüdische Volks-
          und Berufsschule genutzt. In Folge der hohen Anzahl der Mitglieder der
          Schulen wurde sogar eine Turnhalle eingerichtet. Der Vorsitzende der
          jüdischen Gemeinde in Nürnberg Ludwig Rosenzweig bezeichnete die
          Einrichtung als Asyl für jüdische Kinder, welche aus den allgemeinen
          Bildungseinrichtungen verbannt wurden.{" "}
        </p>
        <p>
          Da die Synagoge am Hans-Sachs-Platz zerstört wurde, wurden die
          Gottesdienste in die Fabrik verlegt. Auch Veranstaltungen des
          jüdischen Kulturbundes fanden nach und nach dort statt. An Vorträgen
          informierte man beispielsweise über eine Auswanderung nach Palästina,
          in den Lehrwerkstätten kümmerte man sich sogar um die berufliche Aus-
          und Weiterbildung der Auswanderungswilligen. Nach den ersten
          Deportationen im Jahre 1942 verwertete die Finanzverwaltung das
          Vermögen der Gemeinde. Dies brachte insgesamt etwa 6000 R.M. ein. Die
          Werkstatteinrichtung brachte man ins Ghetto Theresienstadt.
        </p>
        <p>Giuliano, Simon, Benedikt</p>
      </div>
    );
  }
}

export default P4;
