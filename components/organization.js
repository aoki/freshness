import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import css from 'next/css';

import {maybe} from 'perchance';

import * as PullRequestActions from '../actions/pull-request-actions';
import * as OrganizationActions from '../actions/organization-actions';
import Repositories from '../components/repositories';

const avatarStyle = css({
  width: '32px', height: '32px',
  borderRadius: '3px',
  background: 'white',
  padding: '2px', marginRight: '10px'
});

class Oraganization extends Component {

  static propTypes() {
    return {
      actions: React.PropTypes.objectOf(React.PropTypes.function),
      orgName: React.PropTypes.string,
      org: React.PropTypes.object,
      repo: React.PropTypes
    };
  }

  componentWillMount() {
    this.props.actions.gerRepositories(this.props.orgName);
    this.props.actions.getOrganization(this.props.orgName);
  }

  render() {
    const org = this.props.orgName;
    const members = maybe(this.props.org[org]).map(v => v.members);
    const orgAvatar = maybe(this.props.org[org]).map(v => v.avatar_url).unwrap(
      v => v,
      _ => 'https://octodex.github.com/images/spectrocat.png'
    );
    const repos = maybe(this.props.repo[org]).map(v => v.length > 0 ? v : undefined).unwrap(
      repo =>
        <div>
          <h2><img id="{org}-avatar" className={avatarStyle} src={orgAvatar} alt="{org} avatar"/>{org}</h2>
          <Repositories actions={this.props.actions} repos={repo} members={members}/>
        </div>,
      _ => <div/>
    );

    return repos;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {repo: state.Repository, org: state.Organization, ...ownProps};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      ...bindActionCreators(PullRequestActions, dispatch),
      ...bindActionCreators(OrganizationActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Oraganization);
