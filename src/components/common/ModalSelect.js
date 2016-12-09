import React, { Component } from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ModalSelect extends Component {

  constructor() {
    super();

    this.state = {
      modalVisible: false,
    };
  }

  onSelect(option) {
    this.setModalVisible(false);
    this.props.onChange({ prop: this.props.name, value: option.label, isFilled: true });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderIcon() {
    if (this.props.isFilled) {
      return (
        <Icon name='check' size={18} style={{ alignSelf: 'flex-end', color: 'green' }} />
      );
    }
    return (
      <Icon name='chevron-down' size={18} style={{ alignSelf: 'flex-end' }} />
    );
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

        <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
          <View style={styles.selectionContainer}>
            <View style={{ flex: 4 }}>
              <Text>
                {this.props.value}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              {this.renderIcon()}
            </View>
          </View>
        </TouchableOpacity>

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
  selectionContainer: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    padding: 5,
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
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

