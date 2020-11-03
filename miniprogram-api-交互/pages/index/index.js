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

  /*! 显示消息提示框 */
  showToast: function (e) {
    wx.showToast({
      title: '上海北京天津武汉',
      icon: 'loading',
      mask: false,
      duration: 9000,
      successs: function () {
        console.log('接口调用成功的回调函数', res)
      },
      fail: function (res) {
        console.log('接口调用失败的回调函数', res)
      },
      complete: function (res) {
        console.log('接口调用完成的回调函数', res)
      }
    })
  },

  /*! 隐藏消息提示框 */
  hideToast: function (e) {
    wx.hideToast({
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

  /*! 显示模态对话框 */
  showModal: function () {
    wx.showModal({
      title: '提示',
      content: '真的要退出登录吗?',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#ff0000',
      confirmText: '退出',
      confirmColor: '#00ff00',
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

  /*! 显示loading提示框 */
  showLoading: function (e) {
    wx.showLoading({
      title: '加载中...',
      mask: false,
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

  /*! 隐藏loading提示框 */
  hideLoading: function (e) {
    wx.hideLoading({
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
      },
      fail: (res) => {
        console.log('接口调用失败的回调函数', red)
      },
      complete: (res) => {
        console.log('接口调用完成的回调函数(调用成功、调用失败都会执行)', res)
      }
    })
  },

  /*! 显示操作菜单 */
  showActionSheet: function (e) {
    wx.showActionSheet({
      itemList: ['北京', '上海', '广州', '杭州', '深圳', '武汉'],
      itemColor: '#00ffff',
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

  /*! 通过wx.navigateTo跳转页面 */
  detail: function (e) {
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})