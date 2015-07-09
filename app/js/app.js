document.addEventListener("DOMContentLoaded", domLoaded, false);

function domLoaded(){


function createGridIllustrator(){

    var c = document.getElementById("canvasGrid");
    var ctx = c.getContext("2d");
    //module for creating a grid
   var pixSize = 20, pixCount = 25;
      for(var r = 0; r < pixCount; r++) {
        for(var i = 0; i < pixCount; i++) {

          //random color function

          ctx.strokeStyle = "#3e4649";
          ctx.strokeRect(r * pixSize, i * pixSize, pixSize, pixSize);
          }
      }
  }

  var createGrid = document.getElementById("create_grid");


  createGrid.addEventListener("click", createGridIllustrator, false);

}


