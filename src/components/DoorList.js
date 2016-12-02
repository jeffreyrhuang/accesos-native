import _ from 'lodash';
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
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
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
    console.log(this.props.doors);  // for testing

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
