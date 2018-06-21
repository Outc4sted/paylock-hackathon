import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      zoneCenterPoint: {},
      defaultZoomLevel: 8
    };
  }

  _getHits() {
    //fetch hits
  }

  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {props.isMarkerShown && (
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
          )}
        </GoogleMap>
      </div>
    );
  }
}
