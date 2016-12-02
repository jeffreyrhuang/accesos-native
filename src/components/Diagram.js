import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';

class Diagram extends Component {
  onClick() {
    this.props.orientationChosen(this.props.text);
    Actions.traits();
  }

  render() {
    const { textContainerStyle, textStyle, imageStyle, containerStyle } = styles;
    const { text, source } = this.props;

    return (
      <TouchableOpacity onPress={this.onClick.bind(this)} style={containerStyle}>
        <View style={textContainerStyle}>
          <Text style={textStyle}>{text}</Text>
        </View>
        <Image style={imageStyle} source={source} />
      </TouchableOpacity>
    );
  }
}

const styles = {
  textContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3
  },
  textStyle: {
    fontSize: 20,
  },
  imageStyle: {
  },
  containerStyle: {
    flexDirection: 'column'
  }
};

export default connect(null, actions)(Diagram);