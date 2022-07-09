import React, { Component } from "react";
import { ScalingImages, Image } from "./styledComponents";
import Hero1 from "../img/IKGN-Synagoge.avif";
import Hero2 from "../img/IKGN-Veranstaltungshalle1.avif";
import Rollatorparade from "../img/Rollatorparade.avif";
import Veranstaltungssaal from "../img/IKGN-Garten.avif";
import GeschichtlicherHintergrund from "../img/GeschichtlicherHinterg.avif";
import NeueSynagoge from "../img/Neue-Synagoge.avif";
import ArnoHamburger from "../img/Arno Hamburger.avif";
import Judenstain from "../img/Judenstain1.avif";
import Straßenschild from "../img/Straßenschild.avif";

class P6 extends Component {
  render() {
    return (
      <div className="w-5/6 m-auto max-w-5xl">
        <h1>
          Israelitische Kultusgemeinde Nürnberg in der Arno-Hamburger-Straße
        </h1>
        <ScalingImages>
          <Image src={Hero1} />
          <Image src={Hero2} />
        </ScalingImages>
        <p className="p-0">
          Heute befindet sich die neue Synagoge in der Arno-Hamburger-Straße 3
          und die Israelitische Kultusgemeinde Nürnberg (IKGN) zählt ca. 2000
          Mitglieder. Zur Gemeinde gehört auch das Adolf Hamburger Altenheim,
          dieses ist für alle Leute offen, sie streiten sich zwar manchmal, aber
          nie wegen der verschiedenen Religionen.{" "}
        </p>
        <p>
          Des Weiteren gibt es viele Angebote für Kinder, Jugendliche und
          Altenheimbewohner, z.b. Ausflüge, Studien- und Familienfahrten und
          Rollatorparaden.
        </p>
        <img className="p-20" src={Rollatorparade} alt="" />
        <img src={Veranstaltungssaal} alt="" />
        <p>
          Es gibt einen neuen Veranstaltungssaal mit Klassenzimmern für
          Religionsunterricht und Räumen für das Jugendzentrum. Außerdem gibt es
          im Arno-Hamburger-Saal ein modernes Kunstwerk der Künstlerin Rachel
          Kohn: „Ich will meine Wohnung unter euch haben“ (das sagt Gott im 3.
          Buch Mose, Kapitel 26 Vers 11). Es besteht aus über 2000 kleinen
          unterschiedlichen Kugeln, die symbolisieren, wie verschieden und bunt
          die Mitglieder der Gemeinde sind.{" "}
        </p>
        <img src={GeschichtlicherHintergrund} alt="" />
        <h2>Geschichtlicher Hintergrund</h2>
        <p>
          Die Kultusgemeinde hatten die Nationalsozialisten aufgelöst, ihr
          Eigentum wurde „arisiert“(d.h zwangsenteignet) oder zerstört. Nach der
          Befreiung am 20. April 1945 standen die wenigen Überlebenden z.B.
          Adolf Hamburger vor dem Nichts. Von den Amerikanern erhielten sie das
          ehemalige jüdische Schwesternwohnheim in der Wielandstraße 6 zurück,
          welches sie als Alten- und Wohnheim für die Überlebenden der
          Konzentrationslager nutzten. Anfang der 1950er Jahre zählte die Ende
          1945 neugegründete Gemeinde dann wieder knapp 200 Mitglieder.{" "}
        </p>
        <img src={NeueSynagoge} alt="" />
        <p>
          1985 wurde eine neue Hauptsynagoge in der Johann-Priem-Straße (der
          heutigen Arno Hamburger Straße) erbaut, dies ist ein Zeichen, dass
          jüdisches Leben in Nürnberg Zukunft hat. Ab 1990 kamen durch das
          Kontingentsflüchtlingsgesetz viele Juden aus der ex-UdSSR nach
          Nürnberg dadurch steigt die Mitgliederzahl.
        </p>
        <img src={ArnoHamburger} alt="" />
        <h2>Arno Hamburger</h2>
        <p>
          Arno Hamburger ist am 15. Februar 1923 geboren. Er wuchs im Nürnberger
          Stadtteil St. Leonhard auf. Im August 1939 emigrierte er im Rahmen der
          Jugend-Alija über Italien nach Palästina, während die meisten seiner
          Verwandten von den Nationalsozialisten deportiert und ermordet wurden.
        </p>
        <p>
          Ab 1941 diente er in der britischen Armee, mit der er Europa befreite.
          Auf dem jüdischen Friedhof fand er seine Eltern wieder, die sich in
          der Leichenhalle versteckt hatten. Sein Vater war nicht deportiert
          worden, weil er Zwangsarbeit verrichten musste. Eigentlich wollte Arno
          Hamburger Nürnberg schnell wieder verlassen und nach Palästina
          zurückkehren. Seinen Eltern zuliebe, die nicht mehr die Kraft für
          einen Neuanfang in der Fremde hatten, blieb er dann doch.
        </p>
        <p>
          Hamburger nahm später als Übersetzer an den Nürnberger
          Nachfolgeprozessen gegen Nazis ab 1946 teil. Seitdem engagierte er
          sich auch stark in der Jugendarbeit in Nürnberg und beim Wiederaufbau
          einer demokratischen Gesellschaft. 1972 wurde Hamburger Vorsitzender
          der Israelitischen Kultusgemeinde und übte dieses Amt mit einer kurzen
          Unterbrechung bis zu seinem Tod aus.
        </p>
        <p>
          Hamburger war seit 1972 für die SPD im Nürnberger Stadtrat. Er war
          Mitglied im Ältestenrat und arbeitete in mehreren Ausschüssen. 2013
          starb er im Alter von 90 Jahren.
        </p>
        <h2>Judenstain in der Synagoge</h2>
        <img src={Judenstain} alt="" />
        <p>
          Der Judenstain ist seit dem 14. Jahrhundert in Nürnberg und ist ein
          aus Sandstein gemeißelter Tora Aufsatz. Er befand sich in der Synagoge
          am Hauptmarkt, später in einem Haus in der Judengasse. Beim Abbruch
          der Hauptsynagoge am Hans Sachs Platz wurde er vom Baumeister Fritz
          Frisch, einem NSDAP Mitglied versteckt und auf dem jüdischen Friedhof
          vergraben. Fritz wurde später von der NSDAP ausgeschlossen und wegen
          „Charakterlosigkeit“ öffentlich gebrandmarkt. 1987 wurde der
          Judenstein wieder entdeckt und kehrte in die neue Synagoge zurück und
          wurde dort in die Wand eingemauert.
        </p>
        <p>
          Bei unserem Besuch ist uns als erstes aufgefallen, das die jüdische
          Gemeinde von einem hohen Zaun mit vielen Kameras umgeben ist – es ist
          schade, dass auch heute noch Synagogen vor Angriffen von Antisemiten
          geschützt werden müssen…
        </p>
        <img src={Straßenschild} alt="" />
        <p>Carla, Violetta</p>
      </div>
    );
  }
}

export default P6;
