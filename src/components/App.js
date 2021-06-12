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
import {createStore} from 'redux';
import PeopleList from './PeopleList';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

type props = {};
class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <PeopleList />
        </View>
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
  instructions: {
    fontStyle: 'italic',
    padding: 4,
  },
});

export default App;
