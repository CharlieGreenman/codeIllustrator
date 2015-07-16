"use strict";

document.addEventListener("DOMContentLoaded", domLoaded, false);

function domLoaded() {

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
      pixSize: document.getElementById("input-for-pixel-size").value,
      codeBox: document.getElementById("code_box"),
      codeBoxToggle: document.getElementById("code_box_toggle")
    },

    init: function init() {
      s = bitIllustrator.settings;
      this.bindActions();
    },

    bindActions: function bindActions() {
      s.createGrid.addEventListener("click", function () {
        bitIllustrator.updatedSettings();
        bitIllustrator.hideShow();
        bitIllustrator.resizeGrid();
        bitIllustrator.createGridIllustrator();
      });
      s.resetButton.addEventListener("click", bitIllustrator.resetButton, false);
      c.addEventListener("click", bitIllustrator.handleClick, false);
      s.codeBoxToggle.addEventListener("click", bitIllustrator.codeBoxToggle, false);
    },

    resetButton: function resetButton() {
      location.reload();
    },

    updatedSettings: function updatedSettings() {
      s.rowCount = document.getElementById("input-for-rows").value;
      s.columnCount = document.getElementById("input-for-columns").value;
      s.pixSize = document.getElementById("input-for-pixel-size").value;
    },

    hideShow: function hideShow() {
      s.chooseSizeContainer.style.display = "none";
      s.resetButton.style.display = "block";
      s.canvas.style.display = "block";
    },

    resizeGrid: function resizeGrid() {
      s.canvas.width = s.columnCount * s.pixSize;
      s.canvas.height = s.rowCount * s.pixSize;
      s.canvas.style.marginLeft = -(s.columnCount * s.pixSize) / 2 + "px";
    },

    //create grid and create boxes
    createGridIllustrator: function createGridIllustrator() {
      //module for creating a grid

      for (var r = 0; r < s.columnCount; r++) {
        for (var i = 0; i < s.rowCount; i++) {
          ctx.strokeStyle = "#3e4649";
          ctx.strokeRect(r * s.pixSize, i * s.pixSize, s.pixSize, s.pixSize);
        }
      }
    },

    //allow individual boxes to be clicked
    handleClick: function handleClick(e) {
      ctx.fillStyle = "black";
      //remove color behind it, to save memory leaks
      //ctx.clearRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
      //             Math.floor(e.offsetY / s.pixSize) * s.pixSize,
      //             s.pixSize, s.pixSize);

      var imgData = ctx.getImageData(Math.floor(e.offsetX / s.pixSize) * s.pixSize, Math.floor(e.offsetY / s.pixSize) * s.pixSize, s.pixSize, s.pixSize);
      if (imgData.data[0] === 0) {
        ctx.fillStyle = "#333333";
        ctx.strokeStyle = "#3e4649";
        ctx.lineWidth = 2;
        // each individual blank piece is now removed and added using canvas
        // as opposed to how it is/was originally used, which is through
        //
        ctx.clearRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize, Math.floor(e.offsetY / s.pixSize) * s.pixSize, s.pixSize, s.pixSize);
        ctx.strokeRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize, Math.floor(e.offsetY / s.pixSize) * s.pixSize, s.pixSize, s.pixSize);

        return false;
      }

      ctx.fillRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize, Math.floor(e.offsetY / s.pixSize) * s.pixSize, s.pixSize, s.pixSize);
    },

    codeBoxToggle: function codeBoxToggle() {
      s.codeBox.style.marginBottom = "0";
      s.codeBoxToggle.style.bottom = "200px";
    }

    //if color already exists, then change it back to default

  };

  bitIllustrator.init();
}