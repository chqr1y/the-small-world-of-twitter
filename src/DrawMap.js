import React from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import Markers from './Markers';

class DrawMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: "",
    };
    this.setTooltipContent = this.setTooltipContent.bind(this);
  }
  setTooltipContent(value) {
    this.setState({tooltip: value});
  }
  render() {
    return (
      <div>
        <ComposableMap data-tip="">
          <ZoomableGroup>
            <Geographies
              geography={this.props.geoUrl}>
              {({ geographies }) =>
                geographies.map((geo, index) => {
                  const country = {
                    defaultColor : (geo.properties.TW_WOEID !== -1
                      ? "#1DA1F2"
                      : "#BBBBBB"),
                    selectedColor : "#0000FF",
                  }
                  return(
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={country.defaultColor}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        this.setState({tooltip: NAME});
                      }}
                      onMouseLeave={() => {
                        this.setState({tooltip: ""});
                      }}
                      onClick={() => {
                        this.props.handleClick(geo.properties, index);
                      }}
                      style={{
                        default: {
                          fill: this.props.selectedCountry.index === index
                                ? country.selectedColor
                                : country.defaultColor,
                          outline: "none"
                        },
                        pressed: {
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none"
                        }
                      }} />
                    );
                  })
              }
            </Geographies>
            <Markers
              markers={this.props.markers}
              setTooltipContent={this.setTooltipContent}
            />
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip>{this.state.tooltip}</ReactTooltip>
      </div>
    );
  }
}

export default DrawMap;
