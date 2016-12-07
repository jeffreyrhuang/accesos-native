import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomeMenu from './components/HomeMenu';
import DoorList from './components/DoorList';
import ChooseOrientation from './components/ChooseOrientation';
import SelectTraits from './components/SelectTraits';
import FillDimensions from './components/FillDimensions';
import Diagnostic1 from './components/Diagnostic1';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key="main" initial>
          <Scene key="home" component={HomeMenu} title="Home Menu" />
          <Scene key="diag1" component={Diagnostic1} />
          <Scene
            key="doorlist"
            component={DoorList}
            title="Door List"
            onRight={() => Actions.orientation()}
            rightTitle='Add'
          />
          <Scene key="orientation" component={ChooseOrientation} title="Orientation" />
          <Scene key="traits" component={SelectTraits} title="Traits" />
          <Scene key="dimensions" component={FillDimensions} title="Dimensions" />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
