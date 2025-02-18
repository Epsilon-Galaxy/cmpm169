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
}

// use the 5 - 7 - 5 syllable pattern to create a Haiku


var fiveStart = {
  "start": "#fiveStart#",
  "fiveStart": ["#212#", "#311#", "#221#", "#1211#"],
  

  "212": ["#2adj# #1noun# #2verb#", "#2noun# #1verb# #2adj#", "#2verb# #1adverb# #2noun#", "#2adverb# #1verb# #2noun#", "#2noun# #1conjunction# #2noun#"],
  "311": ["#3participle# #1noun# #1verb#", "#3verb# #1noun# #1verb#", "#3noun# #1verb# #1noun#", "#3participle# #1verb# #1noun#"],
  "221": ["#2noun# #2verb# #1noun#", "#2verb# #2noun# #1verb#", "#2adj# #2noun# #1verb#", "#2adj# #2verb# #1noun#"],
  "1211": ["#1noun# #2attrnoun# #1noun# #1verb#", "#1adj# #2noun# #1noun# #1verb#", "#1noun# #2verb# #1noun# #1verb#", "#1adj# #2verb# #1noun# #1verb#"],

  "1noun": ["sky", "rain", "wind", "moon", "sun", "star", "tree", "bird", "leaf", "snow", "wave", "rock", "cloud", "mist", "grass", "stone", "sea", "fire", "path", "frost", "thorn", "dawn", "ash", "glimpse", "flock", "breeze", "chill", "cave", "haze", "veil", "gale", "grove", "cliff", "flame", "mud", "wisp", "dusk", "crest", "shard", "stream", "flame"],
  "2noun": ["mountain", "ocean", "forest", "morning", "sunrise", "shadow", "garden", "river", "petal", "meadow", "island", "echoes", "thunder", "raindrop", "valley"],
  "3noun": ["butterfly", "cicada", "memory", "mountain top", "festival", "evening sky", "paradise", "horizon", "riverbed", "sunshine", "shadowed path", "universe"],

  "1adj": ["cold", "dark", "soft", "bright", "clear", "still", "wild", "sharp", "calm", "green", "wet", "thin", "deep", "harsh", "sweet", "rough", "fresh", "tall", "smooth", "soft"],
  "2adj": ["quiet", "gentle", "simple", "honest", "empty", "noble", "timid", "sleepy", "crimson", "frozen", "lively", "bitter", "sacred", "cheerful", "fragile", "sandy"],
  "3adj": ["beautiful", "mysterious", "delicate", "harmonious", "sensitive", "radiant", "elegant"],

  "1verb": ["runs", "falls", "sings", "jumps", "soars", "flies", "push", "pull", "cuts", "climbs", "dives", "glides", "skips", "snaps", "swism", "bends", "shines", "blinks", "melts", "splash", "bloom", "chase"],
  "2verb": ["whisper", "flutter", "wander", "shiver", "glisten", "travel", "stumble", "glimmer", "murmur", "gather", "follow", "hasten", "tumble", "sizzle"],
  "3verb": ["whispering", "gathering", "fluttering", "vanishing", "shimmering", "transforming", "compelling", "questioning", "rejoicing", "reflecting", "becoming", "arriving", "surviving", "expanding", "emerging", "nurturing", "returning", "belonging", "releasing", "creating", "ascending", "uniting"],

  "1adverb": ["fast", "slow", "high", "low", "soft", "still", "far", "near", "then", "now", "down", "up", "in", "out", "wide", "deep", "long"],
  "2adverb": ["gently", "slowly", "softly", "early", "quickly", "brightly", "calmly", "loudly", "highly", "barely", "safely", "sweetly", "roughly", "warmly"],

  "1conjunction": ["and", "but", "or", "nor"],

  "3participle": ["shuddering", "fluttering", "shivering", "ascending", "expanding", "glistening",  "reflecting", "vanishing", "receding", "blossoming", "tremoring"],

  "2attrnoun": ["sunlight", "moonlight", "starfish", "seabreeze", "rainfall", "snowfall", "riverbed", "windmill", "firefly", "grassland", "pinecone", "birdsong", "earthquake", "rockfall", "woodland", "summer", "winter", "spring"]



};

