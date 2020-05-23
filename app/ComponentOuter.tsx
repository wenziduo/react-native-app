import * as React from 'react';
import {View, Text} from 'react-native';

class A extends React.Component {
  state = {num: 0};
  componentDidMount() {
    setInterval(() => {
      this.setState({num: Math.random() * 10});
    }, 1000);
  }
  render() {
    console.warn('num', this.state.num);
    return <View>{this.props.children}</View>;
  }
}
export default function layoutComponent(WarpComponent: React.ReactNode) {
  return class ComponentOuter extends React.Component {
    render() {
      return (
        <A>
          <WarpComponent state={this.state} />
        </A>
      );
    }
  };
}
