import React from 'react';

class DataMap extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>Name : {this.props.place.name}</span>
        </div>
        <div>
          <span>Twitter Data Available ? : {this.props.place.isTwitterCountry ? "YES" : "NO"}</span>
        </div>
        <div>
          <span>Twitter woeid : {this.props.place.woeid}</span>
        </div>
      </div>
    );
  }
}

export default DataMap;
