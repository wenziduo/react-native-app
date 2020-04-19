import React from 'react';
import {connect} from 'react-redux';
import {StatusBar} from 'react-native';
import {GlobalReduxState} from '../../global/store/definition';

export interface StatusBarState {
  backgroundColor?: string;
  backgroudColor?: string;
  hidden?: boolean;
  barStyle?: 'light-content' | 'dark-content';
  translucent?: boolean;
  animated?: boolean;
}
export interface InitProps extends StatusBarState {
  global: GlobalReduxState;
}
class StatusBarComponent extends React.Component<InitProps> {
  render() {
    const {statusBar} = this.props.global;
    return <StatusBar {...statusBar} />;
  }
}

const mapStateToProps = (state: any) => ({
  global: state.global_reducer,
});
export default connect(mapStateToProps)(StatusBarComponent);
