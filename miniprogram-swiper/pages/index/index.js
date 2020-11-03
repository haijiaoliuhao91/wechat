Page({
  /*! 组件初始化数据 */
  data: {

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

  /*! current改变的时候会触发change事件 */
  bindchange: function (e) {
    console.log(e)
  },

  /*! swiper-item的位置发生改变时会触发transition事件 */
  bindtransition: function (e) {
    console.log(e)
  },

  /*! 动画结束时会触发animationfinish事件 */
  bindanimationfinish: function (e) {
    console.log(e)
  }
})