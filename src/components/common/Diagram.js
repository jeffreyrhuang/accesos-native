import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const Diagram = (props) => {
  return (
    <TouchableOpacity>
      <Text>{props.text}</Text>
      <Image source={props.source} />
    </TouchableOpacity>
  );
};

export { Diagram };