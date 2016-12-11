import React, {Component, PropTypes} from 'react';
import {maybe} from 'perchance';

import Repository from '../components/repository';

class Repositories extends Component {

  static propTypes() {
    return {
      repos: PropTypes.arrayOf(PropTypes.object),
      org: PropTypes.object,
      members: PropTypes.arrayOf(PropTypes.object),
      actions: PropTypes.objectOf(PropTypes.function)
    };
  }

  render() {
    const repos = maybe(this.props.repos).map(repos =>
      repos.map((repo, i) => {
        return (
          <Repository key={i} repo={repo}
            org={this.props.org}
            members={this.props.members}
            actions={this.props.actions}
            />
        );
      })
    ).unwrap(
      v => <div>{v}</div>,
      _ => <div/>
    );

    return repos;
  }

}
export default Repositories;
