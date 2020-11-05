Page({
  /*! 页面的初始数据 */
  data: {

  },

  /*! 生命周期函数--页面加载成功 */
  onLoad: function () {
    console.log('页面加载成功')
    this.getMenuButtonBoundingClientRect()
  },

  /*! 生命周期函数--页面显示 */
  onShow: function () {
    console.log('页面显示')
  },

  /*! 生命周期函数--页面初次渲染完成 */
  onReady: function () {
    console.log('页面初次渲染完成')
  },

  /*! 生命周期函数--页面隐藏 */
  onHide: function () {
    console.log('页面隐藏')
  },

  /*! 生命周期函数--页面卸载 */
  onUnload: function () {
    console.log('页面卸载')
  },

  /*! 点击tabBar的哪一项 */
  onTabItemTap: function (item) {
    console.log(item)
  },

  /*! 获取菜单按钮(屏幕右上角的胶囊按钮)的位置信息，以屏幕左上角为坐标原点 */
  getMenuButtonBoundingClientRect: function () {
    const object = wx.getMenuButtonBoundingClientRect()
    console.log(object)
  }
})