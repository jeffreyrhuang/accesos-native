import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { selectModalOption } from '../../actions';
import { ModalSelect, FormFooter } from '../common';

class Diagnostic2 extends Component {
  render() {
    return (
      <View style={styles.sceneContainer}>
        <ScrollView>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>Automatización</Text>
          </View>
        </ScrollView>
        <FormFooter onPressPrev={Actions.pop} />
      </View>
    );
  }
}

const styles = {
  sectionHeaderText: {
    fontSize: 18,
    paddingLeft: 5,
    fontWeight: 'bold'
  },
  sectionHeaderContainer: {
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  sceneContainer: {
    flex: 1,
    padding: 15
  }
};

export default Diagnostic2;
