Page({
  /*! 页面的初始数据 */
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

  /*! 监听tabBar点击 */
  onTabItemTap: function (item) {
    console.log(item)
  },

  /*! 键盘输入时触发 */
  bindinput: function (e) {
    console.log('键盘输入时触发', e)
  },

  /*! 输入框聚焦时触发 */
  bindfocus: function (e) {
    console.log('输入框获取焦点时触发', e)
  },

  /*! 输入框失去焦点时触发 */
  bindblur: function (e) {
    console.log('输入框失去焦点时触发', e)
  },

  /*! 点击完成按钮时触发 */
  bindconfirm: function (e) {
    console.log('点击完成按钮时触发', e)
  },

  /*! 键盘高度发生变化的时候触发 */
  bindkeyboardheightchange: function (e) {
    console.log('键盘高度发生变化的时候触发', e)
  },

  /*! 监听键盘高度变化事件 */
  onKeyboardHeightChange: function (e) {
    wx.onKeyboardHeightChange((res) => {
      console.log('监听键盘高度变化事件', res)
    })
  },

  /*! 取消监听键盘高度变化事件 */
  offKeyboardHeightChange: function () {
    wx.offKeyboardHeightChange()
  },

  /*! 收起键盘 */
  hideKeyboard: function () {
    wx.hideKeyboard({
      success: (res) => {
        console.log('接口调用成功的时候触发', res)
      },
      fail: (res) => {
        console.log('接口调用失败的时候触发', res)
      },
      complete: (res) => {
        console.log('接口调用完成的时候触发(调用成功、调用失败都会执行)', res)
      }
    })
  },

  /*! 在input、textarea等focus之后，获取输入框的光标位置 */
  getSelectedTextRange: function (e) {
    wx.getSelectedTextRange({
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