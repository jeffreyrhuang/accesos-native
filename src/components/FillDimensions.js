import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class FillDimensions extends Component {
  render() {
    return(
      <View>
        <Text>Dimensions Page</Text>
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