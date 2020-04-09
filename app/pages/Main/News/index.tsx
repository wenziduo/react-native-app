import React from 'react';
import {connect} from 'react-redux';
import {ScrollView, Text, Button} from 'react-native';
import action from './store/action';

interface InitProps {
  thisModel?: any;
  addCount: (params: any) => void;
}
interface InitState {}
class MainNewsComponent extends React.Component<InitProps, InitState> {
  componentDidMount() {
    // console.warn(this.props.thisModel.count);
  }
  handleAdd = () => {
    this.props.addCount({count: 2});
  };
  render() {
    console.warn('this.props.thisModel', this.props.thisModel)
    const {count} = this.props.thisModel;
    console.warn('count', count);
    return (
      <ScrollView>
        <Button
          title={`+添加${count}`}
          color="#841584"
          onPress={this.handleAdd}
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    );
  }
}

export default connect(
  (state: any) => ({thisModel: state.main_news_reducer}),
  (dispatch, ownProps) => {
    return {
      addCount: (params: any) => dispatch(action.add(params)),
    };
  },
)(MainNewsComponent);
