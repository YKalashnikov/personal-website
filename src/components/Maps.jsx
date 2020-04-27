import React, { Component } from "react";
//import { Map, Tooltip, TileLayer, Circle, Rectangle } from 'react-leaflet'
//import 'leaflet/dist/leaflet.css'


      const center = [33.8854436, -118.4110188]
      const rectangle = [[32.711332, -117.216577], [32.709620, -117.192976],[32.692375, -117.219004], [32.688305, -117.200345]]


 class Maps extends Component {

    render() {
         if(typeof window !== 'undefined') {
          const {Map, Tooltip, TileLayer, Circle, Rectangle} = require('react-leaflet')
          require("leaflet/dist/leaflet.css")
 
      return (
        <Map center={center} zoom={12}>
          <TileLayer
            attribution="&#9752; <a href=&quot;https://googlemaps.netlify.com&quot;>Location</a>"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle
            center={center}
            fillColor="lightblue"
            onClick={this.onClickCircle}
            radius={400}>
            <Circle center={center} fillColor="red" radius={200} stroke={false} />  
            <Tooltip direction="right" offset={[15, 5]}>Knock on my door</Tooltip>
          </Circle>
           <Rectangle bounds={rectangle} color="black">
            <Tooltip direction="right" offset={[40, 2]} opacity={1} >
             Don't knock here
            </Tooltip>
          </Rectangle> 
        </Map>
      )
    }
    else{
        return null;
    }
}
 }
    
  //}

  export default Maps;
  