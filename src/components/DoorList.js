import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { doorsFetch } from '../actions';
import { Container } from './common';
import ListItem from './ListItem';

class DoorList extends Component {

  componentWillMount() {
    const { current_user } = this.props;

    this.props.doorsFetch({ current_user });
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
      <Container>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    doors: state.doors,
    current_user: state.auth.current_user.data
  };
};

export default connect(mapStateToProps, { doorsFetch })(DoorList);
