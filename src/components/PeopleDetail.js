import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import * as actions from '../actions';
import {getTheme} from 'react-native-material-kit';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const theme = getTheme();

class PeopleDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require('../images/background.jpg')}
            style={[theme.cardImageStyle, styles.image]}
          />
          <EvilIcon style={styles.icon} name={'user'} size={100} />
          <SimpleIcon
            style={styles.closeIcon}
            name={'close'}
            size={30}
            onPress={() => this.props.nonePerson()}
          />
          <Text style={[theme.cardTitleStyle, styles.title1]}>
            {this.props.personSelected.firstName}
          </Text>
          <Text style={[theme.cardTitleStyle, styles.title2]}>
            {this.props.personSelected.company}
          </Text>
          <View style={styles.textArea}>
            <MaterialIcons style={styles.textIcons} name={'phone'} size={40} />
            <Text style={[theme.cardContentStyle]}>
              {this.props.personSelected.phone}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcons style={styles.textIcons} name={'email'} size={40} />
            <Text style={[theme.cardContentStyle]}>
              {this.props.personSelected.email}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcons
              style={styles.textIcons}
              name={'assignment'}
              size={40}
            />
            <Text style={[theme.cardContentStyle]}>
              {this.props.personSelected.project}
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../images/call.png')}
                style={styles.actionImage}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../images/email.png')}
                style={styles.actionImage}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../images/sms.png')}
                style={styles.actionImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.actionArea}>
            <Text>Call</Text>
            <Text>Text</Text>
            <Text>Email</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {personSelected: state.personSelected};
};

export default connect(mapStateToProps, actions)(PeopleDetail);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
  title1: {
    top: 10,
    left: 80,
    fontSize: 24,
  },
  title2: {
    top: 35,
    left: 82,
    fontSize: 18,
  },
  image: {
    flex: 0,
    height: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 10,
    color: 'rgba(233,166,154,0.8)',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  textArea: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
    width: 260,
  },
  textIcons: {
    color: '#26a69a',
  },
  actionArea: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
