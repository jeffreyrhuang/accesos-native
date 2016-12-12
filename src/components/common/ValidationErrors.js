import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ValidationErrors = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingBottom: 2
  },
  text: {
    color: 'red',
    fontSize: 16
  }

});

export { ValidationErrors };
