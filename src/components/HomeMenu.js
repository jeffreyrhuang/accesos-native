import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import OIcon from 'react-native-vector-icons/Octicons';
import { MenuTile } from './common';

class HomeMenu extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MenuTile name={'Diagnósticos'} onPress={Actions.diag1}>
            <FAIcon name={'stethoscope'} size={30} style={styles.icon} />
          </MenuTile>
          <MenuTile name={'Puertas'} onPress={Actions.doorlist}>
            <OIcon name={'sign-out'} size={30} style={styles.icon} />
          </MenuTile>
          <MenuTile name={'Clientes'}>
            <FAIcon name={'users'} size={30} style={styles.icon} />
          </MenuTile>
          <MenuTile name={'Proyectos'}>
            <FAIcon name={'briefcase'} size={30} style={styles.icon} />
          </MenuTile>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  icon: {
    color: '#fff',
  }
};

export default HomeMenu;
