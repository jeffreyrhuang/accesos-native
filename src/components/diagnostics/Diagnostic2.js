import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { selectModalOption } from '../../actions';
import { Container, SectionHeader, ModalSelect, FormFooter } from '../common';

class Diagnostic2 extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <SectionHeader>Automatización</SectionHeader>
        </ScrollView>
        <FormFooter onPressPrev={Actions.pop} />
      </Container>
    );
  }
}

export default Diagnostic2;
