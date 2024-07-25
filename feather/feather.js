const width = 125
const height = 125

setDocDimensions(width, height)

const rr = bt.randInRange

const shaftLength = rr(0.5, 0.8) * Math.sqrt(width * width + height * height)
const vaneLength = rr(0.7, 0.8) * shaftLength
const vaneWidth = rr(0.2, 0.3) * vaneLength
const barbCurviness = rr(1, 4)
const numClumps = rr(1, 6)

const shaft = bt.resample([[[0, 0], [0.8, 0], [0, -shaftLength], [-0.8, 0], [0, 0]]], 1)

const vanes = bt.scale([bt.catmullRom([
  [0, 0],
  [rr(-1, -0.5), rr(0.15, 0.3)],
  [rr(-1, -0.5), rr(0.7, 0.9)],
  [0, 1],
  [rr(0.5, 1), rr(0.7, 0.9)],
  [rr(0.5, 1), rr(0.15, 0.3)],
  [0, 0]
])], [vaneWidth, vaneLength])


const barbs = []
const len = shaft[0].length
for (let i = 0; i < len; i++) {
  const parity = i > len / 2 ? -1 : 1
  const [x, y] = shaft[0][i]
  barbs.push(bt.catmullRom([
    [x, y],
    [x + parity * vaneWidth * 0.3, y - barbCurviness],
    [x + parity * vaneWidth, y]
  ], 5))
}


bt.translate(vanes, [0, bt.bounds(shaft).cb[1] - bt.bounds(vanes).cb[1]])
bt.cut(barbs, vanes)


for (let i = 0; i < numClumps; i++) {
  const numBarbs = Math.floor(rr(3, 20))
  const start = Math.floor(rr(0, barbs.length - numBarbs))
  const target = barbs[Math.floor(start + rr(0, numBarbs))]
  for (let j = 0; j <= numBarbs; j++) {
    const barb = barbs[start + j]
    const t = j / numBarbs
    const [tx, ty] = target[Math.floor((target.length - 1) * 0.9)]
    const [bx, by] = barb[Math.floor((barb.length - 1) * 0.9)]
    const mid = [tx * (1 - t) + bx * t, ty * (1 - t) + by * t] 
    barbs[start + j] = bt.catmullRom([
      barb[0],
      mid,
      target[target.length-1]
    ], 10)
  }
}


const feather = [...shaft, ...barbs]
bt.translate(feather, [width / 2, height / 2], bt.bounds(feather).cc)
bt.iteratePoints(feather, ([x, y]) => [x - 0.001*(width/2-y)*(width/2-y), y])
bt.rotate(feather, bt.randInRange(201, 117))
drawLines(feather)
