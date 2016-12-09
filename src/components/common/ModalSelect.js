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
    this.props.onChange({ prop: this.props.name, value: 'Seleccionar', isFilled: false });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderIcon() {
    if (this.props.isFilled) {
      return <Icon name='check' size={18} style={{ alignSelf: 'flex-end', color: 'green' }} />;
    }
    return <Icon name='circle-thin' size={18} style={{ alignSelf: 'flex-end' }} />;
  }

  renderModalIcon(label) {
    if (label === this.props.value) {
      return <Icon name='dot-circle-o' size={18} style={{ alignSelf: 'flex-end' }} />;
    }
    return <Icon name='circle-thin' size={18} style={{ alignSelf: 'flex-end' }} />;
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
            <View style={{ flex: 15, paddingLeft: 5 }}>
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
                <TouchableOpacity style={styles.clearButton} onPress={() => this.onClear()}>
                  <Text>
                    Clear
                  </Text>
                </TouchableOpacity>
              </View>
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
    height: 600
  },
  overlay: {
    alignItems: 'center',
    height,
    width,
    backgroundColor: '#f2f2f2'
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
  clearButton: {
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    alignSelf: 'center'
  }
};

export { ModalSelect };

