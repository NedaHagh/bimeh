import React from 'react';
import { connect } from 'react-redux';
import { getCarTypesData } from '../actions';

let styles = {
  width: '250px',
  height: '100px'
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onClick={this.props.getCarTypesData}
      >Press to see News</button>
    );
  }

};

const mapDispatchToProps = {
  getCarTypesData: getCarTypesData,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
