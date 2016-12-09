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
            { label: 'Si, puerta/portón se mueve con facilidad', value: 'Option 1' },
            { label: 'No, daños en montaje o rodamiento', value: 'Option 2' },
            { label: 'No, falta limpieza', value: 'Option 3' },
            { label: 'No, portón muy grande duro de mover', value: 'Option 4' }
          ]}
          value={this.props.diag1}
          onChange={({ prop, value }) => this.props.selectModalOption({ prop, value })}
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
