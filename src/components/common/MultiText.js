import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MultiText = ({ label, onChangeText, placeholder, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>
        {label}
      </Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    marginTop: 22,
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  labelText: {
    fontSize: 16
  },
  input: {
    paddingLeft: 5,
    paddingTop: 5,
    height: 36,
    fontSize: 14
  }
});

export { MultiText };
