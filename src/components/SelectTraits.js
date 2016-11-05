import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { Header, Prompt, Card } from './common';

const Item = Picker.Item

class SelectTraits extends Component {
  render() {
    return(
      <View>
        <Header headerText="Puerta" />
        <Picker>
          <Item label='hacia afuera' value='afuera' />
          <Item label='hacia adentro' value='adentro' />
        </Picker>
      </View>
    )
  }
}

export default SelectTraits;