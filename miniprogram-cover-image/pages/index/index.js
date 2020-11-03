Page({
  /*! 组件的初始数据 */
  data: {
    longitude: 113.324520,
    latitude: 23.099994,
    img: 'http://img.cdn.saopinmao.com/92efeff1810280694b38c766ae90cc9e?imageView2/2'
  },

  /*! 生命周期函数--页面加载完成 */
  onLoad: function () {
    console.log('页面加载完成')
  },

  /*! 生命周期函数--页面显示 */
  onShow: function () {
    console.log('页面显示')
  },

  /*! 页面首次渲染完成 */
  onReady: function () {
    console.log('页面首次渲染完成')
  },

  /*! 页面隐藏 */
  onHide: function () {
    console.log('页面隐藏')
  },

  /*! 页面卸载 */
  onUnload: function () {
    console.log('页面卸载')
  },

  /*! 图片加载成功时触发 */
  bindload: function (e) {
    console.log(e)
  },

  /*! 图片加载失败时触发 */
  binderror: function (e) {
    console.log(e)
  }
})