import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import PeopleItem from './PeopleItem';

class PeopleList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.people}
          renderItem={({item}) => <PeopleItem people={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {people: state.people};
};

export default connect(mapStateToProps)(PeopleList);

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 20,
  },
  instructions: {
    fontStyle: 'italic',
    padding: 4,
  },
});
