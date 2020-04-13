import React from 'react';
import {Provider} from 'react-redux';
import NavigationContainer from './NavigationContainer';
import store from './store/store';
// import GlobalComponentList from './global/container';
import {Loading} from './component';

class ReduxContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Loading />
        <NavigationContainer />
      </Provider>
    );
  }
}

export default ReduxContainer;
