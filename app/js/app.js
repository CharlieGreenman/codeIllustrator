document.addEventListener("DOMContentLoaded", domLoaded, false);

function domLoaded(){

var s,
 c = document.getElementById("canvasGrid"),
 ctx = c.getContext("2d"),
 bitIllustrator = {
    settings: {
      resetButton: document.getElementById("reset-button"),
      chooseSizeContainer: document.getElementById("choose_size_container"),
      canvas: document.getElementById("canvasGrid"),
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
      s.createGrid.addEventListener("click", function(){
        bitIllustrator.updatedSettings();
        bitIllustrator.hideShow();
        bitIllustrator.resizeGrid();
        bitIllustrator.createGridIllustrator();
      });
      s.resetButton.addEventListener("click", bitIllustrator.resetButton, false);
      c.addEventListener("click", bitIllustrator.handleClick, false);
    },

   resetButton: function(){
      location.reload();
   },

    updatedSettings: function(){
      s.rowCount = document.getElementById("input-for-rows").value;
      s.columnCount = document.getElementById("input-for-columns").value;
      s.pixSize = document.getElementById("input-for-pixel-size").value;
    },

    hideShow: function() {
      s.chooseSizeContainer.style.display = "none";
      s.resetButton.style.display = "block";
      s.canvas.style.display = "block";
    },

   resizeGrid: function(){
     s.canvas.width = s.columnCount * s.pixSize;
     s.canvas.height = s.rowCount * s.pixSize;
     s.canvas.style.marginLeft = -(s.columnCount * s.pixSize) / 2 + "px";

   },

   //create grid and create boxes
    createGridIllustrator: function() {
      //module for creating a grid

      for(var r = 0; r < s.columnCount; r++) {
        for(var i = 0; i < s.rowCount; i++) {
          ctx.strokeStyle = "#3e4649";
          ctx.strokeRect(r * s.pixSize, i * s.pixSize, s.pixSize, s.pixSize);
        }
      }
    },


   //allow individual boxes to be clicked
    handleClick: function(e) {
      ctx.fillStyle = "black";
      //remove color behind it, to save memory leaks
      //ctx.clearRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
      //             Math.floor(e.offsetY / s.pixSize) * s.pixSize,
      //             s.pixSize, s.pixSize);

       var imgData = ctx.getImageData(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
                   Math.floor(e.offsetY / s.pixSize) * s.pixSize,
                   s.pixSize, s.pixSize);
      if(imgData.data[0] === 0){
        ctx.clearRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
                   Math.floor(e.offsetY / s.pixSize) * s.pixSize,
                   s.pixSize, s.pixSize);
        return false;
      }

      ctx.fillRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
                   Math.floor(e.offsetY / s.pixSize) * s.pixSize,
                   s.pixSize, s.pixSize);
      //var ctxImgData = ctx.getImageData(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
      //             Math.floor(e.offsetY / s.pixSize) * s.pixSize,
      //             s.pixSize, s.pixSize);
      //var colorVal = ctxImgData.data[0];
      /*eslint-disable */

      /*eslint-enable */
      //if(hex !== "#000000"){
      //  ctx.clearRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
      //             Math.floor(e.offsetY / s.pixSize) * s.pixSize,
      //             s.pixSize, s.pixSize);
      //}


    }

   //if color already exists, then change it back to default




  };

  bitIllustrator.init();

}


