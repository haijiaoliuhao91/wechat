Page({
  data: {
    src: '',
    thumbPath: '',
    videoPath: '',
    devicePosition: 'front'
  },

  onReady: function (e) {
    this.ctx = wx.createCameraContext()
  },

  /*! 拍摄照片 */
  takePhoto: function (e) {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },

  /*! 开始记录 */
  startRecord: function (e) {
    this.ctx.startRecord({
      success: (res) => {
        console.log('开始记录')
        console.log(res)
      }
    })
  },

  /*! 结束记录 */
  stopRecord: function (e) {
    this.ctx.stopRecord({
      success: (res) => {
        console.log('结束记录')
        console.log(res)
        this.setData({
          thumbPath: res.tempThumbPath,
          videoPath: res.tempVideoPath
        })
      }
    })
  },

  /*! 切换摄像头 */
  switchdeviceposition: function (e) {
    const devicePosition = this.data.devicePosition == 'front' ? 'back' : 'front'
    console.log(devicePosition)
    this.setData({
      devicePosition: devicePosition
    })
  }
})