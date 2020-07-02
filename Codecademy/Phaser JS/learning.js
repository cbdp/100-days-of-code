///// Hello world /////

function create() {
  this.add.text(50, 100, "Hello World", { font: "40px Times New Roman", fill: "lightblue"});
  this.add.text(130, 300, "by A. Bird", { font: "20px Times New Roman", fill: "lightblue"});
}

const config = {
	type: Phaser.AUTO,
	width: 600,
	height: 600,
	backgroundColor: "black",
	scene: {
    create
	}
};

const game = new Phaser.Game(config);



///// Draw circles /////

function create() {
  let circle1 = this.add.circle(50, 100, 90, 0xFFF070);
  let circle2 = this.add.circle(95, 300, 80, 0xFF0000);
  let circle3 = this.add.circle(200, 200, 100, 0x9F00D0);

  // this.add.circle(x, y, radius, fillColor)
  // x = coord for center of circle
  // y = coord for center of circle
  // radius = radius
  //fillColor = fillColor
  let circle4 = this.add.circle(400, 400, 200, 0x00E030);
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	scene: {
    create
	}
}

const game = new Phaser.Game(config)



///// Draw sprite /////

/* Phaser gives us very similar tools to create a GameObject for sprites that we provide. 
A sprite is an image that is intended to represent a character, enemy, or some other 
object in a game. We use image files for a lot of different things in games, including 
backgrounds and icons, but sprites represent a person or item inside the game itself.

In order to add a sprite we can call this.add.sprite(). However, we need to load in the 
image we want to use as a sprite in an earlier step. preload() is the name of the function 
that happens before create(). Where create() is about setting up all the game objects to 
set the stage for our game, preload() is about loading in all asset files that we’ll be 
using. “Assets” could refer to lots of things but, for now, our assets will consist of 
sprites, background images, in-game sounds, and background music. */

function preload() {
  // Load in the sprite
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  // Create a sprite game object
  this.add.sprite(225, 300, 'codey');
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)



///// Draw A Background Image /////

/* Now that we’ve covered drawing a sprite, let’s talk about drawing a background image. A 
background image is not a sprite — usually the player will not interact with the background 
at all. Because of this, we don’t need a sprite object for our background images. We still 
need to load in the image in our preload() function but we can use this.add.image() instead 
of this.add.sprite(): */

function preload() {
  // Load in the background image
  this.load.image('sky', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg');
}

function create() {
  // Put the background image in the scene
  this.add.image(225, -10, 'sky')
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)



///// Create config /////

/* We’ve been making GameObjects in an existing game, but let’s take a step back and think about how 
to create a Phaser game from the beginning. We can do that by calling new Phaser.Game(). 
Phaser.Game() by itself creates a new <canvas> element and appends it to your HTML document. This 
element allows Phaser to draw sprites and shapes to a website.

In order to make games of our own design, we call Phaser.Game() with an object that specifies some 
meta-information about the game. We define that object beforehand and conventionally name the variable 
config. Here are some of the keys we can define in a config:

- height: the height, in pixels, of the <canvas> Phaser creates.
- width: the width, in pixels, of the <canvas> Phaser creates.
- parent: the HTML element that Phaser will place the <canvas> element inside of.
- backgroundColor: the background color of our game, usually given in hexadecimal.
- type: the Renderer Phaser will use: either Phaser.WEBGL which offers some additional features while 
    drawing or Phaser.CANVAS which can run on more browsers. The default, Phaser.AUTO, checks if the 
    browser supports WebGL and, if not, switches to canvas.
- There is plenty more data that we could possibly add to configure our games, but these basics will 
    get us pretty far. */

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 500,
  backgroundColor: 0xffff77
}

const game = new Phaser.Game(config)



///// Making a scene /////

/* Phaser games are composed of Scenes that we define and pass to Phaser in the config! A Phaser Scene can 
have any of the following functions:

- preload(), where we load in external files (or “assets”) to our game. 
- create(), where we define the GameObjects that are necessary at the start of our game. 
- update() where we define animation and interaction in our game (more on this later!)

When defining a Scene, it’s only necessary to define the functions we need. So we don’t need to define 
a preload() function for a game that doesn’t use external assets, for instance. After these functions are 
defined, they’re passed in as an object to the Phaser config.

The this object which we refer to so often in these methods refers to the Scene itself! Relatedly, this.load 
and this.add are helper libraries the Scene provides with methods (like this.load.image() and this.add.circle()) 
that allow us to load in files and create game objects respectively.

In our config we added in a new key, scene, and pass an object to it. The object maps our preload() function to 
the scene and our create() function to the scene. Note that we are using JavaScript’s property-value shorthand, 
the code above would be the same if we passed { preload: preload, create: create } to the scene instead. */

