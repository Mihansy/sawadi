// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`https://www.apiopen.top/satinApi?theme=${event.themeid}`)
    .then(function (res) {
      return res  //一定要记得把结果return出去，要不然页面获取不到数据，只能返回null
    })
    .catch(function (err) {
      // 请求失败
    });
}