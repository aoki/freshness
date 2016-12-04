import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Organization from '../components/organization'
import config from '../config/default'

export default class Home extends React.Component {
  render() {
    // TODO: Add /users
    const orgsDom = config.github.target.organizations.map((org, i) => {
      return <Organization org={org} key={i} />;
    });

    return (
      <div>
        <Header title="Hello Next"/>
        <ul>
          <li><Link href="/about">about</Link></li>
        </ul>
        <h1>Pull Reqest List</h1>
        {orgsDom}
      </div>
    );
  }
}
