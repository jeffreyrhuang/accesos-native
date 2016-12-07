import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { doorsFetch } from '../actions';
import ListItem from './ListItem';

class DoorList extends Component {

  componentWillMount() {
    this.props.doorsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ doors }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(doors);
  }

  renderRow(door) {
    return <ListItem door={door} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    doors: state.doors
  };
};

export default connect(mapStateToProps, { doorsFetch })(DoorList);
