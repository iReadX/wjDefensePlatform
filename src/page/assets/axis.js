let G2 = require('@antv/g2')
var DEFAULT_COLOR = '#accbea'
G2.Global.registerTheme('wjAxis', {
  axis: {
    bottom: {
      label: {
        textStyle: {
          fill: '#58b5fc'
        } // 底部标签文本的颜色
      },
      line: {
        lineWidth: 1,
        stroke: '#e3eef8'
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
        stroke: '#e3eef8'
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
  }
})

let axisData = [
  {year: '53%', sales: 38},
  {year: '150%', sales: 52},
  {year: '53%', sales: 61},
  {year: '40%', sales: 90},
  {year: '48%', sales: 48},
  {year: '45%', sales: 38},
  {year: '35%', sales: 10},
  {year: '80%', sales: 60},
  {year: '43%', sales: 38}
]

let axisScale = [
  {
    dataKey: 'sales',
    tickInterval: 20
  }]

export { axisData, axisScale }
