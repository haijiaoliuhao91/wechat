Page({
  /*! 页面的初始数据 */
  data: {

  },

  /*! 生命周期函数--页面加载完成 */
  onLoad: function () {
    console.log('页面加载完成')
    /*! 在当前页面显示导航条加载动画 */
    wx.showNavigationBarLoading({
      success: (res) => {
        console.log('接口调用成功的回调函数',res)
      },
      fail: (res) => {
        console.log('接口调用失败的回调函数', res)
      },
      complete: (res) => {
        console.log('接口调用完成的回调函数(调用成功、调用失败都会执行)', res)
      }
    }),

    /*! 在当前页面隐藏导航条加载动画 */
    setTimeout(() => {
      wx.hideNavigationBarLoading({
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
    }, 6000);
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

  /*! 动态设置导航栏标题 */
  changeTitle: function (e) {
    wx.setNavigationBarTitle({
      title: '首页',
      success: (res) => {
        console.log('接口调用成功的回调', res)
      },
      fail: (res) => {
        console.log('接口调用失败的回调', res)
      },
      complete: (res) => {
        console.log('接口调用完成的回调(调用成功、调用失败都会执行)', res)
      }
    })
  },

  /*! 设置页面导航条颜色 */
  setNavigationBarColor: function () {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#0000ff',
      animation: {
        duration: 5000,
        timingFunc: 'easeInOut'
      },
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

  detail: function (e) {
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})