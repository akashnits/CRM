/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import reducers from '../reducers/PeopleReducers';
import {StyleSheet, Text, View} from 'react-native';
import {createStore, compose, applyMiddleware} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import thunk from 'redux-thunk';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

const Tab = createMaterialBottomTabNavigator();

type props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={styles.barStyle}>
            <Tab.Screen
              name="People"
              options={{
                tabBarLabel: 'People',
                tabBarIcon: ({tintColor}) => (
                  <FontAwesome name={'user'} color={tintColor} size={30} />
                ),
              }}
              component={PeopleList}
            />
            <Tab.Screen
              name="Company"
              options={{
                tabBarLabel: 'Company',
                tabBarIcon: ({tintColor}) => (
                  <MaterialCommunityIcons
                    name={'archive'}
                    color={tintColor}
                    size={30}
                  />
                ),
              }}
              component={CompanyList}
            />
            <Tab.Screen
              name="AddPerson"
              options={{
                tabBarLabel: 'AddPerson',
                tabBarIcon: ({tintColor}) => (
                  <MaterialCommunityIcons
                    name={'plus'}
                    color={tintColor}
                    size={30}
                  />
                ),
              }}
              component={AddPerson}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barStyle: {
    backgroundColor: '#694fad',
  },
});

export default App;
