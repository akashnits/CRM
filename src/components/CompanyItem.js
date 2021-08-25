import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {getTheme} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

const theme = getTheme();

/* we have connected actions to props using react-redux */
const CompanyItem = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/background.jpg')}
        style={[theme.cardImageStyle, styles.image]}
      />
      <Icon style={styles.icon} name={'business'} size={100} />
      <Text style={[theme.cardTitleStyle, styles.title]}>
        {props.companies.company}
      </Text>

      {props.companies.names.map(name => {
        return (
          <Text style={[theme.cardActionStyle, styles.action]}>
            {name.firstName} {name.lastName}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 100,
    fontSize: 24,
  },
  image: {
    height: 100,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
    paddingBottom: 5,
    paddingTop: 5,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

export default CompanyItem;
