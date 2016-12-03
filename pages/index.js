import React from 'react'
import Link from 'next/link'

import {Provider} from 'react-redux';
import configureStore from '../stores/store';

import Home from '../components/home'

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <div>
        <Provider store={store}>
          <Home/>
        </Provider>
      </div>
    );
  }
});
