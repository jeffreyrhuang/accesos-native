import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Iniciar Sesión
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            resizeMode={Image.resizeMode.contain}
            source={require('../img/accesoslogo.png')}
          />
        </View>
        <Text style={styles.errorText}>
          {this.props.error}
        </Text>
        <Card>
          <CardSection>
            <Input
              label='Email'
              placeholder='usuario@accesos.co.cr'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label='Contraseña'
              placeholder='secreta'
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  logo: {
    width: 270,
  },
  logoContainer: {
    alignItems: 'center'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
