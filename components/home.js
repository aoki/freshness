import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Organization from '../components/organization'
import config from '../config/default'
import GithubCorner from 'react-github-corner';

export default class Home extends React.Component {

  render() {
    // TODO: Add /users
    const orgsDom = config.github.target.organizations.map((org, i) => {
      return <Organization orgName={org} key={i} />;
    });

    return (
      <div>
        <Header title="Freshness Pull Request"/>
        <ul>
          <li><Link href="/about">about</Link></li>
        </ul>
        <h1>Freshness Pull Request</h1>
        {orgsDom}
        <GithubCorner href='https://github.com/ringohub/freshness' bannerColor='#FD6C6C'/>
      </div>
    );
  }
}
