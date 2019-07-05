let radius;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasContainer');
  frameRate(2);
  // put setup code here
  radius = 400;
}
let counter = 0;
function draw() {
  counter++;
  let similarWords = selectAll('.output');
  let len = similarWords.length;
  for (let i = 0; i < similarWords.length; i++){
    similarWords[i].position(radius*cos(PI/len*i) + windowWidth/2 - 100, radius*sin(PI/len*i) + windowHeight/2- 150);
  }
  let inputWord = select("inputForm");
  inputWord.position(windowWidth/2 - 100,windowHeight/2 +100)
  background(255);
  // put drawing code here
}