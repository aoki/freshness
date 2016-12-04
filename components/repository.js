import React, {Component} from 'react';
import css from 'next/css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PullRequestActions from '../actions/pull-request-actions'

import * as log from '../debug/log'

class Repository extends Component {
  componentDidMount() {
    // console.log(`%cProps ${this.props.repo}`, 'color:red;');
    // console.dir(this.props);
    // this.props.actions.getPullRequests(this.props.org, this.props.repo);
  }

  render() {
    return (
      <div>
        <h3 className={style}>{this.props.repo}</h3>
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
