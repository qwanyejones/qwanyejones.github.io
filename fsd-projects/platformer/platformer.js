$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 620, 275, 10, "darkred");
    createPlatform(1000, 620, 275, 10, "darkred");
    createPlatform(100, 490, 275, 10, "darkred");
    createPlatform(600, 500, 275, 10, "darkred");
    createPlatform(920, 380, 275, 10, "darkred");
    createPlatform(325, 359, 275, 10, "darkred");
    createPlatform(100, 220, 275, 10, "darkred");
    createPlatform(575, 250, 275, 10, "darkred");
    createPlatform(975, 180, 275, 10, "darkred");



    // TODO 3 - Create Collectables
    createCollectable("star", 1100, 582, 0, 3);
    createCollectable("star", 700, 460);
    createCollectable("star", 210, 180);
    createCollectable("star", 1100, 140);
    createCollectable("star", 520, 582);
    createCollectable("star", 1000, 341);


    
    // TODO 4 - Create Cannons
    createCannon("left", 225, 2000);
    createCannon("top", 600, 2000);
    createCannon("right", 570, 2000);
    createCannon("bottom", 850, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
