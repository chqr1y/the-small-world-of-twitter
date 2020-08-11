import React from "react";
import { Marker } from "react-simple-maps";

class Circle extends React.Component {
  static defaultProps = {
    zoom: 1,
  };
  render() {
    const {zoom} = this.props;
    return (
      <circle r={3 / zoom}
              fill="#F00"
              stroke="#fff"
              strokeWidth={0.5 / zoom}
      />
    );
  }
}

class Markers extends React.Component {
  static defaultProps = {
    zoom: 1,
  }
  render() {
    const {markers, zoom, onMouse} = this.props;
    return (
      markers.map(
        ({name, latitude, longitude}, index) => (
          <Marker
            key={index}
            coordinates={[longitude, latitude]}
            onMouseEnter={() => {onMouse(name);}}
            onMouseLeave={() => {onMouse("");}}
          >
            <Circle zoom={zoom}/>
            />
          </Marker>
        )
      )
    );
  }
}

export default Markers;
