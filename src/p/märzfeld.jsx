import React, { Component } from "react";
import Bahnhof from "../img/Bahnhof.jpeg";
import Deportation from "../img/DeportationMärzfeld.png";
import Manfred from "../img/Manfred-E-.jpeg";
import { ScalingImages, Image } from "./styledComponents";
class P8 extends Component {
  state = {};
  render() {
    return (
      <div className="w-5/6 m-auto max-w-5xl">
        <img src={Deportation} alt="" />
        <p>
          Der Bahnhof Märzfeld diente ursprünglich dazu, um die Massen an
          Besucher zu den Reichsparteitagen in Nürnberg zu empfangen. Im Laufe
          der NS-Zeit wurde dieser aber Tatort der Judendeportationen aus
          Nürnberg und dem Nürnberger Umland. Im Zeitraum zwischen 1941 und 1944
          wurden 1632 Juden aus Nürnberg deportiert und schließlich ermordet. Es
          gab nur 72 Überlebende.{" "}
        </p>
        <p>
          Die erste Deportation fand am 29. November 1941 statt. Dabei wurden
          1008 Juden, darunter 512 Nürnberger über Zwischenstationen vom Bahnhof
          Nürnberg-Märzfeld unter der Zugnummer „Da32“ nach Riga deportiert. Von
          den 512 überleben nur 16.{" "}
        </p>
        <p>
          Am 24. März 1942 wurden weitere 1000 Juden, darunter 426 Nürnberger
          nach Izbica bei Lubin deportiert. Keiner aus diesem Transport hat
          überlebt.
        </p>
        <p>
          Der letzte größere Transport fand am 10. September 1942 statt. Es
          umfasste wieder 1000 Personen und führte ins KZ Theresienstadt.{" "}
        </p>
        <p>
          Nach diesen 3 großen Transporten verblieben nur noch 345 Juden in
          Nürnberg. Diese wurden dann im Herbst 1942 nach Fürth verbannt, sodass
          Nürnberg, die Stadt der Reichsparteitage als „Judenfrei“ bezeichnet
          werden konnte.
        </p>
        <p>
          Den Juden, die zu den Konzentrationslagern deportiert wurden, wurde
          erzählt, dass sie umgesiedelt werden sollten, damit Unruhen vermieden
          wurden. Dies war der Grund, weshalb die sie Matratzen, Kochutensilien
          und Lebensmittel zum Bahnhof mittnehmen durften.{" "}
        </p>
        <p>
          Sie wurden von Gestapolastwägen von ihrer Wohnung abgeholt und nach
          Märzfeld gefahren. Dort wurden ihr ganzer Besitzt beschlagnahmt. Nach
          ca. 2 Tagen Warten wurden die Juden unter unmenschlichen Bedingungen
          per Zug in die jeweiligen KZ’s deportiert.
        </p>
        <ScalingImages>
          <Image src={Bahnhof} alt="" />
          <Image src={Manfred} alt="" />
        </ScalingImages>
        <p>
          Bilder: Wikipedia (Foto von Manfred-E-Fritsche, mef-presseservice)
        </p>
        <p>
          Heute verfällt der Bahnhof. Soll der Bahnhof als Ort der Erinnerung
          erhalten werden, oder weiter verfallen? Darüber hat die Stadt Nürnberg
          bislang keine Entscheidung getroffen.
        </p>
        <p>Patrick, Tom, Martin</p>
      </div>
    );
  }
}

export default P8;
