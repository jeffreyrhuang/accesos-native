import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MultiText = ({ label, name, onChangeText, placeholder, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>
        {label}
      </Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={() => onChangeText({ prop: name, value, isFilled: true })}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  labelText: {
    fontSize: 16,
  },
  input: {
    paddingLeft: 5,
    height: 40
  }
});

export { MultiText };