var seven = {
  "start": "#sevenStart#",
  "sevenStart": ["#2111111#", "#22111#", "#1111112#", "#322#"],

  "2111111": ["#2adj# #1noun# #1verb# #1verb# #1verb# #1verb#", "#2noun# #1verb# #1adverb# #1verb# #1verb# #1verb#", "#2noun# #1verb#, #1adj# #1noun# #1adverb# #1verb#", "#2adj# #1noun#, #1noun# #1verb# #1adverb# #1verb#"],
  "22111": ["#2adj# #2noun#, #1noun# #1adverb# #1verb#", "#2noun# #2verb#, #1adj# #1noun# #1verb#", "#2prep# #2noun#, #1noun# #1verb# #1adverb#", "#2adj# #2noun#, #1verb# #1prep# #1noun#"],
  "1111112": ["#1noun# #1verb# #1noun# #1verb# #1adj# #2noun#", "#1noun# #1verb# #1noun# #1verb# #1adj# #1noun# #2verb#"],
  "322": ["#3adj# #2noun# #2verb#", "#3noun# #2verb# #2adverb#", "#3noun# #2noun# #2verb#", "#3verb# #2prep# #2noun#", "#3noun# #2adj# #2noun#", "#3adj# #2noun# #2adverb#"],

  "1noun": ["sky", "rain", "wind", "moon", "sun", "star", "tree", "bird", "leaf", "snow", "wave", "rock", "cloud", "mist", "grass", "stone", "sea", "fire", "path", "frost", "thorn", "dawn", "ash", "glimpse", "flock", "breeze", "chill", "cave", "haze", "veil", "gale", "grove", "cliff", "flame", "mud", "wisp", "dusk", "crest", "shard", "stream", "flame"],
  "2noun": ["mountain", "ocean", "forest", "morning", "sunrise", "shadow", "garden", "river", "petal", "meadow", "island", "echoes", "thunder", "raindrop", "valley"],
  "3noun": ["butterfly", "cicada", "memory", "mountain top", "festival", "evening sky", "paradise", "horizon", "riverbed", "sunshine", "shadowed path", "universe"],

  "1verb": ["runs", "falls", "sings", "jumps", "soars", "flies", "push", "pull", "cuts", "climbs", "dives", "glides", "skips", "snaps", "swism", "bends", "shines", "blinks", "melts", "splash", "bloom", "chase"],
  "2verb": ["whisper", "flutter", "wander", "shiver", "glisten", "travel", "stumble", "glimmer", "murmur", "gather", "follow", "hasten", "tumble", "sizzle"],
  "3verb": ["whispering", "gathering", "fluttering", "vanishing", "shimmering", "transforming", "compelling", "questioning", "rejoicing", "reflecting", "becoming", "arriving", "surviving", "expanding", "emerging", "nurturing", "returning", "belonging", "releasing", "creating", "ascending", "uniting"],

  "1adj": ["cold", "dark", "soft", "bright", "clear", "still", "wild", "sharp", "calm", "green", "wet", "thin", "deep", "harsh", "sweet", "rough", "fresh", "tall", "smooth", "soft"],
  "2adj": ["quiet", "gentle", "simple", "honest", "empty", "noble", "timid", "sleepy", "crimson", "frozen", "lively", "bitter", "sacred", "cheerful", "fragile", "sandy"],
  "3adj": ["beautiful", "mysterious", "delicate", "harmonious", "sensitive", "radiant", "elegant"],


  "1adverb": ["fast", "slow", "high", "low", "soft", "still", "far", "near", "then", "now", "down", "up", "in", "out", "wide", "deep", "long"],
  "2adverb": ["gently", "slowly", "softly", "early", "quickly", "brightly", "calmly", "loudly", "highly", "barely", "safely", "sweetly", "roughly", "warmly"],


  "1prep": ["in", "on", "by", "to", "at", "from", "with", "through"],
  "2prep": ["above", "below", "within", "without", "between", "beneath", "beyond", "inside", "upon", "around"],




};

