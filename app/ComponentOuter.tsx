import * as React from 'react';
import {View, Text} from 'react-native';

export default function layoutComponent(WarpComponent: React.ReactNode) {
  return class ComponentOuter extends React.Component {
    state = {num: 0};
    componentDidMount() {
      setInterval(() => {
        this.setState({num: Math.random() * 10});
      }, 1000);
    }
    render() {
      return <WarpComponent />;
    }
  };
}
