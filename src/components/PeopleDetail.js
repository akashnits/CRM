import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import * as actions from '../actions';
import DetailView from './DetailView';
import UpdatePerson from './UpdatePerson';

class PeopleDetail extends React.Component {
  renderDetails() {
    if (this.props.toUpdate) {
      return <UpdatePerson />;
    } else {
      return <DetailView />;
    }
  }
  render() {
    return <View>{this.renderDetails()}</View>;
  }
}

const mapStateToProps = state => {
  return {toUpdate: state.toUpdate};
};

export default connect(mapStateToProps, actions)(PeopleDetail);
