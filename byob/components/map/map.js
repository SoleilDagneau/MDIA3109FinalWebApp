import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { Icon } from "leaflet";

import React from 'react'
import styles from '@/styles/Home.module.css'

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    CircleMarker
} from 'react-leaflet'

export default function Map() {

    const trainIcon = new Icon({
        iconUrl: "heart.png",
        iconSize: [40, 40]
    });

    const posTempBCIT = [49.24909343864545, -123.00190243055268];

    const blueOption = { color: 'blue' };
    const redOption = { color: 'red' };

    return (
        <>
            <MapContainer
                className={styles.map}
                center={posTempBCIT}
                zoom={13}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={trainIcon} position={posTempBCIT}>
                    <Popup>
                        BCIT <br /> Main Campus
                    </Popup>
                </Marker>

                <CircleMarker
                    center={posTempBCIT}
                    pathOptions={blueOption}
                    radius={50}
                >
                    {/* <Popup>finish <br />Station</Popup> */}
                </CircleMarker>

                {/* <Polyline pathOptions={blueOption} positions={mainLine} />
                <Polyline pathOptions={blueOption} positions={extLine} /> */}
            </MapContainer>
        </>
    )
}