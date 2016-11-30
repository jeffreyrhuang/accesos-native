import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { doorsFetch } from '../actions';

class DoorList extends Component {

  componentWillMount() {
    this.props.doorsFetch();
  }

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

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps, { doorsFetch })(DoorList);
