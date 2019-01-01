const lineData = []

const lineScale = [{
  dataKey: 'time',
  type: 'linear',
  tickInterval: 1
}]

let ip = []

'1'.repeat(5).split('').map(() => {
  ip.push(random(1, 192) + '.' + random(0, 255) + '.' + random(0, 255) + '.' + random(0, 255))
})

'1'.repeat(5).split('').map((_, index) => {
  let time = index.toString().padStart(2, '0').toString()
  '2'.repeat(5).split('').map((_, ipIndex) => {
    lineData.push({
      time,
      ip: ip[ipIndex],
      value: random(0, 1000)
    })
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

console.log(lineData)

export {lineData, lineScale}
