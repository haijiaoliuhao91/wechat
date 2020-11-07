Page({
  /*! 页面的初始数据 */
  data: {

  },

  /*! 生命周期回调--监听页面加载 */
  onLoad: function () {
    console.log('监听页面加载')
  },

  /*! 生命周期回调--监听页面显示 */
  onShow: function () {
    console.log('监听页面显示')
  },

  /*! 生命周期回调--监听页面卸载 */
  onUnload: function () {
    console.log('监听页面卸载')
  },

  /*! 事件处理函数--监听用户下拉动作 */
  onPullDownRefresh: function () {
    console.log('监听用户下拉动作')
  },

  /*! 事件处理函数--页面上拉触底事件的处理函数 */
  onReachBottom: function () {
    console.log('页面上拉触底事件的回调函数')
  },

  /*! 事件处理函数--用户点击右上角转发 */
  onShareAppMessage: function () {
    console.log('用户点击右上角触发')
  },

  /*! 事件处理函数--用户点击右上角转发到朋友圈 */
  onShareTimeline: function () {
    console.log('用户点击右上角转发到朋友圈')
  },

  /*! 事件处理函数--用户点击右上角收藏 */
  onAddToFavorites: function () {
    console.log('用户点击右上角收藏')
  },

  /*! 事件处理函数--页面滚动触发事件的处理函数 */
  onPageScroll: function () {
    console.log('页面滚动触发事件的处理函数')
  },

  /*! 事件处理函数--页面尺寸改变时触发 */
  onResize: function () {
    console.log('页面尺寸改变时触发')
  },

  /*! 事件处理函数--当前是 tab 页时，点击 tab 时触发 */
  onTabItemTap: function () {
    console.log('当前是 tab 页时，点击 tab 时触发')
  },

  /*! 生命周期回调--监听页面初次渲染完成 */
  onReady: function () {
    console.log('页面初次渲染完成')
  },

  /*! 生命周期回调--监听页面隐藏 */
  onHide: function () {
    console.log('监听页面隐藏')
  },

  /*! setInterval 启动一个定时器 */
  setInterval: function (e) {
    this.intervalID = setInterval(function (param1, param2, param3) {
      console.log(param1, param2, param3)
    }, 1000, 1, 2, 3)
  },

  /*! clearInterval 取消注册的定时器 */
  clearInterval: function (e) {
    clearInterval(this.intervalID)
  },

  /*! setTimeout 启动一个定时器 */
  setTimeout: function (e) {
    this.timeoutID = setTimeout(function (param1, param2, param3) {
      console.log(param1, param2, param3)
    }, 6000, 4, 5, '张三')
  },

  /*! clearTimeout 取消注册的定时器 */
  clearTimeout: function (e) {
    clearTimeout(this.timeoutID)
  }
})