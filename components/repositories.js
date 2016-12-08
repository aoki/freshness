import React, {Component} from 'react';
import Repository from '../components/repository'

class Repositories extends Component {

  render() {
    const repos = Array.from(this.props.repos || []);
    const reposDom = repos.map( (repo, i) => {
      return <Repository key={i} org={this.props.org} repo={repo} actions={this.props.actions}/>
    });

    return (
      <div>{reposDom}</div>
    );
  }

}
export default Repositories;
