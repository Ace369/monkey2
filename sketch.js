var monkey, monkeyImg, banana, bananaImg, foodGroup, ground, stone, stoneImg, obstacleGroup, score;

function preload() {
  
  monkeyImg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png", );
  
  bananaImg = loadImage("banana.png");
  stoneImg = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
   
  ground = createSprite(200, 400, 400, 40);
  
  monkey = createSprite(40, 350, 20, 20);
  monkey.addAnimation("monkey", monkeyImg);
  monkey.scale = 0.1;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0;
}

function draw() {
  background("skyblue");
  
  monkey.velocityY = 5;
  monkey.collide(ground);
  
  if (keyDown("space") && monkey.y > 250) {
  monkey.velocityY = -20;
  }
  
  if (foodGroup.isTouching(monkey)) {
    score = score + 2; 
    foodGroup.destroyEach();
  }
  
  switch (score) {
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.16;
      break;
    case 40: monkey.scale = 0.18;
      break;
    default: break;
  }
  if (obstacleGroup.isTouching(monkey)) {
    monkey.scale = 0.1;
    score = 0;
  }
  text("Score:" +score, 300, 100);
  
  Bananas();
  Stones();
  drawSprites();
}

function Bananas() {
  if (frameCount % 120 === 0) {
    banana = createSprite(400, random(200, 300), 10, 10);
    banana.addImage("banana", bananaImg);
    banana.scale = 0.05
    banana.velocityX = -3;
    foodGroup.add(banana);
  }
}

function Stones() {
  if (frameCount % 400 === 0) {
    stone = createSprite(400, 380, 10, 10);
    stone.addImage("stone", stoneImg);
    stone.scale = 0.2
    stone.velocityX = -3;
    obstacleGroup.add(stone);
  }
}