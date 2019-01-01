const DataSet = require('@antv/data-set')
let G2 = require('@antv/g2')
// var DEFAULT_COLOR = '#accbea'
G2.Global.registerTheme('wjPie', {
})

const sourceData = [
  {item: '80', count: 40},
  {item: '22', count: 21},
  {item: '433', count: 17},
  {item: '8080', count: 13},
  {item: '7369', count: 9}
]

const pieScale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }]

const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})

const pieData = dv.rows

const pieStyle = {
  stroke: '#fff',
  lineWidth: 1
}
const pieLabelConfig = [
  'percent', {
    formatter: (val, item) => {
      return item.point.item + ': ' + val
    }
  }]

export { pieData, pieScale, pieLabelConfig, pieStyle }
