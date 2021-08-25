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

class DetailView extends React.Component {
  update() {
    this.props.updateContact(this.props.personSelected);
  }
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
            onPress={() => this.props.noneSelected()}
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
          <View style={styles.editDeleteArea}>
            <TouchableOpacity onPress={() => this.update()}>
              <MaterialIcons
                style={styles.editIcon}
                name={'autorenew'}
                size={40}
              />
              <Text style={[theme.cardContentStyle]}>{'EDIT'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.deleteContact(this.props.personSelected._id);
              }}>
              <MaterialIcons
                style={styles.deleteIcon}
                name={'delete-forever'}
                size={40}
              />
              <Text style={[theme.cardContentStyle]}>{'DELETE'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionArea}>
            <TouchableOpacity>
              <Image
                source={require('../images/call.png')}
                style={styles.actionImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../images/email.png')}
                style={styles.actionImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../images/sms.png')}
                style={styles.actionImage}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.actionArea}>
          <Text>Call</Text>
          <Text>Text</Text>
          <Text>Email</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {personSelected: state.personSelected, toUpdate: state.toUpdate};
};

export default connect(mapStateToProps, actions)(DetailView);

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
    width: 390,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    left: 325,
    color: 'red',
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
  editIcon: {
    color: '#26a6e4',
  },
  sections: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    width: 100,
  },
  deleteIcon: {
    color: '#e9a69a',
  },
  editDeleteArea: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(211,211,211, 0.3)',
    marginBottom: 10,
    marginTop: 10,
  },
  actionImage: {
    width: 100,
    height: 100,
  },
});
