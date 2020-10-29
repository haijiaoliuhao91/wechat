Page({
  /*! 输入框聚焦时触发focus事件 */
  bindfocus (e) {
    console.log(e)
  },

  /*! 输入框失去焦点时触发 */
  bindblur (e) {
    console.log(e)
  },

  /*! 输入框行数变化时触发 */
  bindlinechange (e) {
    console.log(e)
  },

  /*! 键盘输入时触发 */
  bindinput (e) {
    console.log(e)
  },

  /*! 点击完成时触发 */
  bindconfirm (e) {
    console.log(e)
  },

  /*! 键盘高度发生变化时触发 */
  bindkeyboardheightchange (e) {
    console.log(e)
  }
  
})