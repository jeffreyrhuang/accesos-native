import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FormFooter = (props) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.button} onPress={props.onPressPrev}>
        <View>
          <Text style={styles.text}>
            Atras
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={props.onPressNext}>
        <View>
          <Text style={styles.text}>
            Siguiente
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footerContainer: {
    height: 40,
    backgroundColor: '#eee',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1
  },
  button: {
    height: 40,
    width: 67,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#163D7D',
    fontWeight: 'bold'
  }
};

export { FormFooter };
