let cols;
let rows;
let spacing = 20;
let size = [];
const scl = 0.1;
const canvasSize = 400;

function setup() {
  createCanvas(canvasSize, canvasSize);
  rectMode(CENTER);
  cols = width / spacing;
  rows = height / spacing;
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    size[i] = [];
    for (let j = 0; j < rows; j++) {
      size[i][j] =
        dist(
          mouseX,
          mouseY,
          spacing / 2 + i * spacing,
          spacing / 2 + j * spacing,
        ) * scl;
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noStroke();
      fill(220);
      rect(
        spacing / 2 + i * spacing,
        spacing / 2 + j * spacing,
        size[i][j],
        size[i][j],
      );
    }
  }
}
