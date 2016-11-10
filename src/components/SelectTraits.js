import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Prompt, Card, CardSection } from './common';
import { puertaAbreSelected, cerraduraSelected } from '../actions';

const Item = Picker.Item

class SelectTraits extends Component {
  render() {
    return(
      <View>
        <CardSection>
          <Text style={styles.pickerLabelStyle}>Puerta abre</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.puerta_abre}
            onValueChange={(value) => this.props.puertaAbreSelected(value)}>
            <Item label='hacia afuera' value='hacia afuera' />
            <Item label='hacia adentro' value='hacia adentro' />
          </Picker>
        </CardSection>
        <CardSection>
          <Text style={styles.pickerLabelStyle}>Cerradura</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.cerradura}
            onValueChange={value => this.props.cerraduraSelected(value)}>
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

const mapStateToProps = state => {
  return {
    puerta_abre: state.traits.puerta_abre,
    cerradura: state.traits.cerradura
  };
};

export default connect(mapStateToProps, { puertaAbreSelected, cerraduraSelected })(SelectTraits);