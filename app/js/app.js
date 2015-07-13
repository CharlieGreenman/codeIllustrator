document.addEventListener("DOMContentLoaded", domLoaded, false);

function domLoaded(){

var s,
 c = document.getElementById("canvasGrid"),
 ctx = c.getContext("2d"),
 bitIllustrator = {

    settings: {
      createGrid: document.getElementById("create_grid"),
      rowCount: document.getElementById("input-for-rows").value,
      columnCount: document.getElementById("input-for-columns").value,
      pixSize: document.getElementById("input-for-pixel-size").value

    },

    init: function() {
      s = bitIllustrator.settings;
      this.bindActions();
    },

    bindActions: function() {
      s.createGrid.addEventListener("click", bitIllustrator.createGridIllustrator, false);
      c.addEventListener("click", bitIllustrator.handleClick, false);
    },

    createGridIllustrator: function() {
      //module for creating a grid
      for(var r = 0; r < s.columnCount; r++) {
        for(var i = 0; i < s.rowCount; i++) {
          ctx.strokeStyle = "#3e4649";
          ctx.strokeRect(r * s.pixSize, i * s.pixSize, s.pixSize, s.pixSize);
        }
      }
    },

    handleClick: function(e) {
      ctx.fillStyle = "black";
      ctx.fillRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
                   Math.floor(e.offsetY / s.pixSize) * s.pixSize,
                   s.pixSize, s.pixSize);
    }


  };

  bitIllustrator.init();

}


