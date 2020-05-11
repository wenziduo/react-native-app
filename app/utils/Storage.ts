import {
  AsyncStorage
} from 'react-native';

class DeviceStorage {
  /**
   * 获取
   * @param key
   * @returns {Promise<T>|*|Promise.<TResult>}
   */

  static get(key) {
    return AsyncStorage.getItem(key).then((value) => {
      console.warn(value)
      if (value) {
        console.warn(value)
        console.warn(222)
        const jsonValue = JSON.parse(value);
        return jsonValue;
      }
      return false
    });
  }


  /**
   * 保存
   * @param key
   * @param value
   * @returns {*}
   */
  static set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }


  /**
   * 更新
   * @param key
   * @param value
   * @returns {Promise<T>|Promise.<TResult>}
   */
  static update(key, value) {
    return DeviceStorage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }


  /**
   * 更新
   * @param key
   * @returns {*}
   */
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }
}

export default DeviceStorage;