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
const random = bt.randIntInRange(-1.0, 4)
const randomrays = bt.randIntInRange(9, 20)

//bottom line
drawLines([
  [
    [0, 40],
    [180, 40]
  ]
]);

//sun
turtle.jump([sunRad, height]).setAngle(270).down().arc(-90, sunRad); // circle
for (let i = 1; i < sunRays + 65; i++) {
  let angle = -i / (sunRays + 1) * 90;
  let distance = i % 2 == 1 ? randomrays : 6;
  turtle.jump([sunRad, height]).setAngle(270).down().arc(angle, sunRad); // go to pos
  turtle.setAngle(angle).up().forward(0.2).down().forward(distance); // sun ray
}

function centerPolylines(polylines, documentWidth, documentHeight) {
  const cc = bt.bounds(polylines).cc;
  bt.translate(polylines, [documentWidth / 12.0, documentHeight / 1.2], cc);
}

let sun = turtle.lines()
centerPolylines(sun, width, height)

drawLines(sun);
