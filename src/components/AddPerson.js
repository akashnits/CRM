import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, View} from 'react-native';
import * as actions from '../actions';
import {
  MKColor,
  Textfield,
  AccentRaisedButton,
} from 'react-native-material-kit';
import {Text} from 'react-native-paper';

const coloredButtonProps = {
  style: {
    marginLeft: 20,
    marginRight: 20,
  },
  rippleLayerColor: MKColor.Lime,
  onPress: () => console.log('button clicked'),
};

const buttonTextProps = {
  pointerEvents: 'none',
  style: {
    color: 'white',
    fontWeight: 'bold',
  },
};

class AddPerson extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScroll={false}>
        <View style={styles.form}>
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'First name...'}
            tintcolor={MKColor.Teal}
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Last name...'}
            tintcolor={MKColor.Teal}
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Phone number...'}
            tintcolor={MKColor.Teal}
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Email...'}
            tintcolor={MKColor.Teal}
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Company...'}
            tintcolor={MKColor.Teal}
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Project...'}
            tintcolor={MKColor.Teal}
          />
        </View>
        <View style={styles.addButton}>
          <AccentRaisedButton {...coloredButtonProps}>
            <Text {...buttonTextProps}>Add</Text>
          </AccentRaisedButton>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton: {
    marginTop: 40,
  },
});

export default connect(null, actions)(AddPerson);
