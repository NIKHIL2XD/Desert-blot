// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// code
const shth = 3
const shl = 120 
const cl = 30  
const vw = 20  
const t = new bt.Turtle()

// setting diagonal position
t.left(45).jump([20, 20])

//shaft
t.forward(shl).left(90).forward(shth).left(90)
t.forward(shl).left(90).forward(shth).left(90)

// positioning for vanes
t.up().forward(cl).left(90).forward(shth/2).right(90).down()

// vanes
const short = vw * Math.sqrt(2)
const long = shl - cl - 2 * vw

t.left(45)
t.forward(short).right(45).forward(long).right(45).forward(short)
.right(90)
t.forward(short).right(45).forward(long).right(45).forward(short)

drawLines(t.lines())

// transform lines using the toolkit
bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);
