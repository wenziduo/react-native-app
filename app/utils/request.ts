import {stringify} from 'qs';
import Storage from './Storage';
import {toastShow} from './index';
// const httpDev = 'http://127.0.0.1:7008/app' // 公司
const httpDev = 'http://192.168.1.100:7008/app'; // 家里
// const httpDev = 'http://39.105.181.82:7009/app' // 远程test

//一个 Promise 就是一个代表了异步操作最终完成或者失败的对象
export default class Request {
  static get = async (url: string, data: any) => {
    let newUrl = data
      ? `${httpDev}${url}?${stringify(data)}`
      : `${httpDev}${url}`;
    const userInfo = await Storage.get('userInfo');
    if (userInfo) {
      newUrl = newUrl + `&token=${userInfo.token}`;
    }
    return await new Promise(
      (resolve: (params?: any) => void, reject: (params?: any) => void) => {
        // resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）
        fetch(newUrl) // 默认是GET
          .then(response => response.json()) // 把数据解析成json格式,然后取出
          .then(result => {
            if (!result.success) {
              toastShow(result.msg);
            }
            resolve(result); // 表示完成
          })
          .catch(error => {
            toastShow('内部服务错误');
            reject(error); // 表示失败
          });
      },
    );
  };
  static post = async (url: string, data: any) => {
    const userInfo = await Storage.get('userInfo');
    if (userInfo) {
      data.token = userInfo.token;
    }
    const newUrl = `${httpDev}${url}`;
    return await new Promise(
      (resolve: (params?: any) => void, reject: (params?: any) => void) => {
        fetch(newUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json', // 告诉服务器，我们能接受json格式的返回类型，
            'Content-Type': 'application/json', // 告诉服务器，我们提交的数据类型
          },
          body: JSON.stringify(data), // (把你想提交得数据序列化为json字符串类型，然后提交)body中的数据就是我们需要向服务器提交的数据,比如用户名,密码等
        }) // 返回 服务器处理的结果
          .then(response => response.json())
          .then(result => {
            if (!result.success) {
              toastShow(result.msg);
            }
            resolve(result);
          })
          .catch(error => {
            toastShow('内部服务错误');
            reject(error);
          });
      },
    );
  };
} // 数据转换成字符串 JSON.stringify(params)      //将数据JSON化 JSON.parse(responseJSON)
