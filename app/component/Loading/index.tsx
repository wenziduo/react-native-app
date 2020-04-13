import * as React from 'react';
import {connect} from 'react-redux';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface InitProps {
  global: any;
}
class MyLoading extends React.Component<InitProps> {
  render() {
    const {
      pageLoading: {loading},
    } = this.props.global;
    return (
      <Modal visible={loading} transparent={true} hardwareAccelerated={true}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingTitle}>请稍后...</Text>
        </View>
      </Modal>
    );
  }
}
const mapStateToProps = (state: any) => ({
  global: state.global_reducer,
});
export default connect(mapStateToProps)(MyLoading);
const styles = StyleSheet.create({
  loading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: width,
    height: height,
    zIndex: 999,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
  },

  loadingTitle: {
    marginTop: 10,
    fontSize: 14,
    color: '#FFF',
  },
});
