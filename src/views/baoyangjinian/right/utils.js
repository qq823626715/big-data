export function initBubbleChart (data = [], format = [], axis, x = 160, y = 50) {
    let [maxValue, temp] = [0, []]
    data.forEach(item => {
      temp.push(item[format[1]])
    })
    maxValue = Math.max.apply(null, temp)

    // 气泡颜色数组
    let color = ['#237bff', '#1daef2', '#fb9d05', '#ff6f57']
    // 气泡颜色备份
    let bakeColor = [...color]
    // 气泡数据
    let bubbleData  = []
    // 气泡基础大小
    let basicSize = 30

    // 填充气泡数据数组bubbleData
    for (let item of data) {
      // 确保气泡数据条数少于或等于气泡颜色数组大小时，气泡颜色不重复
      if (!bakeColor.length) bakeColor = [...color]
      let colorSet = new Set(bakeColor)
      let curIndex = Math.round(Math.random()*(colorSet.size - 1))
      let curColor = bakeColor[curIndex]
      colorSet.delete(curColor)
      bakeColor = [...colorSet]
      // 气泡大小设置
      // let size = (item[format[1]] * basicSize * 2) / maxValue
      // if (size < basicSize) size = basicSize
      let size = item[format[1]]
      bubbleData.push({
        "name": item[format[0]],
        "value": item[format[1]],
        "symbolSize": size,
        "draggable": false,
        "itemStyle": {
            "color": curColor
        },
        id: item[format[0]],
      })
    }

    let bubbleOptions = {
        grid: {},
        backgroundColor: 'transparent',
        animationEasingUpdate: 'bounceIn',
        series: [{
            type: 'graph',
            roam: false,
            label: { show: true, fontSize: 8, color: '#fff' },
            data: bubbleData
        }]
    }
    bubbleOptions.series[0].data.forEach((target,index) => {
        target.x = axis[index][0];
        target.y = axis[index][1];
    })
    bubbleOptions.series[0].data.push({
        "name": 'l',
        "value": 1,
        "symbolSize": 0,
        id: 'l',
        label: { show: false, fontSize: 8 },
        x,
        y: 0,
      },{
        "name": 'r',
        "value": 1,
        "symbolSize": 0,
        id: 'r',
        x: -x,
        y: 0,
        label: { show: false, fontSize: 8 },
      },{
        "name": 'u',
        "value": 1,
        "symbolSize": 0,
        id: 'u',
        x: 0,
        y,
        label: { show: false, fontSize: 8 },
      },{
        "name": 'd',
        "value": 1,
        "symbolSize": 0,
        id: 'd',
        x: 0,
        y: -y,
        label: { show: false, fontSize: 8 },
      })
      console.log(bubbleOptions)
    return bubbleOptions;
  }