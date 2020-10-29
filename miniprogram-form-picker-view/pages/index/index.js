const date = new Date()
const years = []
const monthes = []
const days = []
/*! 年 */
for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

/*! 月 */
for (let i = 1; i <= 12; i++) {
  monthes.push(i)
}

/*! 日 */
for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years,
    year: date.getFullYear(),
    monthes,
    month: 2,
    days,
    day: 2,
    value: [9999, 1, 1],
    isDaytime: true
  },

  /*! 滚动选择时触发change事件 */
  bindchange (e) {
    console.log(e)
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.monthes[val[1]],
      day: this.data.days[val[2]],
      isDaytime: !val[3]
    })
  },

  /*! 滚动选择开始时触发 */ 
  bindpickstart (e) {
    console.log('滚动选择开始时触发')
  },

  /*! 滚动选择结束时触发 */
  bindpickend (e) {
    console.log('滚动选择结束时触发')
  }
})