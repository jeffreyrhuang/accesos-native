import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ChooseOrientation from './components/ChooseOrientation';
import SelectTraits from './components/SelectTraits';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="orientation" component={ChooseOrientation} title="Orientation" />
      <Scene key="traits" component={SelectTraits} title="Traits" />
    </Router>
  );
};

export default RouterComponent;