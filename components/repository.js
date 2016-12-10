import React, {Component} from 'react';
import css from 'next/css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PullRequestActions from '../actions/pull-request-actions'

import {maybe} from 'perchance';

import * as log from '../debug/log'
import {freshness} from '../util/freshness'
import {applovals} from '../util/reviewer'

class Repository extends Component {

  render() {
    const members = this.props.members;
    const prs = maybe(this.props.repo.pullRequests).map( prs => prs.map(
      (pr, i) => {
        const fresh = maybe(pr.updated_at).map(v => freshness(v).toFixed(2)).unwrap(v => {
          if(v <= 3) {
            const fresh = css({fontSize: '0.6rem', marginLeft: '10px', color: '#5AF78E'});
            return <span key={i} className={fresh}>{v} days ago</span>
          } else if (v <= 5) {
            const normal = css({fontSize: '0.6rem', marginLeft: '10px', color: '#FFEA68'});
            return <span key={i} className={normal}>{v} days ago</span>
          }
          const rotten = css({fontSize: '0.6rem', marginLeft: '10px', color: '#FF5C57'});
          return <span key={i} className={rotten}>{v} days ago</span>
        }, _ => <span></span>);
        const reviewers = applovals(pr.body).map( (e, i) => {
          const avatar = members.map(v => v[e.user]).unwrap(
            v => { return {
              url: v.avatar_url,
              page: v.html_url
            }},
            _ => {return {
              url: 'https://octodex.github.com/images/spectrocat.png',
              page: 'https://github.com/'
            }}
          );
          const avatarImage = e.approval ? approvalUserAvatar : userAvatar;
          console.dir(userAvatar)
          return (
            <span key={i}>
              <a href={avatar.page}>
                <img className={avatarImage} src={avatar.url} alt={e.user}/>
              </a>
            </span>
          );
        });
        return (
          <li key={i}>
            <a href={pr.user.html_url} target="_brank">
              <img src={pr.user.avatar_url} className={userAvatar} alt=""/>
            </a>
            <a href={pr.html_url} target="_blank">#{pr.number} {pr.title}</a>
            <span className={css({marginLeft: '10px'})}>{reviewers}</span>
            {fresh}
          </li>
        );
      }
    )).unwrap(
      v => <ul>{v}</ul>,
      _ => <div></div>
    );

    return (
      <div>
        <h3>{this.props.repo.repository.name}</h3>
        {prs}
      </div>
    );
  }
}

const x = {
  height: '20px',
  width: '20px',
  borderRadius: '2px',
  marginRight: '5px'
};
const userAvatar = css(x);
import {Map} from 'immutable';
// const approvalUserAvatar = css(Map(x).set('filter', 'grayscale(100%)').toJS());
const approvalUserAvatar = css(Map(x).set('filter', 'opacity(10%)').toJS());
console.dir(approvalUserAvatar);

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
