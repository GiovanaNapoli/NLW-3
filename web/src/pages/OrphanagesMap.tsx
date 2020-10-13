import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import { FiPlus } from "react-icons/fi";

import mapMarkerImg from "../images/Local.png";
import "../styles/pages/orphanageMap.css";

export default function OrphanegesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Mongaguá</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map
        center={[-24.0697365, -46.7388684]}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}
