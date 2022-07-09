import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

function Map() {
  const data = [
    {
      id: 1,
      name: "Hauptmarkt",
      value: [49.4541629, 11.0773788],
      link: "hauptmarkt",
      text: "",
    },
    {
      id: 2,
      name: "Hans Sachs Platz",
      link: "HansSachsPlatz",
      value: [49.45347, 11.08028],
      text: "",
    },
    {
      id: 3,
      name: "Synagoge Essenweinstraße",
      link: "essenweinstrasse",
      value: [49.4463, 11.07258],
      text: "",
    },
    {
      id: 4,
      name: "Obere Kanalstraße",
      link: "kanalstrasse",
      value: [49.44753, 11.05811],
      text: "",
    },
    {
      id: 5,
      name: "Judenhäuser",
      link: "judenhaeuser",
      value: [49.44586, 11.05669],
      text: "",
    },
    {
      id: 6,
      name: "Bahnhof Märzfeld",
      link: "maerzfeld",
      value: [49.41055, 11.13541],
      text: "",
    },
    {
      id: 7,
      name: "Neuer Judischer Friedhof",
      link: "neuerJuedischerFriedhof",
      value: [49.46606, 11.0376],
      text: "",
    },
    {
      id: 8,
      name: "Neue Synagoge Arnohamburger Straße",
      link: "arnoHamburgerStr",
      value: [49.47415, 11.1018],
      text: "",
    },
  ];

  return (
    <div>
      {" "}
      <MapContainer
        style={{
          width: "93vw",
          height: "60vh",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        className="m-auto rounded-tr-xl rounded-tl-xl rounded-bl-xl"
        center={[49.4541629, 11.0773788]}
        zoom={11}
        scrollWheelZoom={true}
        minZoom={8}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((user) => (
          <Marker key={user.id} position={user.value}>
            <Popup>
              <h1>{user.name}</h1>
              <p className="p-0">{user.text}</p>
              <Link to={"/map/" + user.link}>Mehr Infos</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
