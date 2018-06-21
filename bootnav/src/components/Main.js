import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import ButtonContainer from './ButtonContainer';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDAac-LJE1r0KbID9ipA8_uUTCOSiUPVr0",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.7128, lng: -74.0060 }}>
    {props.markers}
  </GoogleMap>
)

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      zoneCenterPoint: {},
      defaultZoomLevel: 8,
      existingCars: [],
      activeMarker: {}
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this._onTapCarBtn = this._onTapCarBtn.bind(this);
    this._onTapNoCarBtn = this._onTapNoCarBtn.bind(this);

  }

  componentDidMount() {
    let self = this;
    fetch('/hits').then(res => {
      let records = res.json().then(records => {
        self.setState({hits: records});
      });
    });
  }

  handleMarkerClick(marker) {
    alert(JSON.stringify(marker));
  }

  _onTapCarBtn() {
    this.setState({ existingCars: this.state.existingCars.push(this.state.activeMarker) })
  }

  _onTapNoCarBtn() {
    console.log(this.state.activeMarker, 'is not a hit')
    //do nothing...
  }

  render() {
    console.log("this.state", this.state);
    const markers = this.state.hits.map((marker, idx) => (
      <Marker key={idx} position={{ lat: marker.Latitude, lng: marker.Longitude }} onClick={e => this.handleMarkerClick(marker)}> </Marker>
    ));
      console.log("markers", markers);

    return (
      <div>
        <MyMapComponent markers={markers} />
        <ButtonContainer _onTapCarBtn={this._onTapCarBtn} _onTapNoCarBtn={this._onTapCarBtn} />
      </div>
    );
  }
}
