import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { selectModalOption } from '../actions';
import { ModalSelect } from './common';

class Diagnostic1 extends Component {
  render() {
    return (
      <View>
        <Text>Diagnostic1</Text>
        <ModalSelect
          data={[
            { label: 'Option 1', value: 'Option 1' },
            { label: 'Option 2', value: 'Option 2' },
            { label: 'Option 3', value: 'Option 3' }
          ]}
          name={'diag1'}
          onChange={({ prop, value }) => this.props.selectModalOption({ prop, value })}
        >
          <TextInput
            style={{ height: 30, padding: 10, borderColor: '#ccc', borderWidth: 1 }}
            editable={false}
            value={this.props.diag1}
            placeholder='Placeholder'
          />
        </ModalSelect>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    diag1: state.diagnosticForm.diag1
  };
};

export default connect(mapStateToProps, { selectModalOption })(Diagnostic1);
