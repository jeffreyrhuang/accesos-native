import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class FormInput extends Component {

  renderIcon() {
    if (this.props.value) {
      return <Icon name='check' size={18} style={{ alignSelf: 'flex-end', color: 'green' }} />;
    }
    return <Icon name='circle-thin' size={18} style={{ alignSelf: 'flex-end' }} />;
  }

  render() {
    const { label, onChangeText, multiline, placeholder, value } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topicContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              {label}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            {this.renderIcon()}
          </View>
        </View>
        <TextInput
          multiline={multiline}
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  topicContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15
  },
  iconContainer: {
    flex: 1,
    paddingTop: 2
  },
  labelText: {
    fontSize: 16
  },
  labelContainer: {
    flex: 8
  },
  input: {
    paddingLeft: 20,
    paddingTop: 5,
    height: 36,
    fontSize: 14
  }
});

export { FormInput };
