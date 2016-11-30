import React, { Component } from 'react';
import { ScrollView, View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { Prompt, Button } from './common';

class FillDimensions extends Component {

  onSave() {
    this.props.createPuerta();
  }

  renderImage() {
    const { orientation, segmentar } = this.props;
    const { image, derInput1, derInput2, input} = styles;

    if (orientation === 'Derecha' && segmentar === false) {
      return(
        <Image style={image} source={require('../img/fill-der.png')}>
          <View style={derInput1}>
            <TextInput style={input} />
          </View>
          <View style={derInput2}>
            <TextInput style={input} />
          </View>
        </Image>
      );
    } else if (orientation === 'Izquierda' && segmentar === false) {
      return(
        <Image style={image} source={require('../img/fill-izq.png')}>
          <View style={derInput2}>
            <TextInput style={input} />
          </View>
        </Image>
      );
    } else if (orientation === 'Derecha' && segmentar) {
      return(
        <Image style={[image, { marginLeft: 3 }]} source={require('../img/fill-seg-der.png')}>
          <View>
          </View>
        </Image>
      );
    } else if (orientation === 'Izquierda' && segmentar) {
      return(
        <Image style={image} source={require('../img/fill-seg-izq.png')}>
          <View>

          </View>
        </Image>
      );
    }
  }

  render() {
    return(
      <ScrollView>
        <Prompt promptText="Fill in dimensions" />
        <View style={styles.imageContainer}>
          {this.renderImage()}
        </View>
        <Button style={styles.button} onPress={this.onSave.bind(this)}>
          Save
        </Button>
      </ScrollView>
    );
  }
}

const styles = {
  image: {
    width: 230,
    height: 400
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
    left: 72,
    bottom: 348
  },
  derInput2: {
    position: 'absolute',
    width: 50,
    height: 20,
    left: 180,
    bottom: 150
  },
  input: {
    backgroundColor: '#eee',
    flex: 1
  },
  button: {
    marginTop: 10
  }
};

const mapStateToProps = state => {
  return {
    orientation: state.orientation.orientation,
    segmentar: state.traits.segmentar
  };
};

export default connect(mapStateToProps)(FillDimensions);
