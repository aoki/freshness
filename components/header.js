import React, {Component, PropTypes} from 'react';
import Head from 'next/head';

class Header extends Component {

  static propTypes() {
    return {title: PropTypes.string};
  }

  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/static/index.css"/>
        <link rel="icon shortcut" href="/static/favicon.icon" type="image/x-icon"/>
        <link rel="icon" sizes="any" href="/static/favicon.svg" type="image/svg+xml"/>
        <link rel="mask-icon" href="/static/favicon.svg"/>
      </Head>
    );
  }
}

export default Header;
