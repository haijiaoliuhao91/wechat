Page({
  /*! 页面的初始数据 */
  data: {
    src: "",
    video: "",
    thumb: ""
  },

  /*! 生命周期函数--页面加载 */
  onLoad: function () {
    console.log("页面加载")
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

  /*! 摄像头在非正常终止时触发，如退出后台等情况  */
  bindstop: function (e) {
    console.log(e)
  },

  /*! 用户不允许使用摄像头时触发 */
  binderror: function (e) {
    console.log(e)
  },

  /*! 相机初始化完成时触发 */
  bindinitdone: function (e) {
    console.log(e)
  },

  /*! 创建 camera 上下文 CameraContext 对象 */
  createCameraContext: function (e) {
    this.cameraCtx = wx.createCameraContext()
  },

  /*! 设置缩放级别 */
  setZoom: function () {
    this.cameraCtx.setZoom({
      zoom: 2,
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

  /*! 开始录像 */
  startRecord: function (e) {
    console.log("开始录像", this.cameraCtx)
    this.cameraCtx.startRecord({
      timeoutCallback: (res) => {
        console.log("超过30s或页面 onHide 时会结束录像，触发该函数", res)
        this.setData({
          video: res.tempVideoPath,
          thumb: res.tempThumbPath
        })
      },
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

  /*! 结束录像 */
  stopRecord: function (e) {
    this.cameraCtx.stopRecord({
      compressed: false,
      success: (res) => {
        console.log("接口调用成功的回调函数", res)
        this.setData({
          video: res.tempVideoPath,
          thumb: res.tempThumbPath
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

  /*! 拍摄照片 */
  takePhoto: function (e) {
    this.cameraCtx.takePhoto({
      quality: "normal",
      success: (res) => {
        console.log("接口调用成功的回调函数", res)
        this.setData({
          src: res.tempImagePath
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

  /*! 获取 camera 实时帧数据 */
  onCameraFrame: function (e) {
    this.cameraFrameListener = this.cameraCtx.onCameraFrame((res) => {
      console.log(res)
    })
  },

  /*! 开始监听帧数据 */
  start: function (e) {
    this.cameraFrameListener.start({
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

  /*! 停止监听帧数据 */
  stop: function (e) {
    this.cameraFrameListener.stop({
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

  /*! 预览图片 */
  imageClick: function (e) {
    wx.previewImage({
      urls: [ this.data.src ],
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