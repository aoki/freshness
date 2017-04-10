import React from 'react';
import Link from 'next/link';
import GithubCorner from 'react-github-corner';

import Header from '../components/header';
import HeaderMenu from '../components/header-menu'
import Organization from '../components/organization';
import config from '../config/default';

export default class Home extends React.Component {

  render() {
    const orgsDom = config.github.target.organizations.map((org, i) => {
      return <Organization orgName={org} key={i}/>;
    });

    return (
      <div>
        <Header title="Freshness Pull Request"/>
        <HeaderMenu version={this.props.version}/>
        {orgsDom}
        <GithubCorner href="https://github.com/ringohub/freshness" bannerColor="#494C5F"/>
      </div>
    );
  }
}
