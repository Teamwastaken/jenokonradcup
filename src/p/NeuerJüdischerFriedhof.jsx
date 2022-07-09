import React, { Component } from "react";
import Hero from "../img/JuedischerFriedhof.avif";
import Trauerhalle from "../img/Trauerhalle.avif";
import TrauerhalleInnen from "../img/Trauerhalle2.avif";
import Ehrenmal from "../img/FriedhofEhrenmal.avif";
import OpferKonzentrationslager from "../img/OpferKonzentrationslager.avif";
class P7 extends Component {
  state = {};
  render() {
    return (
      <div className="w-5/6 m-auto max-w-5xl">
        <img src={Hero} alt="" />
        <h1>Neuer Jüdischer Friedhof</h1>
        <p>
          Der neue jüdische Friedhof von Nürnberg, welcher am 10.Mai 1910
          eröffnet wurde , liegt zwischen dem Westfriedhof und der Ringbahn
          hinter einer hohen Mauer.
        </p>
        <p>
          Hier befinden sich teilweise 300 Jahre alte Grabsteine ,die zeitlich
          unbegrenzt stehen bleiben. Der Friedhof wurde vom Architekten Emil
          Hecht entworfen, während die künstlerische Gestaltung vom jüdischen
          Künstler Ferdinand Adler übernommen wurde. Zur Eröffnung des
          Friedhofes zählte die Gemeinde ungefähr 7800 Mitglieder. Die Malereien
          wurden durch die Bombenangriffe leider fast vollkommen zerstört.
        </p>
        <img src={Trauerhalle} alt="" />
        <p>
          Die Trauerhalle und das Verwalterwohnhaus dienten den nicht
          deportierten Juden während des Bombenangriffes als Unterschlupf.
        </p>
        <img src={TrauerhalleInnen} alt="" />
        <p>
          Grabsteine des mittelalterlichen jüdischen Friedhofes, die in der
          Lorenzkirche als Treppenstufe missbraucht worden waren, wurden 1970 in
          der Aussegnungshalle an der Wand angebracht.
        </p>
        <p>
          Rechts neben dem Eingang, etwas abgelegen, liegt der Urnenhain.
          Deshalb gab es häufig Diskussionen, weil die Leichenverbrennung im
          Judentum als Gotteslästerung gilt. Jedoch einigte man sich auf einen
          Kompromiss.
        </p>
        <img src={Ehrenmal} alt="" />
        <p>
          Hinter der Trauerhalle befinden sich die Gräber, unter anderem
          Gefallenengräber aus dem 1. Weltkrieg und Gräber von jüdischen
          Kriegsgefangen. Seit 1922 gibt es ein Denkmal in der zentralen Allee,
          welches von Fritz Landauer 1920 für einen Wettbewerb entworfen wurde.
          Auf dem Denkmal sitzt ein Greif welcher in seiner Klaue eine Kugel mit
          dem Davidstern hält. Rechts und links auf der Säule sind die Namen der
          178 Opfer vermerkt.{" "}
        </p>
        <p>
          Im 1.Weltkrieg kämpften rund 100.000 deutsche Juden mit Begeisterung
          für ihr Vaterland in den deutschen Streitkräften. Rund 12.000 von
          ihnen kamen um. Wurde ihnen für diese Taten gedankt? Nein, den Juden
          wurde sogar vorgeworfen, sich vor dem Einsatz zu drücken. Das
          Kriegsministerium versuchte, das bei der Judenzählung 1916
          nachzuweisen, das Ergebnis wurde geheim gehalten. Juden waren in Augen
          der Antisemiten nur als Sündenböcke gut. Somit schwand die Hoffnung
          der deutschen Juden, das sie für ihre Taten jemals als vollwertige
          Bürger akzeptiert werden würden.
        </p>
        <img src={OpferKonzentrationslager} alt="" />
        <p>
          Im hinteren Teil des Friedhofes befinden sich chronologisch
          aufgereihte Gräber aus der NS-Zeit, darunter auch Opfer aus der
          „Reichskristallnacht“, die in der Nacht vom 9 November auf den 10
          November 1938 wegen dem Reichspogrom umkamen. Etwas weiter stößt man
          auf die Gedenksteine für Todesopfer aus den Konzentrationslagern.
          Links hinter der Trauerhalle befindet sich, erkennbar and den
          besonders kleinen Grabsteinen, das Areal mit den Kindergräbern. Die
          Steinskulpturen, die an abgebrochene Lebensbäume erinnern, stellen die
          zu früh erloschenen Leben da.{" "}
        </p>
        <p>Johanna, Sophie</p>
      </div>
    );
  }
}

export default P7;
