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

  onSelect(option) {
    this.setModalVisible(false);
    this.props.onChange({ prop: this.props.name, value: option.value });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderOptionList() {
    const options = this.props.data.map((option, i) => {
      return (
        <TouchableOpacity
          key={i}
          style={styles.modalSelect}
          onPress={() => this.onSelect(option)}
        >
          <View style={styles.textContainer}>
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
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 100, width: 300, backgroundColor: '#eee' }}>
              <Text>OptionList</Text>
              {this.renderOptionList()}
            </View>
          </View>
        </Modal>

        <TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
          {this.renderChildren()}
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = {
  modalSelect: {
    height: 50,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 5
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { ModalSelect };

