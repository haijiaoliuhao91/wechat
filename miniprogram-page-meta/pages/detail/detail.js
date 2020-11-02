Page({
  /*! 页面的初始数据 */
  data: {

  },

  /*! 生命周期函数--页面加载完成 */
  onLoad: function () {
    console.log('页面加载完成')
  },

  /*! 生命周期函数---页面显示 */
  onShow: function () {
    console.log('页面显示')
  },

  /*! 生命周期函数---页面首次渲染完成 */
  onReady: function () {
    console.log('页面首次渲染完成')
  },

  /*! 生命周期函数---页面隐藏 */
  onHide: function () {
    console.log('页面隐藏')
  },

  /*! 生命周期函数---页面卸载 */
  onUnload: function () {
    console.log('页面卸载')
  },

  /*! 页面返回 */
  back: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  /*! 页面滚动时触发 */
  bindscroll: function (e) {
    console.log(e)
  }
 })