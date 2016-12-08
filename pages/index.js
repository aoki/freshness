import React from 'react'
import Link from 'next/link'

import {Provider} from 'react-redux';
import configureStore from '../stores/store';

import Home from '../components/home'
import * as Config from '../config/default'

const store = configureStore();

export default class extends React.Component {
  static getInitialProps(ctx) {
  //   console.log('INITIAL PROPS');
  //   console.dir(ctx.pathname);
  //   console.dir(ctx.query);
  //   console.dir(process.env.PR_GITHUB_TOKEN);
  //   // console.dir(ctx.req);
  //   // console.dir(ctx.res);
  //   // console.dir(ctx.xhr)
  //   // console.dir(ctx.err);
  //   return {};
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Home/>
        </Provider>
      </div>
    );
  }
}
