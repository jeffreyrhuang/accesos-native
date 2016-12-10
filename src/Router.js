import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomeMenu from './components/HomeMenu';
import DoorList from './components/DoorList';
import ChooseOrientation from './components/ChooseOrientation';
import SelectTraits from './components/SelectTraits';
import FillDimensions from './components/FillDimensions';
import Diagnostic1 from './components/Diagnostic1';
import Diagnostic2 from './components/diagnostics/Diagnostic2'

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: 65 }}
      navigationBarStyle={styles.navigationBar}
      leftButtonIconStyle={{ tintColor: 'white' }}
      titleStyle={{ color: '#FFF' }}
    >
      <Scene key="root">

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Iniciar Sesión" />
        </Scene>

        <Scene key="main" initial>
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

const styles = {
  navigationBar: {
    backgroundColor: '#163D7D'
  }
};

export default RouterComponent;
