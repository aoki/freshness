import React from 'react'
import Head from 'next/head'

class Header extends React.Component {
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
