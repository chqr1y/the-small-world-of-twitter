import React from "react";

import Map from './Map';
import TargetedInformation from './TargetedInformation';

const geoUrl = "https://raw.githubusercontent.com/chqr1y/twitter-locations-maps/master/ne_50m_admin_0_countries_and_twitter_woeid.json"
const twitterLocationsUrl = "https://raw.githubusercontent.com/chqr1y/the-small-world-of-twitter/master/data/twitter_available_locations.json"

class TrendsTwitterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target : {
        index: null,
        name: null,
        twitterTrendsAvailable: false,
        woeid: null,
      },
      markers: [],
      isLoaded: false,
      error: null,
    };
    this.setTarget = this.setTarget.bind(this);
  }
  componentDidMount() {
    fetch(twitterLocationsUrl)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            markers: data.filter(loc => loc.placeType.name === 'Town')
          });
        },(error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  getMarkers() {
    const {target, markers} = this.state;
    if (target.index === null) {
      return markers
    }
    return (
      markers.filter(marker =>
          marker.parentid === target.woeid)
    );
  }
  setTarget(target, callback) {
    this.setState({
      target : target
    }, callback);
  }
  render() {
    const style = {
      "borderStyle": "solid",
    };
    const {target} = this.state;
    return (
      <div>
        <div style={style}>
          <Map
            geoUrl={geoUrl}
            markers={this.getMarkers()}
            target={target}
            setTarget={this.setTarget}
          />
        </div>
        <div style={style}>
          <TargetedInformation
            target={target}
          />
        </div>
      </div>
    );
  }
}

export default TrendsTwitterPage;
