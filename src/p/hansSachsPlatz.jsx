import React, { Component } from "react";
import "../index.css";
import { ScalingImages, Image } from "./styledComponents";
import Synagoge from "../img/bild-startseite.jpeg";
import SynagogeVorne from "../img/synagogeVorne.jpeg";
import SynagogeInnen from "../img/SynagogeInnen.jpeg";
import Judenstein from "../img/Judenstain.png";
import Gedenkstein from "../img/Gedenkstein.jpg";
import LeoKatzenberger from "../img/LeoKatzenberger.jpeg";

class P2 extends Component {
  state = {};
  render() {
    return (
      <div className="w-5/6 mx-auto max-w-5xl">
        <h1 className="  pb-10">
          Die Nürnberger Synagoge am Hans – Sachs – Platz
        </h1>
        <img src={Synagoge} alt="" />
        <h2> Der Bau der Synagoge</h2>
        <p>
          Nachdem 1849 ca. 2000 Juden in Nürnberg lebten, kam der Wunsch nach
          einem eigenen Gotteshaus auf. So kam es also, dass der damals bekannte
          Architekt Adolf Wolff die Synagoge mit fast quadratischem Grundriss,
          einer Kuppel auf hohem Tambour und dem Eindruck einer
          Doppelturmfassade im maurischen Stil(der orientakischen Gebäuden
          ähnelte) plante.{" "}
        </p>
        <p>
          Nach der Grundsteinlegung im März 1870 begann der vierjährige Bau am
          Pegnitzufer bei der Spitalbrücke. Am 8. September war es dann so weit
          und die Synagoge wurde zeitgleich mit der Synagoge in Paris feierlich
          mit staatlichen und kirchlichen Vertretern eingeweiht.
        </p>
        <p>
          Die Gemeinde hatte 300 Familien als Mitglieder und die Synagoge
          enthielt 546 nummerierte Männer- und 389 nummerierte Frauensitze.
          Betrat man die Synagoge, so viel einem sofort die Kuppel auf, durch
          die das Licht herein fiel. (Die Seitenkuppeln waren von innen nicht
          ersichtlich).
        </p>
        <ScalingImages>
          <Image src={SynagogeVorne} alt="" />
          <Image src={SynagogeInnen} alt="" />
        </ScalingImages>
        <p>Bilder Wikipedia</p>
        <h2>Die Zerstörung der Synagoge</h2>
        <p>
          {" "}
          Am jüdischen Neujahrsfest (Rosch Haschana) 1934 demonstrierten 300 bis
          400 SA-Leute vor der Synagoge. Nachdem die Gestapo im März den
          Gemeindevorstand über den geplanten Abriss informiert hatte, forderten
          sie im Juli die formelle Zustimmung der Gemeinde. Diese wurde jedoch
          trotz der damit verknüpften Gefährdung der Vorstandsmitglieder
          verweigert. Für den Beginn des Abbruchs wählte der „Frankenführer“
          Julius Streicher bewusst den 10.08.1938, das Datum von Tischa beAw,
          einem jüdischen Trauertag, an dem die beiden Tempel in Jerusalem (im
          Jahr 587 v.Chr. und dem Jahr 70 n.Chr.) zerstört wurden. Da der
          Abbruch wegen des Reichparteitages mehrmals unterbrochen wurde,
          verschob sich der Abschluss des Abriss bis zum 27. September 1938. An
          diesem Tag fanden sich Zehntausende ein, um das Geschehen zu
          verfolgen.
        </p>{" "}
        <img src={Judenstein} alt="" />{" "}
        <p>
          Zuvor konnte die Gemeinde mit Hilfe von Fritz Frisch, einem
          nichtjüdischen Baumeister den 500 Jahre alten „Judenstein“ – der
          letzte Überrest der mittelalterlichen Nürnberger Synagoge – retten und
          später auf dem jüdischen Friedhof vergraben. Frisch wurde aus der
          NSDAP ausgeschlossen und wegen "Charakterlosigkeit" öffentlich
          gebrandmarkt.
        </p>
        <h2> Die Gedenkstätte</h2>
        <p>
          Seit Rosch Haschana 1987 ist der „Judenstein“ in der neuen Synagoge
          der Kultusgemeinde (Arno-Hamburger-Str). Zwei Tafeln weisen mit
          folgenden Texten auf seine Geschichte hin. "Der 'Judenstein'. Ein
          Wahrzeichen aus den Tagen vor der Vertreibung der Juden 1499. Von der
          Israelitischen Kultusgemeinde erworben und aufgestellt 1909. - Eine
          Zeit kommt, da Steine verworfen und wieder eine Zeit, da Steine
          gesammelt werden" und "Gerettet aus den 1499 und 1938 zerstörten
          Nürnberger Synagogen. Heimgekehrt 1987.- Siehe, dieser Stein soll
          unter euch Zeugnis sein, dass ihr nicht verleugnen sollt euren Gott"
        </p>
        <img src={Gedenkstein} alt="" /> Das Grundstück der Synagoge blieb nach
        1945 zunächst ein Grünstreifen. Im Zug des Wiederaufbaus der Innenstadt
        wurde an der Stelle später ein Wohnhaus erbaut. Erst seit 1971 befindet
        sich am Platz der ehemaligen Synagoge eine Gedenkstätte. Im August 1988,
        40 Jahre nach der Zerstörung der Hauptsynagoge, ließ die Stadt gegenüber
        dem Hans-Sachs-Platz einen Gedenkstein mit Kupferplatte setzen (siehe
        Foto). 2001 ist eine zusätzliche Gedenktafel an den 1942 zum Tode
        verurteilten letzten Vorsitzenden der Israelitischen Kultusgemeinde
        Nürnbergs Leo Katzenberger angebracht worden. Seit 1998 heißt der
        Pegnitzuferweg "Leo-Katzenberger-Weg"
        <img src={LeoKatzenberger} alt="" />{" "}
        <h2>Leo Katzenberger und sein Todesurteil</h2>{" "}
        <p>
          Leonhard „Leo“ Katzenberger, geboren am 25. November 1873, stammte aus
          einer jüdischen Familie. Er war ein deutscher Geschäftsmann, der das
          familieneigene Schuhwarenhaus „Springmann“ leitete. Von 1939 bis 1942
          war er Vorsitzender der Israelitischen Kultusgemeinde in Nürnberg,
          nachdem 1938 sein Familienbetrieb von den Nazis konfisziert wurde.
          Katzenberger wurde am 3. Juni 1942 ermordet.
        </p>
        <p>
          Leo Katzenberger war ein alter Freund der Familie Scheffler, weshalb
          er der 37 jüngeren Irene Scheffler auf Bitten ihres Vaters 1932 eine
          Wohnung im Haus am Rande der Nürnberger Altstadt vermietete. Einer von
          Katzenbergers Angestellten(der auch der Spendensammler für die
          „Nationalsozialistische Volkswohlfahrt“ (NSV) war) sah, wie sein Chef
          in die Wohnung zu Irene ging, nachdem sie ihren NSV– Beitrag nicht
          bezahlen konnte. So fing er an, Gerüchte über eine angebliche Affäre
          der beiden zu verbreiten. Andere Hausbewohner schlossen sich an und
          bereicherten die Gerüchte mit noch mehr Lügen.
        </p>
        <p>
          Schließlich wandte sich ein Hausbewohner im Herbst 1939 an die NSDAP,
          worauf Katzenberger zwei Jahre später im März wegen des Vorwurfs der
          „Rassenschande“ (nach den „Nürnberger Gesetzen“ durften u.a. Juden und
          Nichtjuden keine sexuellen Beziehungen miteinander haben) verhaftet
          wurde. Bei der Vernehmung gaben Katzenberger und Irene(die seit Sommer
          1939 verheiratet war und den Nachnamen Seiler trug) zu, dass sie eine
          väterlich-freundschaftliche Beziehung hatten, die nie darüber
          hinausging.
        </p>
        <p>
          Im Herbst 1941 kam das Verfahren vor das Sondergericht der Nürnberger
          Landgerichtsdirektor Oswald Rothaug, der weitere Anklagen erfand, die
          das angebliche Unrecht Katzenbergers verstärkten und somit sein
          Todesurteil berechtigten.
        </p>
        <p>
          Der Schauprozess fand am 13. und 14. März 1942 statt. Katzenbergers
          angebliche „Verbrechen“ lauteten wie folgt: „Rassenschande“, Verstöße
          gegen „Verordnung gegen Volksschädlinge“, „Ausnutzung der Verdunklung“
          für das „rassenschänderisches Treiben“ etc. Alles Taten, die den Nazis
          erlaubten, gegen Leo Katzenberger eine Todesstrafe zu verhängen.
          Während des gesamten Prozesses durfte Katzenberger nicht ausreden –
          stattdessen wurde er Opfer grausamer Demütigungen. Irene Seiler wurde
          auch nicht in Ruhe gelassen – Rothaug wies sie darauf hin, dass sie
          mehr Zeitschriften lesen sollte, denn dann wüsste sie, dass
          „Rassenschande schlimmer als Mord“ sei.
        </p>
        <p>Alina, Diana</p>
      </div>
    );
  }
}

export default P2;
