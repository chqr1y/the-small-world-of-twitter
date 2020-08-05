import React from 'react';

class LegendMap extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>
            Legend :
          </span>
          <button
            id="button-display-places"
            style={{
              "textDecoration": this.props.displayTowns ? "none" : "line-through"
            }}
            onClick={() => this.props.handleDisplayTowns()}
          >
              Display places
          </button>
        </div>
      </div>
    );
  }
}

export default LegendMap;
