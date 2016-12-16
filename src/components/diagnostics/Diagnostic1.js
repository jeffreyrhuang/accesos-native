import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { selectModalOption, updateInput, validateSection } from '../../actions';
import {
  Container,
  SectionHeader,
  ModalSelect,
  FormFooter,
  ValidationErrors,
  FormInput } from '../common';

class Diagnostic1 extends Component {

  renderErrors() {
    const errorList = this.props.errors.map((error, i) => {
      return (
        <ValidationErrors key={i}>
          {error.prop} {error.message}
        </ValidationErrors>
      );
    });
    return errorList;
  }

  render() {
    const { diag1, diag2 } = this.props;
    const FIELDS = { diag1, diag2 };  // Fields to validate

    return (
      <Container>
        <ScrollView>
          <SectionHeader>Estado del Portón</SectionHeader>
          {this.renderErrors()}
          <ModalSelect
            name={'diag1'}
            topic={'1. La puerta o portón se mueve libre y con facilidad manualmente?*'}
            data={[
              { option: 'Si, puerta/portón se mueve con facilidad' },
              { option: 'No, daños en montaje o rodamiento' },
              { option: 'No, falta limpieza' },
              { option: 'No, portón muy grande duro de mover' }
            ]}
            isFilled={this.props.diag1.isFilled}
            value={this.props.diag1.value}
            onChange={({ prop, value, isFilled }) => {
              this.props.selectModalOption({ prop, value, isFilled });
            }}
          />

          <ModalSelect
            name={'diag2'}
            topic={'2. La puerta o portón llega a los extremos de forma precisa?* (En corredizos, requiere una luz antes del tope de 2cm)'}
            data={[
              { option: 'Si, La puerta llega exacta' },
              { option: 'No, puerta golpea al llegar (normal en algunos modelos)' },
              { option: 'No, puerta le falta llegar' },
              { option: 'No, puerta llega desviada' },
              { option: 'No, otro problema en puerta' }
            ]}
            isFilled={this.props.diag2.isFilled}
            value={this.props.diag2.value}
            onChange={({ prop, value, isFilled }) => {
              this.props.selectModalOption({ prop, value, isFilled });
            }}
          />

          <FormInput
            name={'diag3'}
            label={'3. Comentarios estado de puerta'}
            onChangeText={(text) => {
              this.props.updateInput({ prop: 'diag3', value: text });
            }}
            placeholder={'Entrar comentarios aqui'}
            multiline
            value={this.props.diag3.value}
          />
        </ScrollView>
        <FormFooter onPressNext={() => { this.props.validateSection(FIELDS); }} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { errors, diag1, diag2, diag3 } = state.diagnosticForm;

  return { errors, diag1, diag2, diag3 };
};

export default connect(mapStateToProps, {
  selectModalOption, validateSection, updateInput
})(Diagnostic1);
