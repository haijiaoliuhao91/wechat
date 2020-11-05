Page({
  /*! 页面的初始数据 */
  data: {
    sources: [{
      url: "http://img.cdn.saopinmao.com/92efeff1810280694b38c766ae90cc9e?imageView2/2",
      type: "image",
    }, {
      url: "http://img.cdn.saopinmao.com/cf6fb23e5fc746778dbcd4be128b785e?imageView2/2",
      type: "image"
    }, {
      url: "http://video.cdn.saopinmao.com/paper.mp4?v=3",
      type: "video"
    }],
    tempFilePath: "",
    imageList: []
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

  /*! 保存图片到系统相册 */
  saveImageToPhotosAlbum: function (e) {
    wx.saveImageToPhotosAlbum({
      filePath: '/resources/1.jpg',
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
        wx.showToast({
          title: '图片已保存到相册中',
        })
      },
      fail: (res) => {
        console.log('接口调用失败的回调函数', res)
      },
      complete: (res) => {
        console.log('接口调用完成的回调函数(调用成功、调用失败都会执行)', res)
      }
    })
  },
  
  /*! 预览图片 */
  previewMedia: function (e) {
    wx.previewMedia({
      sources: this.data.sources,
      current: 1,
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
      },
      fail: (res) => {
        console.log('接口调用失败的回调函数', res)
      },
      complete: (res) => {
        console.log('接口调用完成的回调函数(调用成功、调用失败都会执行)', res)
      }
    }, false)
  },

  /*! 预览图片 */
  previewImage: function (e) {
    wx.previewImage({
      urls: ["http://img.cdn.saopinmao.com/92efeff1810280694b38c766ae90cc9e?imageView2/2", "http://img.cdn.saopinmao.com/cf6fb23e5fc746778dbcd4be128b785e?imageView2/2"],
      current: 1,
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
      },
      fail: (res) => {
        console.log("接口调用失败的回调函数", res)
      },
      complete: (res) => {
        console.log("接口调用完成的回调函数(调用成功、调用失败都会执行)", res)
      }
    }, false)
  },

  /*! 获取图片信息 */
  getImageInfo: function (e) {
    wx.getImageInfo({
      src: "/resources/1.jpg",
      success: (res) => {
        console.log('接口调用成功的回调函数', res)
      },
      fail: (res) => {
        console.log("接口调用失败的回调函数", res)
      },
      complete: (res) => {
        console.log("接口调用完成的回调函数(调用成功、调用失败都会执行)", res)
      }
    })
  },

  /*! 压缩图片 */
  compressImage: function (e) {
    wx.compressImage({
      src: '/resources/1.jpg',
      quality: 80,
      success: (res) => {
        console.log("接口调用成功的回调函数", res)
        this.setData({
          tempFilePath: res.tempFilePath
        })
      },
      fail: (res) => {
        console.log("接口调用失败的回调函数", res)
      },
      complete: (res) => {
        console.log("接口调用完成的回调函数(调用成功、调用失败都会执行)", res)
      }
    })
  },
  
  /*! 从本地相册选择图片或者使用相机拍照 */
  chooseImage: function () {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log("接口调用成功的回调函数", res)
        this.setData({
          imageList: res.tempFilePaths
        })
      },
      fail: (res) => {
        console.log("接口调用失败的回调函数", res)
      },
      complete: (res) => {
        console.log("接口调用完成的回调函数(调用成功、调用失败都会执行)", res)
      }
    })
  },

  imageClick: function (e) {
    console.log(e.target.dataset.index)
    const index = e.target.dataset.index
    wx.previewImage({
      urls: this.data.imageList,
      current: this.data.imageList[index],
      success: (res) => {
        console.log("接口调用成功的回调函数", res)
      },
      fail: (res) => {
        console.log("接口调用失败的回调函数", res)
      },
      complete: (res) => {
        console.log("接口调用完成的回调函数(调用成功、调用失败都会执行)", res)
      }
    }, true)
  },

  /*! 从客户端会话选择文件 */
  chooseMessageFile: function (e) {
    console.log(e)
    wx.chooseMessageFile({
      count: 9,
      type: "video",
      success: (res) => {
        console.log("接口调用成功的回调函数", res)
      },
      fail: (res) => {
        console.log("接口调用失败的回调函数", res)
      },
      complete: (res) => {
        console.log("接口调用完成的回调函数(调用成功、调用失败都会执行)", res)
      }
    })
  }
})