import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class HomeMenu extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection style={styles.cardSection}>
            <Button
              onPress={Actions.diag1}
              title="Diagnostico"
              color="#841584"
            />
          </CardSection>
          <CardSection style={styles.cardSection}>
            <Button
              onPress={Actions.doorlist}
              title="Puertas"
              color="#841584"
            />
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  cardSection: {
    justifyContent: 'center'
  }
};

export default HomeMenu;
