import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { Prompt, Card, CardSection } from './common';

const Item = Picker.Item

class SelectTraits extends Component {
  render() {
    return(
      <View>
        <CardSection>
          <Text style={styles.pickerLabelStyle}>Puerta abre</Text>
          <Picker style={{ flex: 1 }}>
            <Item label='hacia afuera' value='hacia afuera' />
            <Item label='hacia adentro' value='hacia adentro' />
          </Picker>
        </CardSection>
        <CardSection>
          <Text style={styles.pickerLabelStyle}>Cerradura</Text>
          <Picker style={{ flex: 1 }}>
            <Item label='Corriente Yale' value='Corriente Yale' />
            <Item label='Eléctrico Yale' value='Eléctrico Yale' />
            <Item label='Ojos de candado' value='Ojos de candado' />
            <Item label='Pico de lora' value='Pico de lora' />
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18
  }
}

export default SelectTraits;