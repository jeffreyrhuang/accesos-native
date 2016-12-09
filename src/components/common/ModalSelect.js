import React, { Component } from 'react';
import { View, Modal, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

class ModalSelect extends Component {

  constructor() {

    super();

    this.state = {
      modalVisible: false,
      selected: 'please select'
    };
  }

  ComponentWillMount() {
    this.setState = {
      modalVisible: false,
      selected: 'none'
    };
  }

  onSelect(option) {
    this.setModalVisible(false);
    this.props.onChange({ prop: this.props.name, value: option.value });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderOptionList() {
    console.log(this.props.data); // an array as expected
    const options = this.props.data.map((option, i) => {
      return (
        <TouchableOpacity
          key={i}
          style={{ height: 50, width: 200, borderWidth: 1, borderColor: 'blue' }}
          onPress={() => this.onSelect(option)}
        >
          <View>
            <Text>{option.label}</Text>
          </View>
        </TouchableOpacity>
      );
    });
    return options;
  }

  renderChildren() {
    if (this.props.children) {
      return this.props.children;
    }

    return <Text>{this.state.selected}</Text>; // Can be removed
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={{ marginTop: 22 }}>
            <Text>OptionList</Text>
            {this.renderOptionList()}
          </View>
        </Modal>

        <TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
          {this.renderChildren()}
        </TouchableHighlight>

      </View>
    );
  }
}

export { ModalSelect };

