"use strict";

document.addEventListener("DOMContentLoaded", domLoaded, false);

function domLoaded() {

  var c = document.getElementById("canvasGrid");
  var ctx = c.getContext("2d");
  var createGrid = document.getElementById("create_grid");
  var rowCount = document.getElementById("input-for-rows").value;
  var columnCount = document.getElementById("input-for-columns").value;
  var pixSize = document.getElementById("input-for-pixel-size").value;

  function createGridIllustrator() {
    //module for creating a grid
    for (var r = 0; r < columnCount; r++) {
      for (var i = 0; i < rowCount; i++) {
        ctx.strokeStyle = "#3e4649";
        ctx.strokeRect(r * pixSize, i * pixSize, pixSize, pixSize);
      }
    }
  }

  createGrid.addEventListener("click", createGridIllustrator, false);

  function handleClick(e) {
    //var pixSize = document.getElementById("input-for-pixel-size").value;

    ctx.fillStyle = "black";
    ctx.fillRect(Math.floor(e.offsetX / pixSize) * pixSize, Math.floor(e.offsetY / pixSize) * pixSize, pixSize, pixSize);
  }

  c.addEventListener("click", handleClick);
}