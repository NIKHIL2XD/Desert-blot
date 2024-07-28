//@title: Modern City
//@author: Nikhil
//@snapshot: desert.png

const width = 180;
const height = 115;

setDocDimensions(width, height);
const turtle = new bt.Turtle()


//constants
const sunRad = 9;
const sunRays = 20;
const randomrays = bt.randIntInRange(5, 8)
const randomrays1 = bt.randIntInRange(10, 25)
const random = bt.randInRange;
const randnum1 = bt.randIntInRange(10, 30)
const randnum2 = bt.randIntInRange(10, 30)
const finalLines = [];
const randx = bt.randIntInRange(0, 10)
const randy = bt.randIntInRange(30, 60)

// Pyramid 1
const leftmount = [
  bt.nurbs([
    [0, randy + 0],
    [randnum1, 79],
    [randnum1, 60],
    [67.5, randy + 0]
  ])
]

bt.iteratePoints(leftmount, (pt, t) => {
  const [x, y] = pt;
  const freq = 0;
  const dy = bt.noise(t * 25, { octaves: -1 }) * 10 * (t === 0 || t === 1 ? 0 : 1)
  return [x, y + dy]
})
bt.join(finalLines, leftmount);

// pyramid 2
const rightmount = [
  bt.nurbs([
    [67.5, randy + 0],
    [randnum2 + 70, 90],
    [randnum2 + 70, 60],
    [width, randy + 0]
  ])
]

bt.iteratePoints(rightmount, (pt, t) => {
  const [x, y] = pt;
  const freq = 1.00;
  const dy = bt.noise(t * 25, { octaves: -1 }) * 10 * (t === 0 || t === 1 ? 0 : 1)
  return [x, y + dy]
})
bt.join(finalLines, rightmount);


//sun
turtle.jump([sunRad, height]).setAngle(270).down().arc(-90, sunRad); // circle
for (let i = 1; i < sunRays + 65; i++) {
  let angle = -i / (sunRays + 1) * 90;
  let distance = i % 2 == 1 ? randomrays1 : randomrays;
  turtle.jump([sunRad, height]).setAngle(270).down().arc(angle, sunRad); // go to pos
  turtle.setAngle(angle).up().forward(0.2).down().forward(distance); // sun ray
}

function centerPolylines(polylines, documentWidth, documentHeight) {
  const cc = bt.bounds(polylines).cc;
  bt.translate(polylines, [documentWidth / 12.0, documentHeight / 1.2], cc);
}

//cactus

const cactus1 = [
  bt.nurbs([
    [9, 16],
    [4, 20],
    [1, 30],
    [0, 40],
    [0, 50],
    [5, 35],
    [7, 32],
    [5, 60],
    [10, 65],
    [16, 60],
    [13, 28],
    [14, 26],
    [15, 27],
    [15, 36],
    [17, 37],
    [20, 32],
    [19, 27],
    [19, 25],
    [13, 14],
    [14, 16]  ])
]



let sun = turtle.lines()
centerPolylines(sun, width, height)
drawLines(sun);
drawLines(finalLines);
drawLines(cactus1);
