Page({
  data: {
    title: "商品列表",
    loading: true,
    frontColor: '#000000',
    backgroundColor: '#0000ff',
    colorAnimationDuration: 0,
    colorAnimationTimingFunc: 'linear'
  },

  /*! 监听页面加载完成 */
  onLoad: function () {
    console.log('页面加载完成')
    setTimeout(() => {
      this.setData({
        title: '首页商品列表',
        loading: false,
        frontColor: '#ffffff',
        backgroundColor: '#ff0000',
        colorAnimationDuration: 2000,
        colorAnimationTimingFunc: 'linear'
      })
    }, 5000);
  },

  /*! 监听页面显示 */
  onShow: function () {
    console.log('页面显示')
  },

  /*! 监听页面首次渲染完成 */
  onReady: function () {
    console.log('页面首次渲染完成')
  },

  /*! 监听页面隐藏 */
  onHide: function () {
    console.log('页面隐藏')
  },

  /*! 监听页面卸载 */
  onUnload: function () {
    console.log('页面卸载')
  },

  /*! 跳转到详情 */
  detail: function (e) {
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})