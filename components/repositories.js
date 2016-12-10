import React, {Component} from 'react';
import Repository from '../components/repository';

import {maybe} from 'perchance';

class Repositories extends Component {

  render() {
    const repos = maybe(this.props.repos).map( repos =>
      repos.map( (repo, i) => {
        return <Repository key={i} org={this.props.org} repo={repo} members={this.props.members} actions={this.props.actions}/>
      })
    ).unwrap(
      v => <div>{v}</div>,
      _ => <div></div>
    );

    return repos;
  }

}
export default Repositories;
