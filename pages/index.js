import {Provider} from 'react-redux';
import p from '../package.json';

import configureStore from '../stores/store';
import Home from '../components/home';

const store = configureStore();

export default class extends React.Component {
  static getInitialProps() {
    return {version: p.version};
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Home version={this.props.version}/>
        </Provider>
      </div>
    );
  }
}
