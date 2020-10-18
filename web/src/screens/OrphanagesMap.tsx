import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';
import { Map, TileLayer,Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import api from '../services/api';

import '../styles/pages/orphanagesMap.css';

const mapIcon = Leaflet.icon({
  iconSize: [58,68],
  iconAnchor:[29,68],
  iconUrl:mapMarkerImg,
  popupAnchor: [178, 2]
})

interface Orphanage{
  id: number;
  latitude:number;
  longitude: number;
  name: string;
}

function OrphanagesMap(){

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  
  useEffect(()=>{
     api.get('/orphanages').then(response => {
       const orphanages = response.data;
       setOrphanages(orphanages);
     })
  }, [])
  
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

      {orphanages.map(orphanage => {
        return(
          <Marker 
            icon={mapIcon}
            position={[orphanage.latitude,orphanage.longitude]}
            key={orphanage.id}
          >

            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF"/> 
              </Link>
            </Popup>
      
          </Marker>
        )
      })}
      
    </Map>   

    <Link to ="orphanages/create" className ="create-orphanages">
      <FiPlus size ={32} color ="#fff"/>
    </Link>
 
    </div>
  );
}

export default OrphanagesMap;