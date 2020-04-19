import React from 'react';
import {Loading as GlobalPageLoading, StatusBar} from '../../component';

class GlobalContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalPageLoading />
        <StatusBar />
      </React.Fragment>
    );
  }
}
export default GlobalContainer;
