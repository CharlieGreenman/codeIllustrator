document.addEventListener("DOMContentLoaded", domLoaded, false);

function domLoaded(){


  function createGridIllustrator(){

    var c = document.getElementById("canvasGrid");
    var ctx = c.getContext("2d");
    //module for creating a grid
   var pixSize = 20, pixCount = 50;
      for(var r = 0; r < pixCount; r++) {
        for(var i = 0; i < pixCount; i++) {

          //random color function
          ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
          ctx.fillRect(r * pixSize + 1, i * pixSize, pixSize, pixSize);
          }
      }
  }

  var createGrid = document.getElementById("create_grid");


  createGrid.addEventListener("click", createGridIllustrator, false);

}


