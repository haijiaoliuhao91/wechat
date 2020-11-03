Page({
  /*! 组件的初始数据 */
  data: {
    x: 0,
    y: 0,
    scale: 2
  },

  /*! 生命周期函数--页面加载完成 */
  onLoad: function () {
    console.log('页面加载完成')
  },

  /*! 生命周期函数--页面显示 */
  onShow: function () {
    console.log('页面显示')
  },

  /*! 生命周期函数--页面首次渲染完成 */
  onReady: function () {
    console.log('页面首次渲染完成')
  },

  /*! 生命周期函数--页面隐藏 */
  onHide: function () {
    console.log('页面隐藏')
  },

  /*! 生命周期函数--页面卸载 */
  onUnload: function () {
    console.log('页面卸载')
  },

  move: function (e) {
    console.log(e)
    this.setData({
      x: 30,
      y: 30
    })
  },

  scale: function (e) {
    console.log(e)
    this.setData({
      scale: 3
    })
  },

  /*! 拖动过程中触发的事件 */
  bindchange: function (e) {
    console.log(e)
  },

  /*! 缩放过程中触发的事件 */
  bindscale: function (e) {
    console.log(e)
  }
})