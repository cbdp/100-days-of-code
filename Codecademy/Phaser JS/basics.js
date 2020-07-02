const gameState = {};

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
};

function create() {
  gameState.codey = this.add.sprite(250, 250, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys();
};

function update() {
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 1;
  }
  if (gameState.cursors.up.isDown) {
    gameState.codey.y -= 1;
  }
  if (gameState.cursors.left.isDown) {
    gameState.codey.x -= 1;
  }
  if (gameState.cursors.right.isDown) {
    gameState.codey.x += 1;
  }
}

const config = {
  width: 500,
  height: 500,
  backgroundColor: '0xdda0dd',
  scene: {
    preload,
    create,
    update,
  },
}

const game = new Phaser.Game(config);