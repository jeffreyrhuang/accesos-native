import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class FillDimensions extends Component {

  renderImage() {
    const { orientation, segmentar } = this.props;
    if (orientation === "Derecha" && segmentar === false) {
      return(<Image source={require('../img/fill-der.png')} />)
    } else if (orientation === "Izquierda" && segmentar === false) {
      return(<Image source={require('../img/fill-izq.png')} />)
    }
  }

  render() {
    return(
      <View>
        {this.renderImage()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    orientation: state.orientation.orientation,
    segmentar: state.traits.segmentar
  }
};

export default connect(mapStateToProps)(FillDimensions);