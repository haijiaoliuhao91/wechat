Page({
  data: {
    percentValue: 0
  },
  activeend () {
    console.log('进度条下载完成')
  },
  onTapProgressBar (e) {
    console.log(e)
    let progress = this.data.percentValue;
    if (progress < 100) {
      progress += 5;
      this.setData({percentValue: Math.min(100, progress)})
    }
  },
  onTapReload (e) {
    console.log(e)
    // 第一种实现方案，调用两次setData方法
    // this.setData({percentValue: 0})
    // this.setData({percentValue: 100})

    // 第二种实现方案 使用nextTick
    this.setData({percentValue: 0})
    if (wx.canIUse('nextTick')) {
      wx.nextTick(() => {
        this.setData({percentValue: 100})
      })
    } else {
      setTimeout(() => {
        this.setData({percentValue: 100})
      }, 17);
    }
  }
})