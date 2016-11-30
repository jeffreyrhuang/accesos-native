import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import DoorList from './components/DoorList';
import ChooseOrientation from './components/ChooseOrientation';
import SelectTraits from './components/SelectTraits';
import FillDimensions from './components/FillDimensions';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="doorlist"
        component={DoorList}
        title="Door List"
        initial={true}
        onRight={() => Actions.orientation()}
        rightTitle='Add'
      />
      <Scene key="orientation" component={ChooseOrientation} title="Orientation" />
      <Scene key="traits" component={SelectTraits} title="Traits" />
      <Scene key="dimensions" component={FillDimensions} title="Dimensions" />
    </Router>
  );
};

export default RouterComponent;
