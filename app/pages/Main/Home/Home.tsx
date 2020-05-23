/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeModules,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import codePush from 'react-native-code-push';

interface InitProps {}
interface InitState {
  show?: boolean;
  download?: number;
}

class Home extends React.Component<InitProps, InitState> {
  constructor(props: InitProps) {
    super(props);
    this.state = {
      show: false,
      download: 0,
    };
  }
  componentDidMount() {
    // this.downLoad();
    // codePush.sync(
    //   {
    //     updateDialog: {
    //       appendReleaseDescription: true,
    //       optionalIgnoreButtonLabel: '忽略',
    //       optionalInstallButtonLabel: '立即更新',
    //       title: '更新程序',
    //       optionalUpdateMessage: '检测到更新内容,是否立即更新?',
    //     },
    //     installMode: codePush.InstallMode.IMMEDIATE,
    //   }, // 显示对话框，询问更新
    //   status => {
    //     switch (status) {
    //       case codePush.SyncStatus.UPDATE_IGNORED:
    //         //console.log('对话框结果为忽略更新')
    //         break;
    //       case codePush.SyncStatus.DOWNLOADING_PACKAGE:
    //         //console.log('下载开始')
    //         this.setState({ show: true })
    //         break;
    //       case codePush.SyncStatus.INSTALLING_UPDATE:
    //         //console.log('下载结束')
    //         this.setState({ show: false })
    //         break;
    //     }
    //   },
    //   ({ receivedBytes, totalBytes }) => {
    //     this.setState({ download: parseInt(receivedBytes * 100 / totalBytes) })
    //   }
    // );
  }
  downLoad = () => {
    NativeModules.DownloadApk.downloading(
      'http://bos.pgzs.com/sjapp91/msoft/20180507456/23/official_website6.1.0.370.apk',
      '91zhushou.apk',
    );
  };
  render() {
    console.log('Home');
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
