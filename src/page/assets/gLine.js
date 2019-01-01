const gLineData = []

let G2 = require('@antv/g2')
var DEFAULT_COLOR = '#74a7da'
G2.Global.registerTheme('wjGLine', {
  axis: {
    bottom: {
      label: {
        textStyle: {
          fill: '#58b5fc' // 底部标签文本的颜色
        },
        rotate: -45
      },
      line: {
        lineWidth: 1,
        stroke: '#58b5fc'
      }
    },
    left: {
      label: {
        textStyle: {
          fill: '#58b5fc'
        } // 左部标签文本的颜色
      },
      line: {
        lineWidth: 1,
        stroke: '#58b5fc'
      }
    }
  },
  shape: {
    point: {
      lineWidth: 1,
      fill: DEFAULT_COLOR,
      radius: 4
    },
    hollowPoint: {
      fill: '#fff',
      lineWidth: 1,
      stroke: DEFAULT_COLOR,
      radius: 3
    },
    interval: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.85
    },
    pie: {
      lineWidth: 1,
      stroke: '#fff'
    },
    hollowInterval: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    area: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.6
    },
    polygon: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 1
    },
    hollowPolygon: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    hollowArea: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineWidth: 1,
      fill: null
    }
  },
  guide: {
    text: {
      fill: '#666',
      fontSize: 12
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineDash: [0, 2, 2]
    },
    rect: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.1
    },
    tag: {
      line: {
        stroke: DEFAULT_COLOR,
        lineDash: [0, 2, 2]
      },
      text: {
        fill: '#666',
        fontSize: 12,
        textAlign: 'center'
      },
      rect: {
        lineWidth: 0,
        fill: DEFAULT_COLOR,
        fillOpacity: 0.1
      }
    },
    html: {
      align: 'cc'
    }
  },
  tooltip: {
    crosshairs: false,
    offset: 0,
    crossLine: {
      stroke: '#666'
    },
    wordSpaceing: 6,
    markerCfg: {
      symbol: 'circle',
      radius: 30
    }
  },
  tooltipMarker: {
    fill: '#356dba',
    symbol: 'circle',
    lineWidth: 3,
    stroke: DEFAULT_COLOR,
    radius: 5
  } // 提示信息在折线图、区域图上形成点的样式
})
const gLineScale = [
  {
    dataKey: 'time',
    type: 'linear',
    tickInterval: 1
  }]

// '1'.repeat(24).split('').map((_, index) => {
//   gLineData.push({
//     time: index.toString().padStart(2, '0').toString(),
//     timeStr: index.toString().padStart(2, '0').toString() + ':00',
//     value: random(0, 1000),
//     data: [
//       {
//         key: 'SSH',
//         port: '22',
//         value: random(0, 100)
//       },
//       {
//         key: 'SMBD',
//         port: '445',
//         value: random(0, 100)
//       },
//       {
//         key: 'MySQL',
//         port: '3306',
//         value: random(0, 100)
//       }
//     ]
//   })
// })

'1'.repeat(24).split('').map((_, index) => {
  let time = index.toString().padStart(2, '0').toString()
  let i1 = random(0, 100)
  let i2 = random(0, 100)
  let i3 = random(0, 100)
  gLineData.push({
    time,
    timeStr: time + ':00',
    value: i1 + i2 + i3,
    data: [
      {
        key: 'SSH',
        port: '22',
        value: i1
      },
      {
        key: 'SMBD',
        port: '445',
        value: i2
      },
      {
        key: 'MySQL',
        port: '3306',
        value: i3
      }
    ]
  })
})

/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random (lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

const gItemTpl = '<li data-index="{index}">' +
  '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' +
  '攻击次数: {value}' +
  '</li>'

export {gLineData, gLineScale, gItemTpl}
