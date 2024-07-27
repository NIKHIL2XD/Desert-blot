//@title: Modern City
//@author: Nikhil
//@snapshot: desert.png

const width = 180;
const height = 115;

setDocDimensions(width, height);
const turtle = new bt.Turtle()


//constants
const sunRad = 10;
const sunRays = 20;

//bottom line
drawLines([
  [
    [0, 40],
    [180, 40]
  ]
]);


//sun 
for (let i = 1; i < sunRays + 63; i++) {
  let angle = -i / (sunRays + 1) * 92;
  let distance = i % -2 == 1 ? 14 : 9;
  turtle.jump([sunRad, height]).setAngle(260).down().arc(angle, sunRad); // go to pos
  turtle.setAngle(angle).up().forward(0.2).down().forward(distance); // sun ray
}

drawLines(turtle.lines());
