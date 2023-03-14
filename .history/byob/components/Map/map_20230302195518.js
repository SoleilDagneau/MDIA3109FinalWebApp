import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import data from 'data/points.json'
import style from

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {

    const position = [49.28594, -123.11129];
    const data = require('data/points.json');



    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
             <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((marker) => (
                <Marker position={[marker.lat, marker.lng]}>
                <Popup className={styles.popup}>{marker.name} <br/> {marker.bar}</Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}