// Create a create() function here:
// Do not use arrow functions or it will fail!
function create() {
  this.add.text(225, 300, 'Game name')
};

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#a0a0dd",
  // Add in the scene information in the config here:
  scene: {
    create,
  },
}

const game = new Phaser.Game(config)



///// Moving /////

/* Now we’re going to add motion to our Phaser game! You might recall that we can add an update() function 
to our Scene that adds motion, animation, and interaction! We’re going to start with something very simple: 
Moving an object across the screen. If we create a GameObject centered at (0, 100), that is, if we create a 
GameObject with its x value equal to 0 and its y value equal to 100, we can move it across the screen in the 
update() function */

let codey;

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  codey = this.add.sprite(30, 200, 'codey')
}

// Create your update() function
function update() {
  codey.x += 1;
};

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 400,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)




///// Storing State / gameState /////

/* Because we handle all of our Scene information in different functions, it becomes important to pass information 
between our Scene functions. Something we created in create() will need to be updated in update(), for instance. 
There are a few ways we can accomplish this:

- Create global variables for everything.
- Attach important variables to the Scene itself by creating a new property for this from within a Scene method.
- Create a gameState object and keep track of the state there.

Each solution is a valid technique, but we’re going to focus on creating a gameState object and manipulating that 
from now on. */

// Define "gameState" here
const gameState = {};

function create() {
  // Create a circle and assign it to gameState.circle here
  gameState.circle = this.add.circle();
}

function update() {
  // Update the circle in gameState.circle here
  gameState.circle.y += 1;
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)



///// Input /////

/* It’s time to make a game that we can actually play! Phaser gives us ways to handle mouse and keyboard input, so 
that we can trigger events to happen in the game. In this exercise we’re going to look at ways to use the mouse, 
but we’ll be covering keyboard input in our next exercise.

In order to interact with a GameObject, we need to call the setInteractive() method on it. The setInteractive() 
method tells Phaser to listen in for interactive events on the GameObject.

After calling setInteractive() we can provide the GameObject with an event handler. The event handler is a 
function that gets called when a specific interaction has happened to the GameObject. We’re going to look at four 
different possible events in this exercise:

- 'pointerdown': this event gets called when the mouse button has been pressed (but not released) on the GameObject.
- 'pointerup': this event gets called when the mouse button has been released over a GameObject.
- 'pointerover': this event gets called when the mouse pointer hovers over the GameObject.
- 'pointerout': this event gets called when a mouse pointer that was hovering over a GameObject is moved somewhere else.

It’s interesting to consider 'pointerdown' and 'pointerup' are completely separate events. “A mouse click is a mouse 
click, you can’t say it’s only half” one might say. Not to meander too far into the dark forests of user experience 
and game design, let’s just clarify that pressing down the mouse is done much more haphazardly than releasing the 
mouse. A player may realize they had not intended to click somewhere, drag their cursor away to release. If we capture 
the 'pointerup' event, we’ll only do things after the mouse click has been finished. If we only use the 'pointerdown' 
event, we’ll ignore a player who realized they have misclicked.

Now let’s say we wanted to make our famous circle GameObject change colors at the click of a mouse. We would use the 
'pointerup' event for that, because that means the mouse has been clicked and released. We would add an event listener 
to change the color on the 'pointerup' event. */

const gameState = {
  onColor: 0xaaffaa,
  offColor: 0xffaaaa
}

function create() {
  gameState.rect1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
  gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);

/* The .on() method takes two arguments: the name of the event ('pointerup') and the callback function. We create a 
new function as the second argument, with one line inside of it: reassigning this.fillColor. Updating this.fillColor 
changes the color of the circle.  Notice that we have a change in our game’s state without defining an update() 
function. Event listeners can be defined in the create() function because they’re part of the definition of the 
GameObject and the setup of the Game. */
  gameState.rect1.setInteractive();
  gameState.rect2.setInteractive();
    
  gameState.rect1.on('pointerup', function() {
    gameState.rect1.fillColor = gameState.onColor;
    gameState.rect2.fillColor = gameState.offColor;
  });
    
  gameState.rect2.on('pointerup', function() {
    gameState.rect2.fillColor = gameState.onColor;
    gameState.rect1.fillColor = gameState.offColor;
  });

}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 450,
  backgroundColor: 0x333333,
  scene: {
    create
  }
}

