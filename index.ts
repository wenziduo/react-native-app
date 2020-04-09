/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ReduxContainer from './app/ReduxContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxContainer);
