import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { divIcon } from "leaflet";

const blueDots = divIcon({
  html: `
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill="#276CD5" fill-opacity="0.3"/>
    <circle cx="15.0444" cy="14.9555" r="8.90208" fill="#276CD5"/>
  </svg>
  `,
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

export interface Position { x: number; y: number; }

const BlueDots = (props: { position: Position }) => {
  return (
    <Marker
      position={[props.position.x, props.position.y]}
      draggable={true}
      icon={blueDots}
    />
  )
}

export { BlueDots }