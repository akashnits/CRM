import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {getTheme} from 'react-native-material-kit';
import * as actions from '../actions';
import Icon from 'react-native-vector-icons/EvilIcons';

const theme = getTheme();

/* we have connected actions to props using react-redux */
const PeopleItem = props => {
  return (
    <TouchableWithoutFeedback onPress={() => props.selectPerson(props.people)}>
      <View style={styles.container}>
        <Image
          source={require('../images/background.jpg')}
          style={[theme.cardImageStyle, styles.image]}
        />
        <Icon style={styles.icon} name={'user'} size={100} />
        <Text style={[theme.cardTitleStyle, styles.title]}>
          {props.people.firstName} {props.people.lastName}
        </Text>
        <Text style={[theme.cardActionStyle, styles.action]}>
          {props.people.company}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

// const mapStateToProps = state => {
//   return {people: state.people};
// };

export default connect(null, actions)(PeopleItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexWrap: 'wrap',
  },
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 24,
  },
  image: {
    height: 100,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
});
