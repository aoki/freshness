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
      </Head>
    );
  }
}

export default Header;
