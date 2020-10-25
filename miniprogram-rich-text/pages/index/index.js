Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 20px; padding: 0 10px 10px; background:blue;margin:0 10px 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;'
      },
      children: [
        {
          type: 'text',
          text: '小程序实践'
        },
        {
          name: 'img',
          attrs: {
            src: 'https://www.yishulun.com/favicon.ico',
            style: 'width: 100%',
            class: 'img'
          }
        },
        {
          name: 'img',
          attrs: {
            src: 'https://www.yishulun.com/image/篆刻-茹意.png',
            style: 'width: 100%',
            class: 'img'
          }
        },
        {
          name: 'img',
          attrs: {
            src: 'https://www.yishulun.com/image/篆刻-茹意.png',
            style: 'width: 100%'
          }
        }
      ]
    }],
    urls: [],
    tagStyle: {
      div: 'background-color:blue;margin:0 10px 10px;padding:10px;border-bottom-left-radius:10px;',
      img: 'font-size:0;display:block;width:100%;'
    },
    html: "<div><img src='https://www.yishulun.com/image/篆刻-茹意.png' /><img src='https://www.yishulun.com/image/篆刻-茹意.png' /></div>"
  },

  tap (e) {
    console.log(e)
    let urls = this.data.urls
    wx.previewImage({
      current: urls[0],
      urls: urls
    })
  },

  onReady () {
    // 取出urls
    function findUrl(nodes) {
      let urls = []
      nodes.forEach(item => {
        if (item.name == 'img' && item.attrs) {
          for (const key in item.attrs ) {
            if (key == 'src') {
              urls.push(item.attrs[key])
            }
          }
        }

        if (item.children) {
          urls = urls.concat(findUrl(item.children))
        }
      })
      return urls;
    }

    this.data.urls = findUrl(this.data.nodes)
  }
})