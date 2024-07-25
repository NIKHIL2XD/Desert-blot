// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];
const t = new bt.Turtle()

const shape = (n) => {
  const t = new bt.Turtle()
  for (let i = 0; i < n; i++) t.forward(1).right(360/n)
  return t.lines()
}

// Draw shaft as a stretched triangle
const shaft = bt.scale(shape(3), [2, 150])

// Draw vanes 
const vanes = bt.scale(shape(11), [8, 30])

// combines the vanes to the end of the shaft
bt.translate(vanes, [0, bt.bounds(shaft).cb[1] - bt.bounds(vanes).cb[1]])


const feather = [...shaft, ...vanes]
bt.translate(feather, [width / 2, height / 2], bt.bounds(feather).cc)
bt.rotate(feather, 135)
drawLines(feather)

drawLines(t.lines())

// transform lines using the toolkit
bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);
