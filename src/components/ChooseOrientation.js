import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Header, Prompt, Card } from './common';
import Diagram from './Diagram';

class ChooseOrientation extends Component {
  render () {
    return (
      <View>
        <Prompt promptText="Choose one:" />
        <View style={styles.viewContainerStyle}>
          <Diagram
            style={styles.diagramStyle}
            text="Izquierda"
            source={require('../img/izq.png')}
          />
          <Diagram
            style={styles.diagramStyle}
            text="Derecha"
            source={require('../img/der.png')}
          />
        </View>
      </View>
    )
  }
}

const width = Dimensions.get('window').width

const styles = {
  viewContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  },
  diagramStyle: {
    width: (width / 2) - 20,
    height: 200,
  }
}

export default ChooseOrientation;