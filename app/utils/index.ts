import {ToastAndroid} from 'react-native';
import {Dimensions, StyleSheet} from 'react-native';
// 窗口宽高
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
// 全局样式
export const globalStyles = StyleSheet.create({
  page: {
    backgroundColor: '#f6f6f6',
  },
});
export const toastShow = (str: string) => {
  ToastAndroid.show(str, ToastAndroid.SHORT);
};
