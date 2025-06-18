var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      // game items for level 1
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 1000, y: groundY - 115, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 1500, y: groundY - 25, damage: 15, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 1300, y: groundY - 50, damage: 15, image: "img/swords.png", rotation: 0, scale: -0.15, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 1700, y: groundY - 60, damage: 15, image: "img/swords.png", rotation: 0, scale: -0.2, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 900, y: groundY - 50, damage: 15, image: "img/swords.png", rotation: 0, scale: -0.2, offsetX: -25, offsetY: -25},


          { type: "enemy", x: 1100, y: groundY - 60, speed: -3, image: "img/blueEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1250, y: groundY - 50, speed: -3, image: "img/orangeEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1600, y: groundY - 65, speed: -3, image: "img/purpleEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 800, y: groundY - 50, speed: -3, image: "img/orangeEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 600, y: groundY - 60, speed: -3, image: "img/blueEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1400, y: groundY - 65, speed: -3, image: "img/purpleEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},

          { type: "reward", x: 500, y: groundY - 5  , speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 700, y: groundY - 140  , speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 950, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 1400, y: groundY - 5, speed: -2, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 1800, y: groundY - 5, speed: -2, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 1850, y: groundY - 5, speed: -2, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 1900, y: groundY - 5, speed: -2, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 1950, y: groundY - 5, speed: -2, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2000, y: groundY - 5, speed: -2, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},


          { type: "marker", x: 2050, y: groundY -   75, speed: -2, image: "img/sewerMarker.png", offsetX: -35, offsetY: -25, scale: 0.8},
        ],
      }, 
      // game items for level 2
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "reward", x: 300, y: groundY - 5  , speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 350, y: groundY - 5  , speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 400, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 450, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 500, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 550, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 600, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 650, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 700, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 750, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 800, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 850, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 900, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 950, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2300, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2350, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2400, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2450, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2500, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2550, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2600, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2650, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2700, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 2750, y: groundY - 5, speed: -3, image: "img/pizzaBox.png", offsetX: -35, offsetY: -25, scale: 0.1},
          
          
          
          { type: "enemy", x: 1100, y: groundY - 60, speed: -3, image: "img/blueEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1200, y: groundY - 60, speed: -3, image: "img/orangeEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1300, y: groundY - 65, speed: -3, image: "img/purpleEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          
        
          
          
          
          { type: "sawblade", x: 250, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 300, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 350, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 400, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 450, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 500, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 550, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 600, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 650, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 700, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 750, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 800, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 850, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 900, y: groundY - 110, damage: 13, image: "img/sawblade.png", rotation: 30, scale: 1, offsetX: -25, offsetY: -25},
          

       
          { type: "sawblade", x: 1200, y: groundY - 50, damage: 13, image: "img/nunchucks.png", rotation: 0, scale: 0.5, offsetX: -25, offsetY: -25},
          { type: "sawblade", x: 1400, y: groundY - 50, damage: 13, image: "img/nunchucks.png", rotation: 0, scale: 0.5, offsetX: -25, offsetY: -25},
     
          { type: "marker", x: 2800, y: groundY -   75, speed: -3, image: "img/sewerMarker.png", offsetX: -35, offsetY: -25, scale: 0.8},

        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
