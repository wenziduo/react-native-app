import React from 'react';
import {Provider} from 'react-redux';
import NavigationContainer from './NavigationContainer';
import store from './store/store';

class ReduxContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );
  }
}

export default ReduxContainer;
