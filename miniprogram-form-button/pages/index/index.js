Page({
  data: {
    
  },
  
  tap (e) {
    console.log(e);
  },
  /*! 获取用户手机号 */
  getphonenumber (e) {
    console.log(e)
  },
  /*! 获取用户信息 */
  getuserinfo (e) {
    console.log(e.detail.rawData)
  },
  /*! 打开APP成功的回调 */
  launchapp (e) {
    console.log(e)
  },
  /*! 打开授权设置页后的回调 */
  opensetting (e) {
    console.log(e)
  },
  /*! 使用微信开放能力发生错误时的回调 */
  binderror (e) {
    console.log(e)
  }
})