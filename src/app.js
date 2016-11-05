import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Diagram } from './components/common';

class App extends Component {

  render() {
    return (
      <View>
        <Header headerText="Puerta" />
        <Diagram text="Izquierda" source={require('./img/izq.png')} />
        <Diagram text="Derecha" source={require('./img/der.png')} />
      </View>
    );
  }
}

export default App;