
/**
 * @constructor
 * @param {string} title - Pixelator
 * @param {string} author - Charlie Greenman
 */
import utils from "./_utils.js";
import grid from "./_grid.js";
import hndClck from "./_when-clicked.js";
import convert from "./_conversion.js";
import convertJS from "./_js-conversion.js";

var s, elem, x, y, z,
 colorNum = 0,
 arrMap = [],
 c = document.getElementById("canvasGrid"),
 ctx = c.getContext("2d"),
 bitIllustrator = {
     elements: {
      codeBoxContainer: document.getElementById("code_box_container"),
      headerContainer: document.getElementById("header-container"),
      codeBox: document.getElementById("code_box"),
      cssToggle: document.getElementById("css_toggle"),
      sassToggle: document.getElementById("sass_toggle"),
      lessToggle: document.getElementById("less_toggle"),
      jsToggle: document.getElementById("js_toggle"),
      viewButton: document.getElementById("view-button"),
      drawButton: document.getElementById("draw-button"),
      codeBoxToggle: document.getElementById("code_box_toggle"),
      hexColor: document.getElementById("hex_color"),
      colorBar: document.getElementById("color_bar"),
      rgb: document.querySelectorAll(".rgb"),
      red: document.getElementById("red"),
      green: document.getElementById("green"),
      blue: document.getElementById("blue")
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
      storeValues: [],
      storeColors: [],
      sassColorVariables: [],
      lessColorVariables: []
    },

    init: () => {
      elem = bitIllustrator.elements;
      s = bitIllustrator.settings;
      bitIllustrator.bindActions();
    },

    bindActions: () => {
      s.createGrid.addEventListener("click",() =>{
        bitIllustrator.updatedSettings();
        bitIllustrator.hideShow();
        bitIllustrator.resizeGrid();
        grid.createGridIllustrator();
      });
      elem.viewButton.addEventListener("click", () =>{
        bitIllustrator.removeTiles();
        bitIllustrator.addBackTiles();
      });
      elem.drawButton.addEventListener("click", function(){
        bitIllustrator.redoGrid();
      });
      s.resetButton.addEventListener("click", bitIllustrator.resetButton, false);
      c.addEventListener("click", function(){
         grid.handleClick();
         hndClck.addColors();
         hndClck.convertToArray();
         hndClck.convertToCss();
      });
      elem.cssToggle.addEventListener("click", function(){
         bitIllustrator.convertToCss();
      });
      elem.sassToggle.addEventListener("click", function(){
         convert.addSassVariables();
         convert.convertToSass();
      });
      elem.lessToggle.addEventListener("click", function(){
         convert.addLessVariables();
         convert.convertToLess();
      });
      elem.hexColor.addEventListener("input", function(){
         bitIllustrator.pickHexColor();
      });
      //consider revision
      for(var i = 0; i < 3; i++){
        elem.rgb[i].addEventListener("input", bitIllustrator.pickRgbColor, false);
      }
      elem.jsToggle.addEventListener("click", function(){
         convertJS.addEmptyArrayMap();
         convertJS.addArrayMap();
         convertJS.addArrMapCode();
         convertJS.addColorMap();
         bitIllustrator.convertToJs();
      });
      elem.codeBoxToggle.addEventListener("click", bitIllustrator.codeBoxToggle, false);
    },

   resetButton: () =>{
      location.reload();
   },

    updatedSettings: () =>{
      s.rowCount = document.getElementById("input-for-rows").value;
      s.columnCount = document.getElementById("input-for-columns").value;
      s.pixSize = document.getElementById("input-for-pixel-size").value;
    },

    hideShow: () => {
      s.chooseSizeContainer.style.display = "none";
      elem.headerContainer.style.display = "block";
      s.canvas.style.display = "block";
    },

   resizeGrid: () =>{
     s.canvas.width = s.columnCount * s.pixSize;
     s.canvas.height = s.rowCount * s.pixSize;
     s.canvas.style.marginLeft = -(s.columnCount * s.pixSize) / 2 + "px";

   },

   pickHexColor: () =>{
     var newHexValue = elem.hexColor.value;

     elem.colorBar.style.background = newHexValue;

     elem.red.value = utils.hexToRgb(newHexValue).r;
     elem.green.value = utils.hexToRgb(newHexValue).g;
     elem.blue.value = utils.hexToRgb(newHexValue).b;
   },

   pickRgbColor: () =>{
     elem.hexColor.value = utils.rgbToHex(parseFloat(elem.red.value), parseFloat(elem.green.value), parseFloat(elem.blue.value));
     elem.colorBar.style.background = elem.hexColor.value;
   },

   codeBoxToggle: () => {
     elem.codeBoxContainer.classList.toggle("open");
     if(elem.codeBoxContainer.classList.contains("open")){
       elem.codeBoxToggle.innerHTML = " - ";
     }
     else{
       elem.codeBoxToggle.innerHTML = " + ";
     }
   },

   removeTiles: () => {

      for(var r = 0; r < s.columnCount; r++) {
        for(var i = 0; i < s.rowCount; i++) {
          s.canvas.style.background = "none";
          ctx.clearRect(r * s.pixSize, i * s.pixSize, s.pixSize, s.pixSize);
        }
      }
   },

   addBackTiles: () =>{
      for(var pw = 0; pw < s.storeValues.length; pw++){

        ctx.fillRect(parseFloat(s.storeValues[pw][0]), parseFloat(s.storeValues[pw][1]), s.pixSize, s.pixSize);
        ctx.fillStyle = s.storeValues[pw][2];
      }
   },

   redoGrid: () =>{
      for(var r = 0; r < s.columnCount; r++) {
        for(var i = 0; i < s.rowCount; i++) {
          s.canvas.style.background = "rgba(0, 0, 0, 0.1)";
          ctx.strokeStyle = "#3e4649";
          ctx.strokeRect(r * s.pixSize, i * s.pixSize, s.pixSize, s.pixSize);
        }
      }

     for(var pw = 0; pw < s.storeValues.length; pw++){

        ctx.fillRect(parseFloat(s.storeValues[pw][0]), parseFloat(s.storeValues[pw][1]), s.pixSize, s.pixSize);
        ctx.fillStyle = s.storeValues[pw][2];
      }

   },

   convertToJs: () =>{
      elem.codeBox.classList.remove("css_box", "sass_box", "less_box");
      elem.codeBox.classList.add("js_box");
   }
  };

bitIllustrator.init();






