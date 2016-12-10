import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});

export { Container };
