//@title: Desert
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

// random cactus position
//cactus1
const r1posx = bt.randIntInRange(5.0, 17)
const r1posy = bt.randIntInRange(2.3, 4.8)


// random cactus shape
//right
const rc1 = bt.randIntInRange(13, 21)
const rc2 = bt.randIntInRange(35, 45)
//mid
const rc3 = bt.randIntInRange(41, 49)
const rc4 = bt.randIntInRange(50, 70)
//left
const rc6 = bt.randIntInRange(20, 33)
const rc7 = bt.randIntInRange(37, 62)
const rc10 = bt.randIntInRange(0, -3)

//bottom
const rc8 = bt.randIntInRange(15, 25)
const rc9 = bt.randIntInRange(9, 14)



//cactus

const cactus1 = [
  bt.nurbs([
    [9, rc8],
    [7, 25],
    [6, rc6],
    [rc10, 35],
    [rc10, rc7],
    [5, 35],
    [7, 33],
    [5, rc3],
    [10, rc4],
    [16, rc3],
    [13, 33],
    [15, 29],
    [16, 33],
    [15, 36],
    [21, rc2],
    [20, 33],
    [20, 31],
    [rc1, 25],
    [11, 21],
    [rc9, rc8]  ])
];


//centering
function centerCactus(cactus1, documentWidth, documentHeight) {
  const cc = bt.bounds(cactus1).cc;
  bt.translate(cactus1, [documentWidth / r1posx, documentHeight / r1posy], cc);
}



//printing

let sun = turtle.lines()
centerCactus(cactus1, width, height)
centerPolylines(sun, width, height)
drawLines(sun);
drawLines(finalLines);
drawLines(cactus1);
