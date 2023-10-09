var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var player = {
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  speed: 7.5,
  jumping: false,
  grounded: false,
  velocity: 0,
  jumpHeight: 23,
  gravity: 0.5
};
var coin = {
  x: 100,
  y: 590,
  width: 50,
  height: 50,
  value: 10
};

var enemy = {
  x: 0,
  y: 550,
  width: 25,
  height: 25,
  speed: 3,
  value: -10 
};

var coins = 0;
var enemies = [];
var keys = [];


function drawPlayer() {
  ctx.fillStyle = "Green";
  ctx.fillRect(player.x, player.y, player.width, player.height);

 var platforms = [
  { x: 0, y: 400, width: canvas.width, height: 20 },
  { x: 200, y: 300, width: 150, height: 20 },
  { x: 400, y: 200, width: 100, height: 20 }
];


  
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";
  ctx.fillText("Coins: " + coins, 10, 30);
}

function drawCoin() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(coin.x, coin.y, coin.width, coin.height);
}


function drawEnemies() {
  ctx.fillStyle = "red";
  for (var i = 0; i < enemies.length; i++) {
    ctx.fillRect(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height);
  }
}

function movePlayer() {
  if (keys[87] || keys[38]) {

    if (!player.jumping && player.grounded) {
      player.jumping = true;
      player.grounded = false;
      player.velocity = -player.jumpHeight;
    }
  }
  if (keys[68] || keys[39]) {
  
    if (player.x < canvas.width - player.width) {
      player.x += player.speed;
    }
  }
  if (keys[65] || keys[37]) {
   
    if (player.x > 0) {
      player.x -= player.speed;
   }
  }



  player.velocity += player.gravity;
  player.y += player.velocity;

 
  if (player.y > canvas.height - player.height) {
    player.jumping = false;
    player.grounded = true;
    player.velocity = 0;
    player.y = canvas.height - player.height;
  }

 
  if (
    player.x < coin.x + coin.width &&
    player.x + player.width > coin.x &&
    player.y < coin.y + coin.height &&
    player.y + player.height > coin.y
  ) {
    coins += coin.value;
    coin.x = Math.random() * (canvas.width - coin.width);
    coin.y = Math.random() * (canvas.height - coin.height);
  }
}


function moveEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].x += enemies[i].speed;

    if (
      player.x < enemies[i].x + enemies[i].width &&
      player.x + player.width > enemies[i].x &&
      player.y < enemies[i].y + enemies[i].height &&
      player.y + player.height > enemies[i].y
    ) {
      coins += enemies[i].value;
      enemies.splice(i, 1); 
    }
  }
}

function gameLoop() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  drawPlayer();

 
  drawCoin();



  drawEnemies();


  movePlayer();

  moveEnemies();



  if (Math.random() < 0.01) {
    enemies.push(Object.assign({}, enemy));
  }

  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function(event) {
  keys[event.keyCode] = true;
});

document.addEventListener("keyup", function(event) {
  keys[event.keyCode] = false;
});

gameLoop();
