// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//引入request-promise，用来发送请求获取数据
var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`https://www.apiopen.top/satinApi?type=${event.type}&page=${event.page}`)
    .then(function (res) {// 请求成功
      console.log(res) //云函数运行在服务端，所以这里的console信息打印在云开发的云函数日志中。
      return res
    })
    .catch(function (err) { // 请求失败
      console.log(err)
    });
}