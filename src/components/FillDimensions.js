import React, { Component } from 'react';
import { ScrollView, View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';

class FillDimensions extends Component {

  renderImage() {
    const { orientation, segmentar } = this.props;

    if (orientation === "Derecha" && segmentar === false) {
      return(
        <Image source={require('../img/fill-der.png')}>
          <View style={styles.derInput1}>
            <TextInput style={styles.input} />
          </View>
        </Image>
      )
    } else if (orientation === "Izquierda" && segmentar === false) {
      return(<Image source={require('../img/fill-izq.png')} />)
    } else if (orientation === "Derecha" && segmentar) {
      return(<Image source={require('../img/fill-seg-der.png')} />)
    } else if (orientation === "Izquierda" && segmentar) {
      return(<Image source={require('../img/fill-seg-izq.png')} />)
    }
  }

  render() {
    return(
      <ScrollView>
        <View style={styles.imageContainer}>
          {this.renderImage()}
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  imageStyle: {
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  derInput1: {
    position: 'absolute',
    width: 50,
    height: 20,
    left: 78,
    bottom: 333
  },
  input: {
    backgroundColor: '#eee',
    flex: 1
  }
}

const mapStateToProps = state => {
  return {
    orientation: state.orientation.orientation,
    segmentar: state.traits.segmentar
  }
};

export default connect(mapStateToProps)(FillDimensions);