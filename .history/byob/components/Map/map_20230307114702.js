import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import styles from '@/styles/Home.module.css'
import data from 'data/points.json'
import L from 'leaflet';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



export default function Map() {

    const position = [49.28594, -123.11129];
    const data = require('data/points.json');
    const customIcon = L.icon({
        iconUrl: {}'heart.png',
        iconSize: [32, 32], // size of the icon
        iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
      });

    return (
        <MapContainer className={styles.map} center={position} zoom={14} scrollWheelZoom={true}>
             <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((marker) => (
                <Marker position={[marker.lat, marker.lng]} icon={customIcon}>
                    <div>
                        <Popup className={styles.marker__container}>{marker.name} <br/> {marker.bar}</Popup>
                    </div>
                </Marker>
            ))}
        </MapContainer>
    )
}