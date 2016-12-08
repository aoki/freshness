import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as PullRequestActions from '../actions/pull-request-actions'
import Repositories from '../components/repositories'

class Oraganization extends React.Component {

  componentWillMount() {
    this.props.actions.gerRepositories(this.props.org);
  }

  render() {
    const org = this.props.org;
    const repos = () => {
      if(this.props.hasOwnProperty(org) && this.props[org].length > 0) {
        return (
          <div>
            <h2>{this.props.org}</h2>
            <Repositories actions={this.props.actions} repos={this.props[this.props.org]} />
          </div>
        );
      }
      return <div></div>;
    }

    return repos();
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.Repository;
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      ...bindActionCreators(PullRequestActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Oraganization);
