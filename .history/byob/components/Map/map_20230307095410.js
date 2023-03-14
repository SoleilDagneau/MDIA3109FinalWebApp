import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import styles from '@/styles/Home.module.css'
import data from 'data/points.json'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export default function Map() {

    const position = [49.28594, -123.11129];
    const data = require('data/points.json');

    return (
        <MapContainer className={styles.map} center={position} zoom={14} scrollWheelZoom={true}>
             <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((marker) => (
                <Marker position={[marker.lat, marker.lng]}>
                    <div>
                        <Popup className=>{marker.name} <br/> {marker.bar}</Popup>
                    </div>
                </Marker>
            ))}
        </MapContainer>
    )
}