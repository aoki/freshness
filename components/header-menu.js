import React from 'react';
import Link from 'next/link';
import GithubCorner from 'react-github-corner';

import Header from '../components/header';
import Conf from '../config/default.js';

const style = <style jsx>{`
  a#title {
    text-decoration: none;
    color: white;
    font-size: 1.5em;
  }
  input#filter {
    margin-left: 20px;
    vertical-align: middle;
    color: white;
    font-size: 1em;
    font-weight: 100;
    font-family: inherit;
    background: none;
    border: none;
    border-bottom: solid 0.1em rgb(106, 108, 117);
    padding: 0px 1px;
    transition: all 0.4s;
    left: 0;
  }
  input#filter:focus {
    outline: none;
    border-color: #57C7FF;
    color: white;

  }
`}</style>

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Link href="/index"><a id="title">Freshness <span style={{fontSize: '8pt'}}> v{this.props.version} {Conf.app.execMode} mode</span></a></Link>
        <input id="filter" type="text" name="search" placeholder="filter keyword"/>
        {style}
      </div>
    );
  }
}
