import React from "react";

import DrawMap from './DrawMap';
import LegendMap from './LegendMap';
import DataMap from './DataMap';



class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry : {
        isTwitterCountry: false,
        index: null,
        woeid: null,
        name: null,
      },
      displayTowns: true,
      mapToolTip: "",
    };
    this.handleSelectCountry = this.handleSelectCountry.bind(this);
    this.handleDisplayTowns = this.handleDisplayTowns.bind(this);
  }
  handleSelectCountry(properties, index) {
    if (this.state.selectedCountry.index === index) {
      this.setState({
        selectedCountry : {
          isTwitterCountry: null,
          index:null,
          woeid:null,
          name: null,
        },
      });
    }
    else {
      this.setState({
        selectedCountry : {
          isTwitterCountry: (properties.TW_WOEID !== -1),
          index:index,
          woeid:properties.TW_WOEID,
          name: properties.NAME,
        },
      });
    }
  }

  handleDisplayTowns() {
    this.setState({
      displayTowns: !(this.state.displayTowns),
    });
  }
  render() {
    const markers = (() => {
      if (this.state.displayTowns === false) {
        return [];
      }
      else if (this.state.selectedCountry.index === null) {
        return this.props.markers;
      }
      else {
        return this.props.markers.filter(marker =>
            marker.parentid === this.state.selectedCountry.woeid
        );
      }
    })();
    const style = {
      "borderStyle": "solid",
    };
    return (
      <div>
        <div style={style}>
          <DrawMap
            geoUrl={this.props.geoUrl}
            selectedCountry={this.state.selectedCountry}
            handleClick={this.handleSelectCountry}
            markers={markers}
          />
        </div>
        <div style={style}>
          <LegendMap
            displayTowns={this.state.displayTowns}
            handleDisplayTowns={this.handleDisplayTowns}
          />
        </div>
        <div style={style}>
          <DataMap
            place={this.state.selectedCountry}
          />
        </div>
      </div>
    );
  }
}

export default Map;