const game = new Phaser.Game(config)



///// Keyboard Events /////
/* Only some games use the mouse to play. Plenty of browser games, especially those with more complex gameplay, 
require keyboard input. Before, we assigned mouse events to specific GameObjects. This helped us tell if a mouse 
cursor was hovering over, or clicking on, an object in our game. Where mouse clicks take place at a specific point 
in our game with x and y coordinates, a keyboard offers a different interface without that positional information. 
So our keyboard handlers will handle any keypress that happens while our game is in focus — for this reason they 
won’t be registered as events to particular GameObjects in our game.

The first way of adding a keypress handler is by calling this.input.keyboard.on(). This takes two arguments: first, the 
name of the event — something like "keyboard-A" for the A keypress. Next, the function to be called when handling the 
keypress. We can pass a function we’ve defined elsewhere, but unless you’re duplicating functionality (say to avoid 
replicating the same code for a keyboard and a gamepad) it’s fine to define an anonymous function. */

// createCursorKeys()
/* Another way of adding a keyboard event listener is by using a shortcut that Phaser offers, createCursorKeys(). This 
creates an object that maps the names of some usual cursor keys (UP, DOWN, LEFT, RIGHT, SHIFT, and SPACE) to a cursor 
object that we can use to detect when they’ve been pressed. We can save those as a property in our gameState object 
and then check if they’re pressed within our update() function. */

const gameState = {}

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey')
  // Set cursor keys
  gameState.cursors = this.input.keyboard.createCursorKeys();

}

function update() {
  // Update based on keypress
 if (gameState.cursors.right.isDown) { 
   gameState.codey.x += 5;
 };
 if (gameState.cursors.left.isDown) {
   gameState.codey.x -= 5;
 };
 if (gameState.cursors.up.isDown) {
   gameState.codey.y -= 5;
 };
 if (gameState.cursors.down.isDown) {
   gameState.codey.y += 5;
 };
}

const config = {
	type: Phaser.AUTO,
	width: 600,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)


///// Sounds /////
/* Games aren’t just idle toys. Many games cultivate experiences, blurring the distinction between a momentary diversion
and artwork that you can interact with. To this end, there’s few things that can prop up the player’s immersion like
good music and sound design. Since sounds are assets (like sprites and images), we load them in during the preload()
function. First let’s handle playing music for a scene, here’s how we’d do that:

const gameState = {};
function preload() {
  this.load.audio('theme', 'assets/music/theme.wav');
}
function create() {
  gameState.music = this.sound.add('theme');
  gameState.music.play();
}
const config = { scene: { preload, create }};
const game = new Phaser.Game(config);

First we load in the our theme song asset in preload(). We provide this.load.audio() with the key 'theme', similar to 
how we give keys to our visual assets. After the key, we also need to provide this.load.audio() with the path to the 
asset. Then we put the loaded asset in our scene in our create() function using this.sound.add(). This creates a sound 
object that we can .play(). We save that sound object as the value for gameState.music and immediately call the .play() 
method. We might also want a sound to play whenever a specific action takes place. Example of code below: */

const gameState = {}

function preload() {
  // load  'incredible' sound
    this.load.audio('incredible', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/incredible.mp3')
    this.load.audio('awesome', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/reallyawesome.mp3')

}

function create() {
  // add  'incredible' sound to scene
  gameState.incredible = this.sound.add('incredible');
  gameState.awesome = this.sound.add('awesome');
  
  // Display "Incredible" and "Really, really awesome" buttons
  gameState.incredibleBox = this.add.rectangle(200, 150, 300, 200, 0xdadaaa)
  gameState.awesomeBox = this.add.rectangle(200, 400, 300, 200, 0xaadada)
  gameState.incredibleText = this.add.text(150, 135, "Incredible", { fill: "#222222", font: "20px Times New Roman"})
  gameState.awesomeText = this.add.text(110, 385, "Really, really awesome", { fill: "#222222", font: "20px Times New Roman"})
  gameState.incredibleBox.setInteractive();
  gameState.awesomeBox.setInteractive();

  // add a 'pointerup' handler to incredibleBox here:
  gameState.awesomeBox.on('pointerup', function() {
    gameState.awesome.play()
  })

  gameState.incredibleBox.on('pointerup', function() {
    gameState.incredible.play()
  })
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 600,
  backgroundColor: "#333333",
  scene: {
    preload,
    create
  }
}

const game = new Phaser.Game(config)