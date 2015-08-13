/**
 * @constructor
 * @param {string} title - Pixelator
 * @param {string} author - Charlie Greenman
 */

"use strict";

document.addEventListener("DOMContentLoaded", domLoaded, false);

function domLoaded() {

  var s,
      elem,
      c = document.getElementById("canvasGrid"),
      ctx = c.getContext("2d"),
      bitIllustrator = {
    elements: {
      codeBoxContainer: document.getElementById("code_box_container"),
      headerContainer: document.getElementById("header-container"),
      codeBox: document.getElementById("code_box"),
      cssToggle: document.getElementById("css_toggle"),
      sassToggle: document.getElementById("sass_toggle"),
      jsToggle: document.getElementById("js_toggle"),
      viewButton: document.getElementById("view-button"),
      drawButton: document.getElementById("draw-button")
    },
    settings: {
      resetButton: document.getElementById("reset-button"),
      chooseSizeContainer: document.getElementById("choose_size_container"),
      canvas: document.getElementById("canvasGrid"),
      createGrid: document.getElementById("create_grid"),
      rowCount: document.getElementById("input-for-rows").value,
      columnCount: document.getElementById("input-for-columns").value,
      pixSize: document.getElementById("input-for-pixel-size").value,
      codeBox: document.getElementById("code_box"),
      codeBoxToggle: document.getElementById("code_box_toggle"),
      storeValues: []
    },

    init: function init() {
      elem = bitIllustrator.elements;
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
      elem.viewButton.addEventListener("click", function () {
        bitIllustrator.removeTiles();
        bitIllustrator.addBackTiles();
      });
      elem.drawButton.addEventListener("click", function () {
        bitIllustrator.redoGrid();
      });
      s.resetButton.addEventListener("click", bitIllustrator.resetButton, false);
      c.addEventListener("click", function () {
        bitIllustrator.handleClick();
        bitIllustrator.convertToArray();
        bitIllustrator.convertToCss();
      });
      elem.cssToggle.addEventListener("click", function () {
        bitIllustrator.convertToCss();
      });
      elem.sassToggle.addEventListener("click", function () {
        bitIllustrator.convertToSass();
      });
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
      elem.headerContainer.style.display = "block";
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

    //utility functions

    //compare functions
    compare: function compare(a, b) {

      if (parseFloat(a[0]) - parseFloat(b[0]) === 0) {
        return parseFloat(a[1]) - parseFloat(b[1]);
      } else {
        return parseFloat(a[0]) - parseFloat(b[0]);
      }
    },

    /* create multi-dimensional array
       that is sorted by x value */
    convertToArray: function convertToArray(e) {
      e = e || window.event;
      var xVal = Math.floor(e.offsetX / s.pixSize) * s.pixSize;
      var yVal = Math.floor(e.offsetY / s.pixSize) * s.pixSize;

      s.storeValues.push([xVal, yVal, "black"]);

      for (var i = 0; i < 2; i++) {
        s.storeValues[s.storeValues.length - 1][i] += "px";
      }

      for (var io = 0; io < s.storeValues.length - 1; io++) {
        //decided it made more sense to remove pushed value in array and then to parse through and remove value
        //used this stackoverflow http://stackoverflow.com/questions/26635297/how-to-remove-an-array-from-a-multidimensional-array-if-it-exists-in-another-mul
        if (JSON.stringify(s.storeValues[io]) === JSON.stringify(s.storeValues[s.storeValues.length - 1])) {
          s.storeValues.splice(io, 1);
          s.storeValues.splice(s.storeValues.length - 1, 1);
        }
      }

      s.storeValues.sort(bitIllustrator.compare);
    },

    //allow individual boxes to be clicked
    // handleClick is still in prototyping phase
    handleClick: function handleClick(e) {
      e = e || window.event;
      ctx.fillStyle = "black";
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
      elem.codeBoxContainer.style.bottom = "0";
    },

    removeTiles: function removeTiles() {

      for (var r = 0; r < s.columnCount; r++) {
        for (var i = 0; i < s.rowCount; i++) {
          s.canvas.style.background = "none";
          ctx.clearRect(r * s.pixSize, i * s.pixSize, s.pixSize, s.pixSize);
        }
      }
    },

    addBackTiles: function addBackTiles() {
      for (var pw = 0; pw < s.storeValues.length; pw++) {
        ctx.fillRect(parseFloat(s.storeValues[pw][0]), parseFloat(s.storeValues[pw][1]), s.pixSize, s.pixSize);
      }
    },

    redoGrid: function redoGrid() {
      for (var r = 0; r < 20; r++) {
        for (var i = 0; i < 20; i++) {
          s.canvas.style.background = "rgba(0, 0, 0, 0.1)";
          ctx.strokeStyle = "#3e4649";
          ctx.strokeRect(r * s.pixSize, i * s.pixSize, s.pixSize, s.pixSize);
        }
      }

      for (var pw = 0; pw < s.storeValues.length; pw++) {
        ctx.fillRect(parseFloat(s.storeValues[pw][0]), parseFloat(s.storeValues[pw][1]), s.pixSize, s.pixSize);
      }
    },
    convertToCss: function convertToCss() {
      /* reset value for elem.codeBox */
      elem.codeBox.innerHTML = "box-shadow: ";
      /* instead of re-inserting value, need to think of how to do this */
      for (var abc = 0; abc < s.storeValues.length; abc++) {
        if (abc === s.storeValues.length - 1) {
          elem.codeBox.innerHTML += s.storeValues[abc].join(" ") + "; ";
        } else {
          elem.codeBox.innerHTML += s.storeValues[abc].join(" ") + ", ";
        }
      }
    },

    convertToSass: function convertToSass() {
      elem.codeBox.innerHTML = "box-shadow: ";
      for (var xyz = 0; xyz < s.storeValues.length; xyz++) {
        elem.codeBox.innerHTML += " $x" + parseFloat(s.storeValues[xyz][0]) / s.pixSize;
        elem.codeBox.innerHTML += " $y" + parseFloat(s.storeValues[xyz][1]) / s.pixSize;
        if (xyz === s.storeValues.length - 1) {
          elem.codeBox.innerHTML += " black;";
        } else {
          elem.codeBox.innerHTML += " black,";
        }
      }
    }
    //if color already exists, then change it back to default
  };

  bitIllustrator.init();
}