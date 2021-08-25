import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import _ from 'lodash';
import CompanyItem from './CompanyItem';

class CompanyList extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <FlatList
          data={this.props.companies}
          renderItem={({item}) => <CompanyItem companies={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 40,
  },
  instructions: {
    fontStyle: 'italic',
    padding: 4,
  },
});

const mapStateToProps = state => {
  const people = state.people;

  const companies = _.chain(people)
    .groupBy('company')
    .map((value, key) => {
      return {
        company: key,
        names: value,
      };
    })
    .value();

  return {
    companies,
  };
};

export default connect(mapStateToProps)(CompanyList);
