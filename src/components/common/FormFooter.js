import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FormFooter = () => {
  return (
    <View style={styles.footerContainer}>

      <TouchableOpacity>
        <View>
          <Text>
            Prev
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightButton}>
        <View>
          <Text>
            Next
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footerContainer: {
    height: 35,
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  rightButton: {
    alignSelf: 'flex-end'
  }
};

export { FormFooter };
