/*
there are three built in names

setDocDimensions
drawLines
blotToolkit (also called bt)

the toolkit has lots of useful functions we can access
*/

const width = 200;
const height = 120;

setDocDimensions(width, height);

const finalLines = []; // we will put our shapes here
bt.join(finalLines, rect(159, 100)); // here is the new line
bt.join(finalLines, rect(67, 52)); 
function rect(w, h) {

  // notice how this is an array of arrays
  return [
    [
      [-w/2, h/2],
      [w/2, h/2],
      [w/2, -h/2],
      [-w/2, -h/2],
      [-w/2, h/2],
    ]
  ]
}

const gridWidth = 10
const squareWidth = 10
const squareHeight = 10

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const square = rect(squareWidth, squareHeight)
    bt.translate(square, [squareWidth * i, squareHeight * j])
    bt.join(finalLines, square);
  }
}


// let's get the bounds of our final lines
const finalLinesBounds = bt.bounds(finalLines);

// this moves the center of our drawing to the center of our doc
bt.translate(
  finalLines,
  [ width / 2, height / 2 ], 
  finalLinesBounds.cc
); 

drawLines(finalLines);
