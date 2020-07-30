import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from "react-tooltip";

import Map from './Map';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapToolTip : "",
    };
    this.onChangeMapToolTip = this.onChangeMapToolTip.bind(this);
  }
  onChangeMapToolTip(str) {
    this.setState({mapToolTip : str});
  }
  render() {
    return (
      <div>
        <Map setTooltipContent={this.onChangeMapToolTip} />
        <ReactTooltip>{this.state.mapToolTip}</ReactTooltip>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
