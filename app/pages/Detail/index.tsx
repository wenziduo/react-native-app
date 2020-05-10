import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://reactnative.cn/docs/webview'}}
        style={{marginTop: 20}}
      />
    );
  }
}
export default MyWeb;
