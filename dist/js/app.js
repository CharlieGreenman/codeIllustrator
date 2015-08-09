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
      jsToggle: document.getElementById("js_toggle")

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
      s.resetButton.addEventListener("click", bitIllustrator.resetButton, false);
      c.addEventListener("click", function () {
        bitIllustrator.handleClick();
        bitIllustrator.convertToArray();
        bitIllustrator.convertToCode();
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

      //remove value if it already exist
      for (var q = 0; q < s.storeValues.length; q++) {
        var parsedValues = s.storeValues[q].indexOf(xVal + "px", yVal + "px", 0, "black");
        if (parsedValues === q) {
          s.storeValues.splice(parsedValues, 1);
          return false;
          //   s.storeValues.splice(0, 1);
        }
      }

      s.storeValues.push([xVal, yVal, 0, "black"]);

      for (var i = 0; i < 2; i++) {
        s.storeValues[s.storeValues.length - 1][i] += "px";
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

    convertToCode: function convertToCode() {
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
    }
    //if color already exists, then change it back to default
  };

  bitIllustrator.init();
}