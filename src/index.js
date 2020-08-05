import React from 'react';
import ReactDOM from 'react-dom';

import Map from './Map';

const geoUrl = "https://raw.githubusercontent.com/chqr1y/twitter-locations-maps/master/ne_50m_admin_0_countries_and_twitter_woeid.json"
const twitterLocationsUrl = "https://raw.githubusercontent.com/chqr1y/the-small-world-of-twitter/master/data/twitter_available_locations.json"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      twitterLocations: [],
    };
  }
  componentDidMount() {
    fetch(twitterLocationsUrl)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            twitterLocations: data.filter(loc => loc.placeType.name === 'Town')
          });
        },(error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    return (
      <div
        style={{
              "width":"90%",
              "maxWidth":"1200px",
              "margin":"auto",
              "borderStyle":"solid",
        }}
      >
        <Map
          geoUrl={geoUrl}
          markers={this.state.twitterLocations}
        />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
