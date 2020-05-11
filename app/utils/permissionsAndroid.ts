import { PermissionsAndroid } from 'react-native';
import { toastShow } from './index';
// 获取本地读写权限
export const requestReadPermission = async () => {
  try {
    const checkResult = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    )
    console.warn(checkResult)
    if (checkResult) {
      return true
    }
    //返回string类型
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      // {
      //   //第一次请求拒绝后提示用户你为什么要这个权限
      //   'title': '我要读写权限',
      //   'message': '没权限我不能工作，同意就好了'
      // }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else {
      toastShow("获取读写权限失败")
      return false
    }
  } catch (err) {
    toastShow(err.toString())
  }
}

// 获取相机权限
export const requestCarmeraPermission = async () => {
  try {
    const checkResult = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA
    )
    if (checkResult) {
      return true
    }
    //返回string类型
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      // {
      //   //第一次请求拒绝后提示用户你为什么要这个权限
      //   'title': '我要相机权限',
      //   'message': '没权限我不能工作，同意就好了'
      // }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else {
      toastShow("获取相机失败")
      return false
    }
  } catch (err) {
    toastShow(err.toString())
  }
}
// 获取地址查询权限
export const requestLocationPermission = async () => {
  try {
    const checkResult = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
    if (checkResult) {
      return true
    }
    //返回string类型
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      // {
      //   //第一次请求拒绝后提示用户你为什么要这个权限
      //   'title': '我要地址查询权限',
      //   'message': '没权限我不能工作，同意就好了'
      // }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else {
      toastShow("获取地址查询失败")
      return false
    }
  } catch (err) {
    toastShow(err.toString())
  }
}

// 一次性获取所有权限
export const requestMultiplePermission = async () => {
  try {
    const permissions = [
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.CAMERA
    ]
    //返回得是对象类型
    const granteds = await PermissionsAndroid.requestMultiple(permissions)
    var data = "是否同意地址权限: "
    if (granteds["android.permission.ACCESS_FINE_LOCATION"] === "granted") {
      data = data + "是\n"
    } else {
      data = data + "否\n"
    }
    data = data + "是否同意相机权限: "
    if (granteds["android.permission.CAMERA"] === "granted") {
      data = data + "是\n"
    } else {
      data = data + "否\n"
    }
    data = data + "是否同意存储权限: "
    if (granteds["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
      data = data + "是\n"
    } else {
      data = data + "否\n"
    }
    toastShow(data)
  } catch (err) {
    toastShow(err.toString())
  }
}
