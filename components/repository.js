import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {maybe} from 'perchance';
import {Map} from 'immutable';

import * as PullRequestActions from '../actions/pull-request-actions';
import {freshness} from '../util/freshness';
import {applovals} from '../util/reviewer';

const avatarBaseStyle = {
  height: '20px',
  width: '20px',
  borderRadius: '2px',
  marginRight: '5px'
};
const userAvatar = avatarBaseStyle;
const approvalUserAvatar = Map(avatarBaseStyle).set('filter', 'opacity(10%)').toJS();

class Repository extends Component {

  static propTypes() {
    return {
      members: React.PropTypes.arrayOf(React.PropTypes.Object),
      repo: React.PropTypes.Object
    };
  }

  render() {
    const members = this.props.members;
    const prs = maybe(this.props.repo.pullRequests).map(prs => prs.map(
      (pr, i) => {
        const fresh = maybe(pr.updated_at).map(v => freshness(v).toFixed(2)).unwrap(v => {
          if (v <= 3) {
            const fresh = {fontSize: '0.6rem', marginLeft: '10px', color: '#5AF78E'};
            return <span key={i} style={fresh}>{v} days ago</span>;
          } else if (v <= 5) {
            const normal = {fontSize: '0.6rem', marginLeft: '10px', color: '#FFEA68'};
            return <span key={i} style={normal}>{v} days ago</span>;
          }
          const rotten = {fontSize: '0.6rem', marginLeft: '10px', color: '#FF5C57'};
          return <span key={i} style={rotten}>{v} days ago</span>;
        }, <span/>);
        const reviewers = applovals(pr.body).map((e, i) => {
          const avatar = members.map(v => v[e.user]).unwrap(
            v => {
              return {
                url: v.avatar_url,
                page: v.html_url
              };
            },
            _ => {
              return {
                url: 'https://octodex.github.com/images/spectrocat.png',
                page: 'https://github.com/'
              };
            }
          );
          const avatarImage = e.approval ? approvalUserAvatar : userAvatar;
          return (
            <span key={i}>
              <a href={avatar.page}>
                <img style={avatarImage} src={avatar.url} alt={e.user}/>
              </a>
            </span>
          );
        });
        return (
          <li key={i} className="pullrequest">
            <a href={pr.user.html_url} target="_brank">
              <img src={pr.user.avatar_url} style={userAvatar} alt=""/>
            </a>
            <a href={pr.html_url} target="_blank">#{pr.number} {pr.title}</a>
            <span style={{marginLeft: '10px'}}>{reviewers}</span>
            {fresh}
          </li>
        );
      }
    )).unwrap(
      v => <ul>{v}</ul>,
      <div/>
    );

    return (
      <div>
        <h3>{this.props.repo.repository.name}</h3>
        {prs}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pulls: state.PullRequest
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      ...bindActionCreators(PullRequestActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
