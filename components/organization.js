import React from 'react'
import Repositories from '../components/repositories'

import * as log from '../debug/log'

export default class Oraganization extends React.Component {

  componentDidMount() {
  }

  render() {
    // log.container('Oraganization');
    // console.dir(this.props);
    return (
      <div>
        <h2>{this.props.org}</h2>
        <Repositories actions={this.props.actions} org={this.props.org} />
      </div>
    );
  }
}
