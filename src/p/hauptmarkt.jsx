import React, { Component } from "react";
import Marktplatz from "../img/marktplatz.jpeg";
import Hero from "../img/Frauenkirche-verfremdet.png";
class P1 extends Component {
  state = {};
  render() {
    return (
      <div className="w-5/6 mx-auto max-w-5xl">
        <img src={Hero} alt="" className="w-5/6 m-auto pt-10 pb-10" />
        <h1>Hauptmarkt</h1>
        <p>
          Im ersten Jahrtausend n. Chr. war das Zusammenleben zwischen Christen
          und Juden meist ohne Probleme. Ende des 11. Jahrhunderts trat die
          große Verfolgung der jüdischen Minderheit mit Beginn der Kreuzzüge in
          Europa ein.
        </p>
        <p>
          Viele Juden flohen wegen Verfolgung im Rheinland 1146 nach Nürnberg.
          König Konrad III. gewährte ihnen Schutz und gab ihnen das
          Siedlungsgebiet im Pegnitzgrund. Wegen Überschwemmungsgefahr wurden
          die Häuser auf Holzpfähle, die in den Boden getrieben wurden, gebaut.
          Sie mussten an den ungesundesten Plätzen wohnen und wurden von
          Stechmücken geplagt. Die Synagoge stand an Stelle der heutigen
          Frauenkirche, umringt vom Getto.{" "}
        </p>
        <p>
          Viele Juden flohen wegen Verfolgung im Rheinland 1146 nach Nürnberg.
          König Konrad III. gewährte ihnen Schutz und gab ihnen das
          Siedlungsgebiet im Pegnitzgrund. Wegen Überschwemmungsgefahr wurden
          die Häuser auf Holzpfähle, die in den Boden getrieben wurden, gebaut.
          Sie mussten an den ungesundesten Plätzen wohnen und wurden von
          Stechmücken geplagt. Die Synagoge stand an Stelle der heutigen
          Frauenkirche, umringt vom Getto.{" "}
        </p>
        <p>
          Als man beide Städte zu einer zusammenfasste, standen die jüdische
          Siedlung und die Synagoge genau in der neuen Stadtmitte. Der Rat der
          Stadt holte die Genehmigung des Kaisers Karls IV. ein, dass das Getto
          abgebrochen werden durfte. Zwei Marktplätze (der Haupt- und der
          Obstmarkt) sollten an seiner Stelle errichtet werden und der Jungfrau
          Maria zu Ehren, an die Stelle der Synagoge eine Kirche, die
          Frauenkirche, erbaut werden. Viele Juden hatten aus Sicherheitsgründen
          die Stadt bereits verlassen.{" "}
        </p>
        <p>
          Zunächst bemühte sich der Rat, Gewalttaten zu verhindern. Doch das
          Volk plünderte die jüdischen Häuser und bildete Spaliere und verhöhnte
          und verprügelte die Juden, die zum Tor hinausgezwungen wurden. Am Ende
          wurden etwa 500 von ihnen beraubt, gefesselt und zum heutigen Maxfeld
          hinausgetrieben. Dort trug man Holz für ein riesiges Feuer zusammen
          und verbrannte sie. Lange-noch hieß die Stelle Judenbühl. Trotzdem
          ließen sich wieder Juden in Nürnberg nieder, bis sie 1498 erneut
          vertrieben wurden.
        </p>
        <img src={Marktplatz} alt="" />
        <p>Bild: Wikipedia</p>
        <p>
          Judenfeindliche Bauplastik einer "Judensau" am Ostchor der
          Sebalduskirche in Nürnberg. Dargestellt ist eine Sau, an deren Zitzen
          zwei Juden saugen (bei der linken Figur ist ein jüdischer Spitzhut
          erkennbar), während ein Dritter der Sau eine Fressschale vor den Mund
          hält und ein Vierter die Exkremente der Sau mit einem Topf auffängt
          (im Bild nicht sichtbar). Die Plastik stammt aus der Zeit um 1380 und
          befindet sich an einem Stützpfeiler am Ostchor (Rathausplatz) in ca.
          sieben Metern Höhe. Foto von Alexander Altenhof, Wikipedia.
        </p>
        <p>
          Auf diesem Bild kann man Juden an einer Sau nuckeln sehen. Es ist
          nicht in Ordnung, solch eine Skulptur an der Sebalduskirche hängen
          zulassen, wenn in der Kirche Leute beten und außen eine Skulptur mit
          solch einer Bedeutung hängt, die eine andere Religion mobbt.
        </p>
        <p>
          In anderen Städten gibt es ähnliche Skulpturen und man hat dort
          teilweise Schilder angebracht, die erklären, dass diese Darstellungen
          problematisch sind und man sich dafür entschuldigt.
        </p>
        <p>
          Manche Mitglieder der jüdischen Gemeinde finden, eine „Judensau“ sei
          besser in einem Museum aufgehoben, als an der Wand einer Kirche und
          solle deshalb entfernt werden.
        </p>
      </div>
    );
  }
}

export default P1;
