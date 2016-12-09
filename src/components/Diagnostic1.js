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
    diag1: state.diagnosticForm.diag1
  };
};

export default connect(mapStateToProps, { selectModalOption })(Diagnostic1);
