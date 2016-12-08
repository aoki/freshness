import React, {Component} from 'react';
import css from 'next/css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PullRequestActions from '../actions/pull-request-actions'

import * as log from '../debug/log'

class Repository extends Component {
  componentWillMount() {
    console.log(`%cProps ${this.props.repo.repository.name}`, 'color:red;');
    console.dir(this.props);
  }

  render() {
    const prs = this.props.repo.pullRequests.map( (pr, i) => {
      return <li key={i}>{pr.title}</li>;
    } );
    return (
      <div>
        <h3>{this.props.repo.repository.name}</h3>
        <ul>{prs}</ul>
      </div>
    );
  }
}
const style = css({
  paddingLeft: '20px'
});

const mapStateToProps = (state, ownProps) => {
  return {
    pulls: state.PullRequest
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      ...bindActionCreators(PullRequestActions, dispatch)
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Repository);
