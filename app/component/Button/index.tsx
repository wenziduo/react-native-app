import React from 'react';
import {TouchableOpacity, Button} from 'react-native';

interface InitProps {
  onPress: () => void;
  title: string;
  color?: string;
  accessibilityLabel?: string;
}
interface InitState {}
class ButtonComponent extends React.Component<InitProps, InitState> {
  render() {
    return (
      <TouchableOpacity>
        <Button
          onPress={this.props.onPress}
          title={this.props.title}
          color={this.props.color}
          accessibilityLabel={this.props.accessibilityLabel}
        />
      </TouchableOpacity>
    );
  }
}

export default ButtonComponent;
