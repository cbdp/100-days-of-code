function preload() {
    this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_1.png');
    this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_2.png');
    this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_3.png');
    this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png');
    this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/codey.png');
    this.load.image('bugPellet', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bugPellet.png');
    this.load.image('bugRepellent', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bugRepellent.png');
}

// Helper Methods below:
// sortedEnemies() returns an array of enemy sprites sorted by their x coordinate
function sortedEnemies() {
    const orderedByXCoord = gameState.enemies.getChildren().sort((a, b) => a.x - b.x);
    return orderedByXCoord;
}
// numOfTotalEnemies() returns the number of total enemies 
function numOfTotalEnemies() {
    const totalEnemies = gameState.enemies.getChildren().length;
    return totalEnemies;
}

const gameState = {
    // enemies: this.physics.add.group(),
    enemyVelocity: 1, // could also be assigned in create();
};

///// CREATE /////

function create() {
    // When gameState.active is true, the game is being played and not over. When gameState.active is false, then it's game over
    gameState.active = true;
    gameState.won = false;

    // When gameState.active is false, the game will listen for a pointerup event and restart when the event happens
    // unless you win, which seems weird...
    // oh I see, it's because of the if (numOfTotalEnemies === 0) always sets it to false?
    this.input.on('pointerup', () => {
        if (gameState.active === false) {
            this.scene.restart();
        } 
        // this doesn't work
        else if (gameState.won === true) {
          this.scene.restart();
        };
    });

    // Creating static platforms
    const platforms = this.physics.add.staticGroup();
    platforms.create(225, 490, 'platform').setScale(1, .3).refreshBody();

    // Displays the initial number of bugs, this value is initially hardcoded as 24 
    gameState.scoreText = this.add.text(175, 482, 'Bugs Left: 24', {
        fontSize: '15px',
        fill: '#000000'
    });

    // Uses the physics plugin to create Codey
    gameState.player = this.physics.add.sprite(225, 450, 'codey').setScale(.5);

    // Create Collider objects
    gameState.player.setCollideWorldBounds(true);
    this.physics.add.collider(gameState.player, platforms);

    // Creates cursor objects to be used in update()
    gameState.cursors = this.input.keyboard.createCursorKeys();

    // Add new enemy group
    gameState.enemies = this.physics.add.group();

    //Functionality for randomising the bug sprites
    const whichBug = ['bug1', 'bug2', 'bug3'];
    const pickBug = (arr) => arr[Math.floor(Math.random() * arr.length)]
    
    // create enemies in rows of 3, columns of 8
    for (let yVal = 1; yVal < 4; yVal++) {
        for (let xVal = 1; xVal < 9; xVal++) {
            gameState.enemies.create(50 * xVal, 50 * yVal, pickBug(whichBug)).setScale(.6).setGravityY(-200);
        };
    };
    
    // add new pellets group
    const pellets = this.physics.add.group();

    // generate pellets from random bugs
    const genPellet = () => {
        let randomBug = Phaser.Utils.Array.GetRandom(gameState.enemies.getChildren());
        pellets.create(randomBug.x, randomBug.y, 'bugPellet');
    };
    
    // genPellet only runs if called, so add a loop and call it every 300ms.
    gameState.pelletsLoop = this.time.addEvent({
        delay: 300,
        callback: genPellet,
        callbackScope: this,
        loop: true,
    });

    // destroy pellets if they hit the platform
    this.physics.add.collider(pellets, platforms, function(pellet) {
        pellet.destroy();
    })

    // destroy the pellets loop if pellets hit the player and end the game
    this.physics.add.collider(pellets, gameState.player, () => {
        gameState.active = false;
        gameState.pelletsLoop.destroy();
        this.physics.pause();
        gameState.enemyVelocity = 1;
        this.add.text(210, 250, 'Game Over', {
            fontSize: '20px',
            fill: '#000000'
        });
    });
    
    // add new bugRepellent group
    gameState.bugRepellent = this.physics.add.group();

    // add a collider between the bugs and the bugRepellent to destroy the bugs
    this.physics.add.collider(gameState.enemies, gameState.bugRepellent, (bug, repellent) => {
        bug.destroy();
        repellent.destroy();
        gameState.scoreText.setText('Bugs Left: ' + numOfTotalEnemies());
    });

    // add a collider between enemies and the player to end the game, if the bugs touch the player
    this.physics.add.collider(gameState.enemies, gameState.player, () => {
        gameState.active = false;
        gameState.enemyVelocity = 1;
        this.physics.pause();
        this.add.text(160, 200, 'Enemies ate you', {
            fontSize: '45px',
            fill: '#000000'
        });
    });
    
    // add a collider between enemies and the platform to end the game, if the bugs reach the platform
    this.physics.add.collider(gameState.enemies, platforms, () => {
        gameState.active = false;
        gameState.enemyVelocity = 1;
        this.physics.pause();
        this.add.text(160, 200, 'Enemies have reached platform', {
            fontSize: '45px',
            fill: '#000000'
        });
    });
};

///// UPDATE /////

function update() {
    if (gameState.active) {
        // If the game is active, then players can control Codey
        if (gameState.cursors.left.isDown) {
            gameState.player.setVelocityX(-160);
        } else if (gameState.cursors.right.isDown) {
            gameState.player.setVelocityX(160);
        } else {
            gameState.player.setVelocityX(0);
        }

        // Execute code if the spacebar key is pressed
        if (Phaser.Input.Keyboard.JustDown(gameState.cursors.space)) {
            gameState.bugRepellent.create(gameState.player.x, gameState.player.y, 'bugRepellent').setGravityY(-400);
        };

        // logic for winning condition
        if (numOfTotalEnemies() === 0) {
            gameState.active = false;
            // below still does not let me restart game after a win
            gameState.won = true;
            gameState.enemyVelocity = 1;
            this.physics.pause();
            this.add.text(100, 250, 'Game Won!', {
                fontSize: '20px',
                fill: '#000000'
            });
        // and enemy movements
        } else {
            gameState.enemies.getChildren().forEach(bug => {
                bug.x += gameState.enemyVelocity;
            });
            
            gameState.leftMostBug = sortedEnemies()[0];
            gameState.rightMostBug = sortedEnemies()[sortedEnemies().length - 1];
            
            if (gameState.leftMostBug.x < 10 || gameState.rightMostBug.x > 440) {
                gameState.enemyVelocity *= -1;
                gameState.enemies.getChildren().forEach(enemy => {
                    enemy.y += 10;
                })
            }
        }
    }
}

///// CONFIG /////


const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: "b9eaff",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            enableBody: true,
        }
    },
    scene: {
        preload,
        create,
        update
    }
};


const game = new Phaser.Game(config);