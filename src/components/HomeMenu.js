import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MenuTile } from './common';

class HomeMenu extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <MenuTile
            name={'Diagnostics'}
            iconName={'stethoscope'}
            onPress={Actions.diag1}
          />
          <MenuTile
            name={'Puertas'}
            iconName={'subway'}
            onPress={Actions.doorlist}
          />
        </View>
      </View>
    );
  }
}

export default HomeMenu;
