import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ChooseOrientation from './components/ChooseOrientation';
import SelectTraits from './components/SelectTraits';

const ROUTES = {
  page1: ChooseOrientation,
  page2: SelectTraits
};

class App extends Component {

  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component />
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Navigator
          style={styles.containerStyle}
          initialRoute={{name: 'page1'}}
          renderScene={this.renderScene}
          configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
      </Provider>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
}

export default App;