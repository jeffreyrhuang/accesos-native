import React, { Component } from 'react';
import { View, Modal, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

class ModalSelect extends Component {

  constructor() {
    super();

    this.state = {
      modalVisible: false
    };
  }

  onSelect(option) {
    this.setModalVisible(false);
    this.props.onChange({ prop: this.props.name, value: option.label, isFilled: true });
  }

  onClear() {
    this.setModalVisible(false);
    this.props.onChange({ prop: this.props.name, value: '', isFilled: false });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderModalIcon(label) {
    if (label === this.props.value) {
      return <Icon name='check' size={18} style={{ alignSelf: 'flex-end', color: 'green' }} />;
    }
    return <Icon name='circle-thin' size={18} style={{ alignSelf: 'flex-end' }} />;
  }

  renderClearButton() {
    if (this.props.value) {
      return (
        <TouchableOpacity style={styles.modalButton} onPress={() => this.onClear()}>
          <Text>
            Clear
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.modalButton} onPress={() => this.setModalVisible(false)}>
        <Text>
          Cancel
        </Text>
      </TouchableOpacity>
    );
  }

  renderTopic() {
    if (this.props.isFilled) {
      return (
        <View>
          <View>
            <Text style={styles.topicText}>{this.props.topic}</Text>
          </View>
          <TouchableOpacity onPress={() => this.setModalVisible(true)}>
            <View style={styles.selectionContainer}>
              <View style={{ flex: 8 }}>
                <Text>
                  {this.props.value}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name='check' size={18} style={{ alignSelf: 'flex-end', color: 'green' }} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.setModalVisible(true)}>
        <View style={styles.selectionContainer}>
          <View style={{ flex: 10 }}>
            <Text style={styles.topicText}>{this.props.topic}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Icon name='circle-thin' size={18} style={{ alignSelf: 'flex-end' }} />
          </View>
        </View>
      </TouchableOpacity>
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
          <View style={styles.optionContainer}>
            <View style={{ flex: 1 }}>
              {this.renderModalIcon(option.label)}
            </View>
            <View style={{ flex: 15, paddingLeft: 10 }}>
              <Text>{option.label}</Text>
            </View>
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
          <View style={styles.overlay}>
            <View style={styles.modal}>
              <View>
                <View style={styles.topicTextContainer}>
                  <Text style={styles.topicTextModal}>{this.props.topic}</Text>
                </View>
                {this.renderOptionList()}
              </View>
              <View>
                {this.renderClearButton()}
              </View>
            </View>
          </View>
        </Modal>
        {this.renderTopic()}
      </View>
    );
  }
}

const styles = {
  modalSelect: {
    height: 50,
    alignSelf: 'stretch',
    marginBottom: 5
  },
  optionContainer: {
    padding: 5,
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    width: 330,
    height: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  overlay: {
    alignItems: 'center',
    height,
    width,
    backgroundColor: '#e6e6e6'
  },
  selectionContainer: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  topicText: {
    fontSize: 16,
  },
  topicTextModal: {
    fontWeight: 'bold'
  },
  modalButton: {
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    alignSelf: 'center'
  }
};

export { ModalSelect };

