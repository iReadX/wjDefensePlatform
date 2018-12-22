const gLineData = []

const gLineScale = [{
  dataKey: 'time',
  type: 'linear',
  tickInterval: 1
}]

'1'.repeat(24).split('').map((_, index) => {
  gLineData.push({
    time: index.toString().padStart(2, '0').toString(),
    value: random(0, 1000),
    data: [
      {
        key: 'SSH',
        port: '22',
        value: random(0, 100)
      },
      {
        key: 'SMBD',
        port: '445',
        value: random(0, 100)
      },
      {
        key: 'MySQL',
        port: '3306',
        value: random(0, 100)
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

const gItemTpl = '<li data-index={index}>' +
  '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' +
  '攻击次数: {value}' +
  '</li>'

export {gLineData, gLineScale, gItemTpl}
