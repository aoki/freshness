import React, {Component} from 'react';
import Immutable from 'immutable';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as PullRequestActions from '../actions/pull-request-actions'
import Repository from '../components/repository'

import * as log from '../debug/log'

class Repositories extends Component {

  componentWillMount() {
    this.props.actions.gerRepositories(this.props.org);
  }

  render() {
    const repos = this.props[this.props.org] || [];
    const reposDom = repos.map( (repo, i) => {
      return <Repository key={i} org={this.props.org} repo={repo} actions={this.props.actions}/>
    })

    return (
      <div>
        {reposDom}
      </div>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
