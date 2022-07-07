import React, { Component } from "react";
import Synagoge from "../img/Synagoge_Essenweinstraße.avif";
import Hero from "../img/brandstifter.avif";
class P3 extends Component {
  state = {};
  render() {
    return (
      <div className="w-5/6 mx-auto max-w-5xl">
        <img src={Hero} alt="" />
        <h1>Synagoge in der Essenweinstraße (1903-1938)</h1>
        <p>
          Nach Errichtung der Haupsynagoge am Hans-Sachs-Platz, wurde 1902 die
          zweite Synagoge der Israelitischen Religionsgemeinschaft Adas Isroel
          an der Essenweinstraße errichtet. Diese Synagoge wurde für die
          kleinere, orthodoxe Gemeinde errichtet, deren Mitglieder hauptsächlich
          aus Osteuropa stammten.
        </p>
        <p>
          Sie störten sich an der neumodischen Art, wie die Gottesdienste in der
          Hauptsynagoge abgehalten wurden: Dort gab es eine Orgel, die die
          streng religiösen Juden störte, weil man dieses Instrument aus den
          christlichen Kirchen übernommen hatte.
        </p>
        <p>
          Auch verwendete man in der Hauptsynagoge ein Reformgebetbuch, in dem
          manche Gebete auf Deutsch statt auf Hebräisch gesprochen wurden und
          alle Textstellen, die die Hoffnung auf eine Rückkehr nach Israel
          thematisierten gestrichen waren.
        </p>
        <p>
          Aus diesen Gründen hatte sich die Adas Isroel von der moderneren,
          liberalen Gemeinde nach einem längeren Streit darüber, wie man die
          Religion ausüben sollte abgespalten. Die Mehrzahl der Nürnberger
          Jüdinnen und Juden war aber Anhänger des liberalen Judentums.{" "}
        </p>
        <p>
          Später entspannte sich das Verhältnis zwischen der liberalen
          Mehrheitsgemeinde und Adas Isroel wieder – jeder sollte auf seine Art
          mit seinem Glauben glücklich werden.
        </p>
        <p>
          Während der Reichsprogromnacht am 8./ 9.11.1938 wurde die Synagoge
          durch Brandstiftung zerstört.
        </p>
        <p>
          Am 9.11.1988 wurde das heutige Denkmal an der Essenweinstraße
          eingeweiht.
        </p>
        <img src={Synagoge} alt="" />
        <p>Franziska, Simon, Jotta</p>
      </div>
    );
  }
}

export default P3;
