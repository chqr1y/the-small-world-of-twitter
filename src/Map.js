import React from "react";
import { ZoomableGroup, ComposableMap } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import Countries from './Countries';
import Markers from './Markers';
import ControlPanel from './ControlPanel';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: "",
      position: {coordinates: [0, 0], zoom: 1},
      displayMarkers: true,
    };
    this.setPosition = this.setPosition.bind(this);
    this.setTooltipContent = this.setTooltipContent.bind(this);
    this.handleDisplayMarkers = this.handleDisplayMarkers.bind(this);
    this.reset = this.reset.bind(this);
  }
  setPosition(position) {
    this.setState((state) => {
      return {
        position: {
          ...state.position,
          ...position,
      }}
    });
  }
  setTooltipContent(value) {
    this.setState({tooltip: value});
  }
  handleDisplayMarkers() {
    this.setState((state) => {
      return {displayMarkers: !(state.displayMarkers)}
    });
  }
  reset() {
    this.setState({
      position: {
        coordinates: [0,0],
        zoom: 1,
      },
    }, () => {
      this.props.setTarget(
        {
          twitterTrendsAvailable: false,
          index:null,
          woeid:null,
          name: null,
        }
      );
    });
  }
  render() {
    const {geoUrl, target, setTarget, markers} = this.props;
    const {displayMarkers, tooltip} = this.state;
    const {coordinates, zoom} = this.state.position;
    const style = {
      transform: "translateZ(0)"
    }
    return (
      <div style={style}>
        <ComposableMap data-tip="">
          <ZoomableGroup
            center={coordinates}
            zoom={zoom}
            onMoveEnd={this.setPosition}
          >
            <Countries
              geoUrl={geoUrl}
              target={target}
              setTarget={setTarget}
              onMouse={this.setTooltipContent}
              setPosition={this.setPosition}
            />
            <Markers
              zoom={zoom}
              markers={displayMarkers ? markers : []}
              onMouse={this.setTooltipContent}
            />
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip>{tooltip}</ReactTooltip>
        <ControlPanel
          buttons={{
            reset: {onClick: this.reset},
            plus: {
              onClick: () => {this.setPosition(
                {zoom: zoom * 2}
              )},
            },
            minus: {
              onClick: () => {this.setPosition(
                {zoom: zoom / 2}
              )},
            },
            displayTowns: {
              state: displayMarkers,
              onClick: this.handleDisplayMarkers,
            }
          }}
        />
      </div>
      );
  }
}

export default Map;
