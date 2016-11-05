import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Header, Prompt, Card, Diagram } from './components/common';

class App extends Component {

  render() {
    return (
      <View>
        <Header headerText="Puerta" />
        <Prompt promptText="Choose one:" />
        <View style={styles.viewContainerStyle}>
          <Diagram style={styles.diagramStyle} text="Izquierda" source={require('./img/izq.png')} />
          <Diagram style={styles.diagramStyle} text="Derecha" source={require('./img/der.png')} />
        </View>
      </View>
    );
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

export default App;