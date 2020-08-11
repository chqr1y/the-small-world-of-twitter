import React from 'react';
import ReactDOM from 'react-dom';

import TrendsTwitterPage from './TrendsTwitterPage';

class App extends React.Component {
  render() {
    const style = {
      width: "90%",
      maxWidth: "1200px",
      margin: "auto",
      borderStyle: "solid",
    }
    return (
      <div style={style}>
        <TrendsTwitterPage />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
