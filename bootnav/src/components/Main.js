import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.markers}
  </GoogleMap>
)

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      zoneCenterPoint: {},
      defaultZoomLevel: 8
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  componentDidMount() {
    let self = this;
    fetch('/hits').then(res => self.state.hits = res);
  }

  handleMarkerClick(marker) {
    alert(JSON.stringify(marker));
  }

  render() {
    const markers = this.state.hits.map((marker, idx) => (
      <Marker key={idx} position={{ lat: marker.Latitude, lng: marker.Longitude }} onClick={e => this.handleMarkerClick(marker)}> </Marker>
    ));

    return (
      <MyMapComponent
        markers={this.state.hits}
      />
    );
  }
}
