import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SectionHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  headerText: {
    fontSize: 18,
    paddingLeft: 5,
    fontWeight: 'bold'
  }
});

export { SectionHeader };
