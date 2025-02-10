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

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

// setup() function is called once when the program starts
function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
  canvas.parent("canvas-container");
  // resize canvas is the page is resized

  // create an instance of the class
  myInstance = new MyClass("VALUE1", "VALUE2");

  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();


  angleMode(DEGREES);
  //noLoop();

}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  background(200);
  randomSeed(1);
  translate(0, 200, 0);
  rotateY(frameCount);
  branch(100);
}


function branch(len){
  strokeWeight(map(len, 10, 100, 0.5, 5));
  stroke(70, 40, 20);
  line(0, 0, 0, 0, -len - 2, 0);
  
  translate(0, -len, 0);
  
  if(len > 10) {
    for(var i = 0; i < 3; i++){
      rotateY(random(100, 140));
      
      push();
      
      rotateZ(random(20, 50));
      branch(len * 0.55);
      
      pop();
    }
  } else {
    
    var r = 80 + random(-20, 20);
    var g = 120 + random(-20, 20);
    var b = 40 + random(-20, 20);
    
    fill(r, g, b, 200);
    noStroke();
    
    translate(5, 0, 0);
    
    rotateZ(90);
    beginShape();
    for (var i = 45; i < 135; i++){
      var rad = 7;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }
    for( var i = 135; i > 45; i--){
      var rad = 7;
      var x = rad * cos(i);
      var y = rad * sin(-i) + 10;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}