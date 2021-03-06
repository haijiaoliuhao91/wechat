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

  /*! 事件处理函数--用户点击右上角转发朋友圈 */
  onShareTimeline: function () {
    console.log('用户点击右上角转发朋友圈')
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

  /*! 事件处理函数--当前是 tab 页，点击 tab 时触发 */
  onTabItemTap: function (item) {
    console.log('当前是 tab 页， 点击 tab 时触发', item)
  },

  /*! 事件处理函数--显示当前页面的转发按钮 */
  showShareMenu: function (e) {
    wx.showShareMenu({
      withShareTicket: false,
      menus: ['shareAppMessage', 'shareTimeline'],
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
      },
      fail: (res) => {
        console.log('接口调用失败的回调函数', res)
      },
      complete: (res) => {
        console.log('接口调用完成的回调函数(调用成功、调用失败都会执行)', res)
      }
    })
  },

  /*! 事件处理函数--隐藏当前页面的转发按钮 */
  hideShareMenu: function (e) {
    wx.hideShareMenu({
      menus: [ 'shareTimeline' ],
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
      },
      fail: (res) => {
        console.log('接口调用失败的回调函数', res)
      },
      complete: (res) => {
        console.log('接口调用完成的回调函数(调用成功、调用失败都会执行)', res)
      }
    })
  }
})