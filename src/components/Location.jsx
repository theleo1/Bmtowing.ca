import React from 'react'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';  // Importer Icon de Leaflet pour définir l'icône
import 'leaflet/dist/leaflet.css';
import logo from './img/backgroundtowing.png'; // Remplacez par le chemin de votre logo

const Location = () => {
  // Création de l'icône du logo
  const logoIcon = new Icon({
    iconUrl: logo, // L'URL de votre logo
    iconSize: [50, 50], // Taille de l'icône (ajustez selon la taille de votre logo)
    iconAnchor: [25, 25], // Point d'ancrage de l'icône
    popupAnchor: [0, -25], // Ajuste le point où la popup apparaîtra
  });

  return (
    <div className="map-container" style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={[53.55816655458498, -113.66392712883632]} // Coordonnées d'Edmonton
        zoom={13}
        style={{ height: '500px', width: '100%'}}
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[53.55816655458498, -113.66392712883632]} icon={logoIcon}>
          <Popup>
            B.M Towing Service is here! <br /> Edmonton, AB.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;