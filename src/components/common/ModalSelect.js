import React, { Component } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';

class ModalSelect extends Component {

  constructor() {
    super();

    this.state = {
      modalVisible: false,
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
          <View style={styles.labelContainer}>
            <Text>{option.label}</Text>
          </View>
        </TouchableOpacity>
      );
    });
    return options;
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>

        <Modal
          animationType={'slide'}
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <View style={{ alignItems: 'center' }}>
            <View style={styles.modalContentContainer}>
              <View style={styles.topicTextContainer}>
                <Text style={styles.topicTextModal}>{this.props.topic}</Text>
              </View>
              {this.renderOptionList()}
            </View>
          </View>
        </Modal>

        <View style={styles.topicTextContainer}>
          <Text style={styles.topicText}>{this.props.topic}</Text>
        </View>

        <TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
          <TextInput
            style={{ height: 30, padding: 10, borderColor: '#ccc', borderWidth: 1 }}
            editable={false}
            value={this.props.value}
          />
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
  labelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContentContainer: {
    marginTop: 100,
    width: 300,
    backgroundColor: '#eee',
    padding: 10
  },
  topicText: {
    fontSize: 16,
  },
  topicTextContainer: {
    paddingBottom: 10
  },
  topicTextModal: {
    fontWeight: 'bold'
  },
};

export { ModalSelect };

