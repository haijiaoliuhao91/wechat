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

  /*! 监听tabBarItem点击 */
  onTabItemTap: function (item) {
    console.log(item)
  },

  /*! 显示tabBar某一项的右上角的小红点 */
  showTabBarRedDot: function (e) {
    wx.showTabBarRedDot({
      index: 0,
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

  /*! 隐藏tabBar某一项的右上角的小红点 */
  hideTabBarRedDot: function () {
    wx.hideTabBarRedDot({
      index: 0,
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

  /*! 显示tabBar */
  showTabBar: function (e) {
    wx.showTabBar({
      animation: true,
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

  /*! 隐藏tabBar */
  hideTabBar: function (e) {
    wx.hideTabBar({
      animation: true,
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

  /*! 动态设置tabBar的整体样式 */
  setTabBarStyle: function (e) {
    wx.setTabBarStyle({
      color: "#0000ff",
      selectedColor: "#ffffff",
      backgroundColor: '#ff0000',
      borderStyle: 'white',
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

  /*! 动态设置tabBar某一项的内容 */
  setTabBarItem: function (e) {
    wx.setTabBarItem({
      index: 1,
      text: "购物车",
      /*! 这个图片路径要特别注意 */
      iconPath: "/resources/cart.png",
      selectedIconPath: "/resources/cart_selected.png",
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

  /*! 为tabBar某一项的右上角添加文本 */
  setTabBarBadge: function () {
    wx.setTabBarBadge({
      index: 1,
      text: "10",
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

  /*! 移除tabBar某一项右上角的文本 */
  removeTabBarBadge: function () {
    wx.removeTabBarBadge({
      index: 1,
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
      },
      fail: (res) => {
        console.log('接口调用失败的回调函数', res)
      },
      complete: (res) => {
        console.log('接口调用完成的回调函数(调用成功、调用失败都会执行)')
      }
    })
  }
})