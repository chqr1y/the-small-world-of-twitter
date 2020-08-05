import React from "react";
import { Marker } from "react-simple-maps";

class Markers extends React.Component {
  render() {
    return (
      this.props.markers.map(
        ({name, latitude, longitude}, index) => (
          <Marker
            key={index}
            coordinates={[longitude, latitude]}
            onMouseEnter={() => {
              this.props.setTooltipContent(name);
            }}
            onMouseLeave={() => {
              this.props.setTooltipContent("");
            }}
          >
            <circle r={3} fill="#F00" stroke="#fff" strokeWidth={0.5} />
          </Marker>
        )
      )
    );
  }
}

export default Markers;
