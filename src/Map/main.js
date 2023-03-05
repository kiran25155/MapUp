import React from "react";
import Aside from "./aside.js";
import './main.css';
import icon from "../Images/icon.png";
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
const Main=()=>{
    const { latitude, longitude }={latitude: 21.7679,
        longitude:78.8718}
    const position = [51.505, -0.09]
    
    const searchcountries=()=>{
        // var line1 = turf.lineString([[115, -35], [125, -30], [135, -30], [145, -35]]);
        // var line2 = turf.lineString([[115, -25], [125, -30], [135, -30], [145, -25]]);
        
        // var overlapping = turf.lineOverlap(line1, line2);
    }
return(
  <>
 <MapContainer center={[40.505, -100.09]} zoom={0} >
  
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
 <Marker position={[40.505, -100.09]}>
      <Popup>
        I am a pop-up!
      </Popup>
  </Marker>
</MapContainer>
    </>
  
)
}
export default Main;