import {StatusBarState} from '../../component/StatusBar';
export interface GlobalReduxState {
  count: number;
  pageLoading: any;
  statusBar: StatusBarState;
}
export interface ActionState {
  type: any;
  payload: any;
}
