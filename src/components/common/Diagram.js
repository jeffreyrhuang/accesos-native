import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Diagram = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.containerStyle}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </View>
      <Image style={styles.imageStyle} source={props.source} />
    </TouchableOpacity>
  );
};

const styles = {
  textContainer: {
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
}

export { Diagram };