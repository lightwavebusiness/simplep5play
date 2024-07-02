let player;
let platforms = [];
let gravity = 1;
let jumpPower = -15;

function setup() {
  createCanvas(800, 600);

  // Create the player sprite
  player = createSprite(400, 300, 50, 50);
  player.shapeColor = color(255, 0, 0);

  // Create some platforms
  platforms.push(createSprite(400, 580, 800, 20)); // ground platform
  platforms.push(createSprite(200, 400, 200, 20));
  platforms.push(createSprite(600, 300, 200, 20));
}

function draw() {
  background(200);

  // Apply gravity
  player.velocity.y += gravity;

  // Player controls
  if (keyDown(LEFT_ARROW)) {
    player.velocity.x = -5;
  } else if (keyDown(RIGHT_ARROW)) {
    player.velocity.x = 5;
  } else {
    player.velocity.x = 0;
  }

  if (keyDown(UP_ARROW) && player.touching.bottom) {
    console.log("UP");
    player.velocity.y = jumpPower;
  }

  // Collide the player with the platforms
  for (let i = 0; i < platforms.length; i++) {
    player.collide(platforms[i]);
  }

  drawSprites();
}
