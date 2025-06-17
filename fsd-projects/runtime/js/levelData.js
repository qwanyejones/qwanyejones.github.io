var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY - 125, damage: 10 },
          { type: "sawblade", x: 800, y: groundY - 115, damage: 13},
          { type: "sawblade", x: 1100, y: groundY - 25, damage: 15},
          { type: "enemy", x: 1200, y: groundY - 60, speed: -3, image: "img/blueEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1400, y: groundY - 50, speed: -2, image: "img/orangeEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1600, y: groundY - 70, speed: -2, image: "img/purpleEnemy.png", offsetX: -35, offsetY: -25, scale: 0.13},
          { type: "reward", x: 700, y: groundY - 5  , speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 900, y: groundY - 75  , speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          {  type: "reward", x: 1100, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          {  type: "reward", x: 1500, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "marker", x: 2000, y: groundY -   75, speed: -3, image: "img/sewerMarker.png", offsetX: -35, offsetY: -25, scale: 0.8},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY - 125, damage: 10 },
          { type: "sawblade", x: 800, y: groundY - 115, damage: 13},
          { type: "sawblade", x: 1100, y: groundY - 25, damage: 15},
          { type: "enemy", x: 1200, y: groundY - 60, speed: -3, image: "img/blueEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1400, y: groundY - 50, speed: -2, image: "img/orangeEnemy.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "enemy", x: 1600, y: groundY - 70, speed: -2, image: "img/purpleEnemy.png", offsetX: -35, offsetY: -25, scale: 0.13},
          { type: "reward", x: 700, y: groundY - 5  , speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "reward", x: 900, y: groundY - 75  , speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          {  type: "reward", x: 1100, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          {  type: "reward", x: 1500, y: groundY - 5, speed: -3, image: "img/pizzaReward.png", offsetX: -35, offsetY: -25, scale: 0.1},
          { type: "marker", x: 2000, y: groundY -   75, speed: -3, image: "img/sewerMarker.png", offsetX: -35, offsetY: -25, scale: 0.8},

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