var fiveEnd = {
  "start": "#fiveEnd#",
  "fiveEnd": ["#212#", "#311#", "#221#", "#1211#"],
  

  "212": ["#2adj# #1noun# #2verb#", "#2noun# #1verb# #2adj#", "#2verb# #1adverb# #2noun#", "#2adverb# #1verb# #2noun#", "#2noun# #1conjunction# #2noun#"],
  "311": ["#3participle# #1noun# #1verb#", "#3verb# #1noun# #1verb#", "#3noun# #1verb# #1noun#", "#3participle# #1verb# #1noun#"],
  "221": ["#2noun# #2verb# #1noun#", "#2verb# #2noun# #1verb#", "#2adj# #2noun# #1verb#", "#2adj# #2verb# #1noun#"],
  "1211": ["#1noun# #2attrnoun# #1noun# #1verb#", "#1adj# #2noun# #1noun# #1verb#", "#1noun# #2verb# #1noun# #1verb#", "#1adj# #2verb# #1noun# #1verb#"],

  "1noun": ["sky", "rain", "wind", "moon", "sun", "star", "tree", "bird", "leaf", "snow", "wave", "rock", "cloud", "mist", "grass", "stone", "sea", "fire", "path", "frost", "thorn", "dawn", "ash", "glimpse", "flock", "breeze", "chill", "cave", "haze", "veil", "gale", "grove", "cliff", "flame", "mud", "wisp", "dusk", "crest", "shard", "stream", "flame"],
  "2noun": ["mountain", "ocean", "forest", "morning", "sunrise", "shadow", "garden", "river", "petal", "meadow", "island", "echoes", "thunder", "raindrop", "valley"],
  "3noun": ["butterfly", "cicada", "memory", "mountain top", "festival", "evening sky", "paradise", "horizon", "riverbed", "sunshine", "shadowed path", "universe"],

  "1adj": ["cold", "dark", "soft", "bright", "clear", "still", "wild", "sharp", "calm", "green", "wet", "thin", "deep", "harsh", "sweet", "rough", "fresh", "tall", "smooth", "soft"],
  "2adj": ["quiet", "gentle", "simple", "honest", "empty", "noble", "timid", "sleepy", "crimson", "frozen", "lively", "bitter", "sacred", "cheerful", "fragile", "sandy"],
  "3adj": ["beautiful", "mysterious", "delicate", "harmonious", "sensitive", "radiant", "elegant"],

  "1verb": ["runs", "falls", "sings", "jumps", "soars", "flies", "push", "pull", "cuts", "climbs", "dives", "glides", "skips", "snaps", "swism", "bends", "shines", "blinks", "melts", "splash", "bloom", "chase"],
  "2verb": ["whisper", "flutter", "wander", "shiver", "glisten", "travel", "stumble", "glimmer", "murmur", "gather", "follow", "hasten", "tumble", "sizzle"],
  "3verb": ["whispering", "gathering", "fluttering", "vanishing", "shimmering", "transforming", "compelling", "questioning", "rejoicing", "reflecting", "becoming", "arriving", "surviving", "expanding", "emerging", "nurturing", "returning", "belonging", "releasing", "creating", "ascending", "uniting"],

  "1adverb": ["fast", "slow", "high", "low", "soft", "still", "far", "near", "then", "now", "down", "up", "in", "out", "wide", "deep", "long"],
  "2adverb": ["gently", "slowly", "softly", "early", "quickly", "brightly", "calmly", "loudly", "highly", "barely", "safely", "sweetly", "roughly", "warmly"],

  "1conjunction": ["and", "but", "or", "nor"],

  "3participle": ["shuddering", "fluttering", "shivering", "ascending", "expanding", "glistening",  "reflecting", "vanishing", "receding", "blossoming", "tremoring"],

  "2attrnoun": ["sunlight", "moonlight", "starfish", "seabreeze", "rainfall", "snowfall", "riverbed", "windmill", "firefly", "grassland", "pinecone", "birdsong", "earthquake", "rockfall", "woodland", "summer", "winter", "spring"]

}

var grammarLine1;
var grammarLine2;
var grammarLine3;

var resultLine1;
var resultLine2;
var resultLine3;

// setup() function is called once when the program starts
function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  // resize canvas is the page is resized
  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();

  grammarLine1 = tracery.createGrammar(fiveStart);
  resultLine1 = grammarLine1.flatten("#start#");

  
  grammarLine2 = tracery.createGrammar(seven);
  resultLine2 = grammarLine2.flatten("#start#");


  grammarLine3 = tracery.createGrammar(fiveEnd);
  resultLine3 = grammarLine3.flatten("#start#");


  console.log(resultLine1);
  console.log(resultLine2);
  console.log(resultLine3);


  
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  background(220);    

  textSize(500)
  text(resultLine1, 100, 100);
  text(resultLine2, 100, 200);
  text(resultLine3, 100, 300);

}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}