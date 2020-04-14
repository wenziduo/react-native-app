import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {GlobalReduxState} from '../../../global/store/reducer';
import {actions} from '../../../global/store/action';

const initData = [
  {
    id: 1,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 2,
    title:
      '英雄联盟，主播打赏。测试中火热进行中，英雄联盟，主播打赏。测试中火热进行中，英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 3,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 4,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 5,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 6,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 7,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 8,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 9,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 10,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 11,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 12,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 13,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
  {
    id: 14,
    title: '英雄联盟，主播打赏。测试中火热进行中，请参与哦！！！',
    imgUrl: 'http://wenzi.douerpiao.club/banner001.png',
  },
];
interface InitProps {
  global: GlobalReduxState;
  changeGlobalPageLoading: (params: any) => void;
}
interface InitState {
  loading: boolean;
  data: any[];
}
class MainHomeComponent extends React.Component<InitProps, InitState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      data: [],
    };
  }
  componentDidMount() {
    this.props.changeGlobalPageLoading({loading: true});
    setTimeout(() => {
      this.props.changeGlobalPageLoading({loading: false});
      this.setState({data: initData});
    }, 3000);
  }
  render() {
    const {data} = this.state;
    return (
      <ScrollView>
        <View style={styles.itemOuter}>
          {this.state.loading && <ActivityIndicator />}
          {data.map((item: any) => (
            <View key={item.id}>
              <TouchableOpacity style={styles.itemStyle}>
                <Image source={{uri: item.imgUrl}} style={styles.imgStyle} />
                <View style={styles.itemTextOuter}>
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default connect(
  (state: any) => ({
    globalModel: state.global_reducer,
  }),
  (dispatch, ownProps) => {
    return {
      dispatch,
      changeGlobalPageLoading: (params: any) =>
        dispatch(actions.changeGlobalPageLoading(params)),
    };
  },
)(MainHomeComponent);

const styles = StyleSheet.create({
  itemOuter: {
    width: '100%',
    // backgroundColor: 'salmon',
  },
  itemStyle: {
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    elevation: 1.5,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },
  imgStyle: {
    width: '100%',
    height: 250,
    // resizeMode: 'contain',
  },
  itemTextOuter: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemText: {
    lineHeight: 20,
  },
});
