Page({
  data: {
    trigged: false
  },

  onReady () {
    setTimeout(() => {
      this.setData({
        trigged: true
      })
    }, 1000);
  },

  /*! 滚动时触发 */
  bindscroll (e) {
    console.log(e)
  },

  /*! upper-threshold 距离顶部或左侧多远时触发scrolltoupper事件 */
  bindscrolltoupper (e) {
    console.log(e)
  },

  /*! lower-threshold 距离底部或右侧多远时触发scrolltolower事件 */
  bindscrolltolower (e) {
    console.log(e)
  },

  /*! 自定义下拉刷新控件被下拉 */
  bindrefresherpulling (e) {
    console.log(e)
  },

  /*! 自定义下拉刷新被触发 */
  bindrefresherrefresh (e) {
    console.log(e)
    setTimeout(() => {
      this.setData({
        trigged: false
      })
    }, 8000);
  },

  /*! 自定义下拉刷新被复位 */
  bindrefresherrestore (e) {
    console.log(e)
  },

  /*! 自定义下拉刷新被终止 */
  bindrefresherabort (e) {
    console.log(e)
  },

  /*! 滑动事件开始(同时开启enhanced属性后生效) */
  binddragstart (e) {
    console.log(e)
  },

  /*! 滑动事件(同时开启enhanced属性后生效) */
  binddragging (e) {
    console.log(e)
  }, 

  /*! 滑动事件结束(同时开启enhanced属性后生效) */
  binddragend (e) {
    console.log(e)
  }
})