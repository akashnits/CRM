import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, View, Button} from 'react-native';
import * as actions from '../actions/index';
import {LogBox} from 'react-native';
import {MKColor, Textfield} from 'react-native-material-kit';
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

class UpdatePerson extends React.Component {
  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }

  onUpdatePress() {
    const {firstName, lastName, phone, email, company, project, _id} =
      this.props;

    this.props.saveContact({
      firstName,
      lastName,
      phone,
      email,
      company,
      project,
      _id,
    });

    this.props.navigation.navigate('People');
  }

  render() {
    return (
      <ScrollView showsVerticalScroll={false}>
        <View style={styles.form}>
          <Text style={styles.title}>Add person form</Text>
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'First name...'}
            tintcolor={MKColor.Teal}
            value={this.props.firstName}
            onTextChange={value =>
              this.props.formUpdate({prop: 'firstName', value})
            }
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Last name...'}
            tintcolor={MKColor.Teal}
            value={this.props.lastName}
            onTextChange={value =>
              this.props.formUpdate({prop: 'lastName', value})
            }
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Phone number...'}
            tintcolor={MKColor.Teal}
            value={this.props.phone}
            onTextChange={value =>
              this.props.formUpdate({prop: 'phone', value})
            }
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Email...'}
            tintcolor={MKColor.Teal}
            value={this.props.email}
            onTextChange={value =>
              this.props.formUpdate({prop: 'email', value})
            }
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Company...'}
            tintcolor={MKColor.Teal}
            value={this.props.company}
            onTextChange={value =>
              this.props.formUpdate({prop: 'company', value})
            }
          />
          <Textfield
            textInputStyle={styles.fieldStyles}
            placeholder={'Project...'}
            tintcolor={MKColor.Teal}
            value={this.props.project}
            onTextChange={value =>
              this.props.formUpdate({prop: 'project', value})
            }
          />
        </View>
        <View style={styles.updateButton}>
          <Button
            onPress={this.onUpdatePress.bind(this)}
            title="Update"
            color="#841584">
            <Text {...buttonTextProps}>Add</Text>
          </Button>
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
  updateButton: {
    marginTop: 40,
  },
  title: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  const {firstName, lastName, phone, email, company, project, _id} = state;
  return {firstName, lastName, phone, email, company, project, _id};
};

export default connect(mapStateToProps, actions)(UpdatePerson);
