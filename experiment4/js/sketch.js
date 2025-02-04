// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
var centerHorz, centerVert;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

var img;

var tileCountX = 4;
var tileCountY = 4;
var tileCount = tileCountX + tileCountY;
var imgTile = [];
var tileWidth;
var tileHeight;
var cropX;
var cropY;
var zoomMode;
var tileDist = 10;
var zoomAMT = 10;

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

function preload() {
  img = loadImage('data/image.jpg');
}


// setup() function is called once when the program starts
function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  // resize canvas is the page is resized
  imgTile = [];
  image(img,0 ,0);
  tileWidth = width / tileCountY
  tileHeight = height / tileCountX
  noCursor();
  noFill();
  stroke(255);
  zoomMode = true;
  // create an instance of the class
  myInstance = new MyClass("VALUE1", "VALUE2");

  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  if(zoomMode){
    imageMode(CORNER);
    cropX = constrain(mouseX, 0, width - tileWidth);
    cropY = constrain(mouseY, 0, height - tileHeight);
    image(img, 0, 0);
    rect(cropX, cropY, tileWidth , tileHeight);
  }
  else{

    for(var i = 0; i < zoomAMT; i++){

        image(imgTile[i], width / 2, height / 2);
    }

  }

}

function zoom(){
  imgTile = [];
  cropX = constrain(cropX, 0, width - tileWidth);
  cropY = constrain(cropY, 0, height - tileHeight);
  imageMode(CENTER);
  for(var i = 1; i <= zoomAMT; i++){
    imgTile.push(img.get(cropX, cropY, 300 - tileDist * i, 200 - tileDist * i));
  }

}

function mouseReleased() {
  zoomMode = false
  zoom();
}

function mouseMoved(){
  zoomMode = true;
}