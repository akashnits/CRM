import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, FlatList, View} from 'react-native';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';
import * as actions from '../actions/index';

class PeopleList extends React.Component {
  componentWillMount() {
    this.props.loadInitialContacts();
  }

  renderInitialView() {
    if (this.props.detailView) {
      return <PeopleDetail />;
    } else {
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
  render() {
    return <View style={styles.container}>{this.renderInitialView()}</View>;
  }
}

const mapStateToProps = state => {
  return {people: state.people, detailView: state.detailView};
};

export default connect(mapStateToProps, actions)(PeopleList);

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
