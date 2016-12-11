import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from '../stores/store';
import Home from '../components/home';

const store = configureStore();

export default class extends Component {
  static getInitialProps() {
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
