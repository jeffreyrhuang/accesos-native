import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { selectModalOption } from '../actions';
import { ModalSelect } from './common';

class Diagnostic1 extends Component {
  render() {
    return (
      <View style={styles.sceneContainer}>
        <Text style={styles.sectionHeaderText}>Estado del Portón</Text>
        <ModalSelect
          name={'diag1'}
          topic={'1. La puerta o portón se mueve libre y con facilidad manualmente?*'}
          data={[
            { label: 'Si, puerta/portón se mueve con facilidad' },
            { label: 'No, daños en montaje o rodamiento' },
            { label: 'No, falta limpieza' },
            { label: 'No, portón muy grande duro de mover' }
          ]}
          isFilled={this.props.diag1.isFilled}
          value={this.props.diag1.value}
          onChange={({ prop, value, isFilled }) => {
            this.props.selectModalOption({ prop, value, isFilled });
          }}
        />

        <ModalSelect
          name={'diag2'}
          topic={'2. La puerta o portón llega a los extremos de forma precisa? (En corredizos, requiere una luz antes del tope de 2cm)'}
          data={[
            { label: 'Si, La puerta llega exacta' },
            { label: 'No, puerta golpea al llegar (normal en algunos modelos)'},
            { label: 'No, puerta le falta llegar' },
            { label: 'No, puerta llega desviada' },
            { label: 'No, otro problema en puerta' }
          ]}
          isFilled={this.props.diag2.isFilled}
          value={this.props.diag2.value}
          onChange={({ prop, value, isFilled }) => {
            this.props.selectModalOption({ prop, value, isFilled });
          }}
        />
      </View>
    );
  }
}

const styles = {
  sectionHeaderText: {
    fontSize: 20,
    paddingLeft: 5
  },
  sceneContainer: {
    padding: 15
  }
};

const mapStateToProps = state => {
  return {
    diag1: state.diagnosticForm.diag1,
    diag2: state.diagnosticForm.diag2
  };
};

export default connect(mapStateToProps, { selectModalOption })(Diagnostic1);
