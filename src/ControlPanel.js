import React from 'react';

class DefaultButton extends React.Component {
  static defaultProps = {
    style: {},
  }
  render() {
    const {style, onClick, children} = this.props;
    return (
      <button style={style} onClick={onClick}>{children}</button>
    );
  }
}

class WarningButton extends React.Component {
  static defaultProps = {
    style: {
      height: '2rem',
      width: '4rem',
      background: '#ff5533'
    },
  }
  render() {
    const {style, onClick, children} = this.props;
    return (
      <DefaultButton style={style} onClick={onClick}>{children}</DefaultButton>
    );
  }
}

class SwitchButton extends React.Component {
  render() {
    const {onClick, children, state} = this.props;
    return (
      <DefaultButton
        style={{
          "textDecoration": state ? "none" : "line-through"
        }}
        onClick={onClick}>
        {children}
      </DefaultButton>
    );
  }
}

class ControlPanel extends React.Component {
  static defaultProps = {
    style: {
      display: 'flex',
      position: 'fixed',
      right: '10px',
      top: '10px',
      flexDirection: 'column',
    }
  }
  render() {
    const {style} = this.props;
    const {reset, plus, minus, displayTowns} = this.props.buttons;
    return (
      <div style={style}>
        <div>
          <WarningButton onClick={reset.onClick}>RESET</WarningButton>
          <DefaultButton onClick={plus.onClick}>+</DefaultButton>
          <DefaultButton onClick={minus.onClick}>-</DefaultButton>
        </div>
        <div>
        <SwitchButton
          onClick={displayTowns.onClick}
          state={displayTowns.state}>Display Towns</SwitchButton>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
