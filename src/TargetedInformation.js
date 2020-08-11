import React from 'react';

class TargetedInformation extends React.Component {
  render() {
    const {name, woeid, twitterTrendsAvailable} = this.props.target;
    return (
      <div>
        <div>
          <span>Name : {name}</span>
        </div>
        <div>
          <span>Twitter Trends Available ? : {twitterTrendsAvailable ? "YES" : "NO"}</span>
        </div>
        <div>
          <span>Twitter woeid : {woeid}</span>
        </div>
      </div>
    );
  }
}

export default TargetedInformation;
