import React from 'react';
import { StyleSheet } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomeMenu from './components/HomeMenu';
import DoorList from './components/DoorList';
import ChooseOrientation from './components/ChooseOrientation';
import SelectTraits from './components/SelectTraits';
import FillDimensions from './components/FillDimensions';
import Diagnostic1 from './components/diagnostics/Diagnostic1';
import Diagnostic2 from './components/diagnostics/Diagnostic2';

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={styles.sceneStyle}
      titleStyle={styles.titleStyle}
      navigationBarStyle={styles.navigationBar}
      leftButtonIconStyle={styles.leftButtonIcon}
      rightButtonTextStyle={styles.rightButtonText}
    >
      <Scene key="root">

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Iniciar Sesión" />
        </Scene>

        <Scene key="main">
          <Scene key="home" component={HomeMenu} title="Home Menu" />
          <Scene key="diag1" component={Diagnostic1} title="Diagnóstico" />
          <Scene key="diag2" component={Diagnostic2} title="Diagnóstico" />
          <Scene
            key="doorlist"
            component={DoorList}
            title="Puertas"
            onRight={() => Actions.orientation()}
            rightTitle='Add'
          />
          <Scene key="orientation" component={ChooseOrientation} title="Orientación" />
          <Scene key="traits" component={SelectTraits} title="Traits" />
          <Scene key="dimensions" component={FillDimensions} title="Dimensions" />
        </Scene>

      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#163D7D'
  },
  leftButtonIcon: {
    tintColor: '#fff'
  },
  rightButtonText: {
    color: '#fff'
  },
  titleStyle: {
    color: '#fff'
  },
  sceneStyle: {
    paddingTop: 65
  }
});

export default RouterComponent;
