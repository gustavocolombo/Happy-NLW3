import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={ mapMarkerImg } alt="mapMarker"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>

        </header>

        <footer>
          <strong>Quixadá</strong>
          <span>Ceará</span>
        </footer>
      </aside>
    
    <Map center={[-4.9783304,-39.0189615]} zoom={15} style={{width:'100%', height:'100%'}}>
      <TileLayer url ="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </Map>

    <Link to ="" className ="create-orphanages">
      <FiPlus size ={32} color ="#fff"/>
    </Link>
 
    </div>
  );
}

export default OrphanagesMap;