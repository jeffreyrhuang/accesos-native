import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

class DoorList extends Component {

  // createDataSource({ door }) {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });

  //   this.dataSource = ds.cloneWithRows(door);
  // }

  render() {
    return (
      <View>
        <Text>
          Door List
        </Text>
      </View>
      //<ListView
        //enableEmptySections
        //dataSource={this.dataSource}
        //renderRow={this.renderRow}
      //>
    );
  }
}

export default DoorList;
