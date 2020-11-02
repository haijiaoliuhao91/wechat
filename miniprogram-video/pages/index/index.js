Page({
  data: {
    danmuList: [
      {
        text: '第1s出现的弹幕',
        color: 'red',
        time: 1
      },
      {
        text: '第3s出现的弹幕',
        color: 'blue',
        time: 3
      },
      {
        text: '第10s出现的弹幕',
        color: 'yellow',
        time: 10
      }
    ]
  },

  onReady: function () {
    this.context = wx.createVideoContext('myvideo')
  },
  
  /*! 失去焦点时触发 */
  bindblur: function (e) {
    console.log(e)
    this.inputValue = e.detail.value
  },
  
  /*! 发送弹幕 */
  senddanmu: function (e) {
    console.log(e)
    this.context.sendDanmu({
      text: this.inputValue,
      color: 'red'
    })
  },

  /*! 开始/继续播放时触发 */
  bindplay: function (e) {
    console.log(e)
  },

  /*! 暂停播放时触发 */
  bindpause: function (e) {
    console.log(e)
  },

  /*! 播放到末尾时触发 */
  bindended: function (e) {
    console.log(e)
  },

  /*! 播放进度变化时触发 */
  bindtimeupdate: function (e) {
    console.log(e)
  },

  /*! 视频进入和退出全屏时触发 */
  bindfullscreenchange: function (e) {
    console.log(e)
  },

  /*! 视频出现缓冲时触发 */
  bindwaiting: function (e) {
    console.log(e)
  },

  /*! 视频播放出错时触发 */
  binderror: function (e) {
    console.log(e)
  },

  /*! 加载进度变化时触发，只支持一段加载 */
  bindprogress: function (e) {
    console.log(e)
  },

  /*! 视频元数据加载完毕时触发 */
  bindloadedmetadata: function (e) {
    console.log(e)
  },

  /*! 切换controls显隐时触发 */
  bindcontrolstoggle: function (e) {
    console.log(e)
  },

  /*! 进入视频小窗时触发 */
  bindenterpictureinpicture: function (e) {
    console.log(e)
  },

  /*! 退出视频小窗时触发 */
  bindleavepictureinpicture: function (e) {
    console.log(e)
  },

  /*! seek完成时触发(position iOS单位 s， Andriod单位 ms) */
  bindseekcomplete: function (e) {
    console.log(e)
  }
})