Page({
  data: {
    array: ['美国', '日本', '中国', '巴四', '上海', '北京'],
    objectArray: [
      {id: 0, name: '美国'}, {id: 1, name: '日本'}, {id: 2, name: '中国'}, {id: 3, name: '巴西'}, {id: 4, name: '上海'}, {id: 5, name: '北京'}
    ],
    index: 0,
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线性动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    objectMultiArray: [
      [{id: 0, name: '无脊柱动物'}, {id: 1, name: '脊柱动物'}],
      [{id: 0, name: '扁性动物'}, {id: 1, name: '线性动物'}, {id: 3, name: '环节动物'}, {id: 4, name: '软体动物'}, {id: 5, name: '节肢动物'}],
      [{id: 0, name: '猪肉绦虫'}, {id: 1, name: '吸血虫'}]
    ],
    multiIndex: [0, 0, 0],
    time: '14:58',
    date: '2020-10-27',
    region: ['河南省', '南阳市', '镇平县']
  },

  /*! value改变时会触发change事件，value选择了range中的第几个(下标从0开始) */
  bindchange (e) {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  /*! value改变时会触发change事件，value选择了range中的第几个(下标从0开始) */
  bindMultiChange (e) {
    console.log(e)
    this.setData({
      multiIndex: e.detail.value
    })
  },

  /*! 列改变时触发columnchange事件 */
  bindcolumnchange (e) {
    console.log(e.detail)
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线性动物', '环节动物', '软体动物', '节肢动物'],
            data.multiArray[2] = ['猪肉绦虫', '吸血虫']
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'],
            data.multiArray[2] = ['鲫鱼', '带鱼']
            break;
        }
        data.multiIndex[1] = 0
        data.multiIndex[2] = 0
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫']
                break;
              case 1:
                data.multiArray[2] = ['蛔虫']
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥']
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓']
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物']
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼']
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼']
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎']
                break;
            }
            break;
        }
        data.multiIndex[2] = 0
        break;
    }
    this.setData(data)
  },

  /*! value改变时会触发change事件 */
  bindtimechange (e) {
    console.log(e)
    this.setData({
      time: e.detail.value
    })
  },

  /*! value改变时会触发change事件 */
  binddatechange (e) {
    console.log(e)
    this.setData({
      date: e.detail.value
    })
  },

  /*! value改变时会触发change事件 */
  bindregionchange (e) {
    console.log(e)
    this.setData({
      region: e.detail.value
    })
  },

  /*! 取消选择时触发 */
  bindcancel (e) {
    console.log(e)
  }
})