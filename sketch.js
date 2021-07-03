var iss, issImage;
var hasDocked = false;
var spacebg, spacebgImage;
var spacecraft, spacecraft1Image, spacecraft2Image, spacecraft3Image, spacecraft4Image;

function preload() {
  issImage = loadImage("iss.png");
  spacebgImage = loadImage("spacebg.jpg");
  spacecraft1Image = loadAnimation("spacecraft1.png");
  spacecraft2Image = loadAnimation("spacecraft2.png");
  spacecraft3Image = loadAnimation("spacecraft3.png");
  spacecraft4Image = loadAnimation("spacecraft4.png");
}

function setup() {
  createCanvas(800, 400);

  iss = createSprite(400, 150);
  iss.addImage("iss", issImage);
  iss.scale = 0.7;

  spacecraft = createSprite(350, 250);
  spacecraft.scale = 0.17;
}

function draw() {
  background(spacebgImage);

  spacecraft.velocityX = 0;
  spacecraft.velocityY = 0;

  if (!hasDocked) {
    spacecraft.velocityX = Math.round(random(1, -1));
  }

  spacecraft.addAnimation("spacecraft", spacecraft1Image);

  if (keyDown(LEFT_ARROW)) {
    spacecraft.velocityX = -1;
    spacecraft.addAnimation("spacecraft", spacecraft4Image);
  }

  if (keyDown(RIGHT_ARROW)) {
    spacecraft.velocityX = 1;
    spacecraft.addAnimation("spacecraft", spacecraft3Image);
  }

  if (keyDown(DOWN_ARROW)) {
    spacecraft.velocityY = 1;
    spacecraft.addAnimation("spacecraft", spacecraft2Image);
  }

  if (keyDown(UP_ARROW)) {
    spacecraft.velocityY = -1;
  }

  iss.setCollider("rectangle", -60, 25, 1, 1);
  spacecraft.setCollider("rectangle", 0, 0, 300, 400);

  if (spacecraft.isTouching(iss)) {
    hasDocked = true;
    spacecraft.addAnimation("spacecraft", spacecraft1Image);
    spacecraft.velocityX = 0;
    spacecraft.velocityY = 0;
    
    textFont("Times New Roman")
    stroke(255, 255, 255);
    fill(0,160,216);
    textAlign(CENTER);
    textSize(70);
    text("Docking Successful!", 400, 325);
  }
  

  drawSprites();
}