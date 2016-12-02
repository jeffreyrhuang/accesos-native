import React, { Component } from 'react';
import { ScrollView, Picker, Text, Switch } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Prompt, CardSection } from './common';
import { doorUpdate } from '../actions';

const Item = Picker.Item;

class SelectTraits extends Component {
  onSubmit() {
    Actions.dimensions();
  }

  render() {
    return(
      <ScrollView>
        <CardSection>
          <Text style={styles.labelStyle}>Puerta abre</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.puerta_abre}
            onValueChange={value => this.props.doorUpdate({ prop: 'puerta_abre', value })}
          >
            <Item label='hacia afuera' value='Hacia afuera' />
            <Item label='hacia adentro' value='Hacia adentro' />
          </Picker>
        </CardSection>
        <CardSection>
          <Text style={styles.labelStyle}>Cerradura</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.cerradura}
            onValueChange={value => this.props.doorUpdate({ prop: 'cerradura', value })}
          >
            <Item label='Corriente Yale' value='Corriente Yale' />
            <Item label='Eléctrico Yale' value='Eléctrico Yale' />
            <Item label='Ojos de candado' value='Ojos de candado' />
            <Item label='Pico de lora' value='Pico de lora' />
          </Picker>
        </CardSection>
        <CardSection>
          <Text style={styles.labelStyle}>Cierrapuertas</Text>
          <Switch
            style={styles.switchStyle}
            value={this.props.cierra}
            onValueChange={value => this.props.doorUpdate({ prop: 'cierrapuertas', value })}
          />
        </CardSection>
        <CardSection>
          <Text style={styles.labelStyle}>Segmentar?</Text>
          <Switch
            style={styles.switchStyle}
            value={this.props.segmentar}
            onValueChange={value => this.props.doorUpdate({ prop: 'segmentar', value })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onSubmit.bind(this)}>
            Submit
          </Button>
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 20
  },
  switchStyle: {
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 20
  }
};

const mapStateToProps = state => {
  return {
    puerta_abre: state.traits.puerta_abre,
    cerradura: state.traits.cerradura,
    cierra: state.traits.cierrapuertas,
    segmentar: state.traits.segmentar
  };
};

export default connect(mapStateToProps, { doorUpdate })(SelectTraits);
