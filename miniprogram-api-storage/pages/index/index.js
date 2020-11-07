Page({
  /*! 页面的初始数据 */
  data: {

  },

  /*! 生命周期回调--监听页面加载 */
  onLoad: function () {
    console.log('监听页面加载')
  },
  
  /*! 生命周期回调--监听页面显示 */
  onShow: function () {
    console.log('监听页面显示')
  },

  /*! 生命周期回调--监听页面初次渲染完成 */
  onReady: function () {
    console.log('监听页面初次渲染完成')
  },

  /*! 生命周期函数--监听页面隐藏 */
  onHide: function () {
    console.log('监听页面隐藏')
  },

  /*! 生命周期回调--监听页面卸载 */
  onUnload: function () {
    console.log('监听页面卸载')
  },

  /*! 事件处理函数--监听用户下拉动作 */
  onPullDownRefresh: function () {
    console.log('监听用户下拉动作')
  },

  /*! 事件处理函数--页面上拉触底事件的处理函数 */
  onReachBottom: function () {
    console.log('页面上拉触底事件的处理函数')
  },

  /*! 事件处理函数--用户点击右上角转发 */
  onShareAppMessage: function () {
    console.log('用户点击右上角转发')
  },

  /*! 事件处理函数--用户点击右上角转发到朋友圈 */
  onShareTimeline: function () {
    console.log('用户点击右上角转发到朋友圈')
  },

  /*! 事件处理函数--用户点击右上角收藏 */
  onAddToFavorites: function () {
    console.log('用户点击右上角收藏')
  },

  /*! 事件处理函数--页面滚动触发事件的处理函数 */
  onPageScroll: function () {
    console.log('页面滚动触发事件的处理函数')
  },

  /*! 事件处理函数--页面尺寸改变时触发 */
  onResize: function () {
    console.log('页面尺寸改变时触发')
  },

  /*! 事件处理函数--当前是 tab 页，点击 tab 时触发 */
  onTabItemTap: function (item) {
    console.log('当前是 tab 页，点击 tab 时触发', item)
  },

  /*! 将数据异步存储在本地缓存指定的key中 */
  setStorage: function (e) {
    wx.setStorage({
      key: 'p',
      data: {
        name: '张三',
        age: 18,
        height: 180
      },
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
      },
      fail: (res) => {
        console.log('接口调用失败回调函数', res)
      },
      complete: (res) => {
        console.log('接口调用完成的回调函数(调用成功、调用失败都会执行)', res)
      }
    })
  },

  /*! 从本地缓存中异步获取指定key对应的内容 */
  getStorage: function (e) {
    wx.getStorage({
      key: 'p',
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

  /*! 将数据同步存储在本地缓存指定的key中 */
  setStorageSync: function (e) {
   try {
     wx.setStorageSync('name', "张三")
   } catch (error) {
     console.log(error)
   }
  },

  /*! 从本地缓存中同步获取指定key对应的内容 */
  getStorageSync: function (e) {
    try {
      const value = wx.getStorageSync('name')
      if (value) {
        console.log(value)
      }
    } catch (error) {
      console.log(error)
    }
  },

  /*! 从本地缓存中异步移除指定key */
  removeStorage: function (e) {
    wx.removeStorage({
      key: 'name',
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

  /*! 从本地缓存中同步移除指定key */
  removeStorageSync: function (e) {
    try {
      wx.removeStorageSync('name')
    } catch (error) {
      console.log(error)
    }
  },

  /*! 异步获取当前storage的相关信息 */
  getStorageInfo: function (e) {
    wx.getStorageInfo({
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

  /*! 同步获取当前storage的相关信息 */
  getStorageInfoSync: function (e) {
    try {
      const value = wx.getStorageInfoSync()
      if (value) {
        console.log(value)
      }
    } catch (error) {
      console.log(error)
    }
  },

  /*! 异步清理本地缓存 */
  clearStorage: function (e) {
    wx.clearStorage({
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

  /*! 同步清理本地缓存 */
  clearStorageSync: function (e) {
    try {
      wx.clearStorageSync()
    } catch (error) {
      console.log(error)
    }
  }

})