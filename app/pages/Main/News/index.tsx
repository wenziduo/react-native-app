import React from 'react';
import {connect} from 'react-redux';
import {ScrollView, Text, View, Button} from 'react-native';
import action from './store/action';
import globalAction from '../../../global/store/action';
import {ModelState} from './store/reducer';

interface InitProps {
  thisModel: ModelState;
  globalModel?: any;
  dispatch: (params: any) => void;
  addCount: (params: any) => void;
  addGlobalCount: (params: any) => void;
}
interface InitState {}
class MainNewsComponent extends React.Component<InitProps, InitState> {
  componentDidMount() {
    // console.warn(this.props.thisModel.count);
  }
  handleAdd = () => {
    this.props.addCount({count: 2});
  };
  handleGlobalAdd = () => {
    // this.props.addGlobalCount({count: 5});
    this.props.dispatch({type: 'SAGA_GLOBAL_ADD', payload: {count: 8}});
  };
  render() {
    console.warn('this.props.thisModel', this.props.thisModel);
    const {count} = this.props.thisModel;
    const {count: globalCount} = this.props.globalModel;
    console.warn('count', count);
    return (
      <ScrollView>
        <View>
          <Text>当前model</Text>
          <Button
            title={`+添加${count}`}
            color="#841584"
            onPress={this.handleAdd}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>
          <Text>全局model</Text>
          <Button
            title={`+全局添加${globalCount}`}
            color="green"
            onPress={this.handleGlobalAdd}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ScrollView>
    );
  }
}

export default connect(
  (state: any) => ({
    thisModel: state.main_news_reducer,
    globalModel: state.global_reducer,
  }),
  (dispatch, ownProps) => {
    return {
      dispatch,
      addCount: (params: any) => dispatch(action.add(params)),
      addGlobalCount: (params: any) => dispatch(globalAction.asga_add(params)),
    };
  },
)(MainNewsComponent);
