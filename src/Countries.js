import React from 'react'
import { Geographies, Geography } from "react-simple-maps";

class Countries extends React.Component {
  isTwitterTrendsAvailable(properties) {return (properties.TW_WOEID !== -1)}
  getColor(index, properties) {
    const {target} = this.props;
    if (target.index === index) {
      return "#0000FF"
    }
    return this.isTwitterTrendsAvailable(properties) ? "#1DA1F2": "#BBBBBB";
  }
  getStyle(index, properties) {
    return {
      default: {
        fill: this.getColor(index, properties),
        outline: "none"
      },
      pressed: {
        outline: "none"
      },
      hover: {
        fill: "#F53",
        outline: "none"
      }
    }
  }
  setCountry(index, geo, projection, path) {
    const {properties} = geo;
    let target = {
      index:null,
      name: null,
      twitterTrendsAvailable: false,
      woeid:null,
    };
    if (this.props.target.index !== index) {
      target = {
        index:index,
        name: properties.NAME,
        twitterTrendsAvailable: this.isTwitterTrendsAvailable(properties),
        woeid:properties.TW_WOEID,
      };
    }
    this.props.setTarget(target, () => {
      if (this.props.target.index) {
        const zoom = 4;
        const centroid = projection.invert(path.centroid(geo));
        this.props.setPosition({
          coordinates:centroid,
          zoom:zoom
        });
      }
    });
  }
  render() {
    const {geoUrl, onMouse} = this.props;
    return (
      <Geographies
        geography={geoUrl}>
        {({ geographies, projection, path }) =>
          geographies.map((geo, index) => {
            const {properties} = geo;
            const style = this.getStyle(index, properties);
            return (
              <Geography
                style={style}
                key={index}
                geography={geo}
                onMouseEnter={() => {onMouse(geo.properties.NAME)}}
                onMouseLeave={() => {onMouse("")}}
                onClick={() => {this.setCountry(index, geo, projection, path)}}
              />
            );
          })
        }
      </Geographies>
    );
  }
}

export default Countries
