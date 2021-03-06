import React from 'react';
import {Provider} from 'react-redux';
import NavigationContainer from './NavigationContainer';
import store from './store/store';
import GlobalComponentList from './global/container';

class ReduxContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalComponentList />
        <NavigationContainer />
      </Provider>
    );
  }
}

export default ReduxContainer;
