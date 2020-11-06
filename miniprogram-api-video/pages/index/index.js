Page({
  /*! 页面的初始数据 */
  data: {
    url: "http://video.cdn.saopinmao.com/paper.mp4?v=3",
    src: ""
  },

  /*! 生命周期函数--页面加载完成 */
  onLoad: function () {
    console.log("页面加载完成")
    this.vctx = wx.createVideoContext('myvideo')
  },

  /*! 生命周期函数--页面显示 */
  onShow: function () {
    console.log("页面显示")
  },

  /*! 生命周期函数--页面初次渲染完成 */
  onReady: function () {
    console.log("页面初次渲染完成")
  },

  /*! 生命周期函数--页面隐藏 */
  onHide: function () {
    console.log("页面隐藏")
  },

  /*! 生命周期函数--页面卸载 */
  onUnload: function () {
    console.log("页面卸载")
  },

  /*! 监听tabBar点击 */
  onTabItemTap: function (item) {
    console.log(item)
  },

  /*! 保存视频到系统相册 */
  saveVideoToPhotosAlbum: function (e) {
    wx.saveVideoToPhotosAlbum({
      filePath: "resources/1.mp4",
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
  },

  /*! 打开视频编辑器 */
  openVideoEditor: function (e) {
    wx.openVideoEditor({
      filePath: "resources/1.mp4",
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
  },

  /*! 获取视频的详细信息 */
  getVideoInfo: function (e) {
    wx.getVideoInfo({
      src: this.data.src,
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
  },

  /*! 压缩视频 */
  compressVideo: function (e) {
    wx.compressVideo({
      src: this.data.src,
      quality: "medium",
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
  },

  /*! 从相册选择视频或者使用相机拍摄视频 */
  chooseVideo: function (e) {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      compressed: false,
      maxDuration: 10,
      camera: "front",
      success: (res) => {
        console.log("接口调用成功的回调函数", res)
        this.setData({
          src: res.tempFilePath
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

  /*! 从手机相册选择图片、视频或者使用相机拍摄图片、视频 */
  chooseMedia: function (e) {
    wx.chooseMedia({
      count: 9,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      maxDuration: 15,
      success: (res) => {
        console.log("接口调用成功的回调函数", res)
      },
      fail: (res) => {
        console.log("接口调用失败的回调函数", res)
      },
      complete: (res) => {
        console.log("接口调用完成的调函数(调用成功、调用失败都会执行)", res)
      }
    })
  },

  /*! 进入全屏 */
  requestFullScreen: function (e) {
    console.log(e)
    this.vctx.requestFullScreen()
  },

  /*! 退出全屏 */
  exitFullScreen: function (e) {
    this.vctx.exitFullScreen()
  },

  /*! 暂停播放 */
  pause: function (e) {
    this.vctx.pause()
  },

  /*! 播放视频 */
  play: function (e) {
    this.vctx.play()
  },

  /*! 倍速播放 */
  playbackRate: function (e) {
    this.vctx.playbackRate(2.0)
  },

  /*! 跳转到指定位置 */
  seek: function (e) {
    this.vctx.seek(10)
  },

  /*! 发送弹幕 */
  sendDanmu: function (e) {
    this.vctx.sendDanmu({
      text: '这是一个很艰难的日子',
      color: '#ff0000'
    })
  },

  /*! 停止播放 */
  stop: function (e) {
    this.vctx.stop()
  },

  /*! 展示状态栏，仅在iOS全屏下有效 */
  showStatusBar: function (e) {
    this.vctx.showStatusBar()
  },

  /*! 隐藏状态栏，仅在iOS全屏下有效 */
  hideStautsBar: function (e) {
    this.vctx.hideStautsBar()
  },

  /*! 退出小窗。该方法可在任意页面调用 */
  exitPictureInPicture: function (e) {
    
  }
})