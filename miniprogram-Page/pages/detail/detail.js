Page({
  /*! 页面的初始数据 */
  data: {

  },

  /*! 生命周期回调--监听页面加载 */
  onLoad: function () {
    console.log('监听页面加载')
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log(data)
    })
  },

  /*! 生命周期回调--监听页面显示 */
  onShow: function () {
    console.log('监听页面显示')
  },

  /*! 生命周期回调--监听页面初次渲染完成 */
  onReady: function () {
    console.log('监听页面初次渲染完成')
  },

  /*! 生命周期回调--监听页面隐藏 */
  onHide: function () {
    console.log('监听页面隐藏')
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
    console.log('页面上拉触底事件的处理函数')
  },

  /*! 事件处理函数--用户点击右上角转发 */
  onShareAppMessage: function () {
    console.log('用户点击右上角转发')
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
  onTabItemTap: function (item) {
    console.log('当前是 tab 页时，点击 tab 时触发', item)
  },

  sendData: function (e) {
    this.getOpenerEventChannel().emit('acceptDataFromOpenedPage', {data: 'send from opened page!'})
  }
})