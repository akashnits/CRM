import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import * as actions from '../actions';

class AddPerson extends React.Component {
  render() {
    return (
      <View>
        <Text>company list</Text>
      </View>
    );
  }
}

export default connect(null, actions)(AddPerson);
