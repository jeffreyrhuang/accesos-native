import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ChooseOrientation from './components/ChooseOrientation';
import SelectTraits from './components/SelectTraits';
import FillDimensions from './components/FillDimensions';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="orientation" component={ChooseOrientation} title="Orientation" initial={true} />
      <Scene key="traits" component={SelectTraits} title="Traits" />
      <Scene key="dimensions" component={FillDimensions} title="Dimensions"/>
    </Router>
  );
};

export default RouterComponent;