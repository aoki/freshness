import React, {Component, PropTypes} from 'react';
import Head from 'next/head';
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

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
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      </Head>
    );
  }
}

export default Header;
