var canvas;
var backgroundImage, bike1_img, bike2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                        //C41// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, bike1, bike2, fuels, powerCoins, obstacle1,obstacle2; // C41//SA
var bikes = [];
var blastImage;                   //C42// SA

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  bike1_img = loadImage("../assets/bike1.png");
  bike2_img = loadImage("../assets/bike2.png");
  track = loadImage("../assets/trace.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/coin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obs1.png"); // C41//SA
  obstacle2Image = loadImage("./assets/obs2.png"); // C41//SA
  blastImage = loadImage("./assets/died.png"); //C42 //SA
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
