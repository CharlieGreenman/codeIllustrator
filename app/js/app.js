
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
import cntrlView from "./_control-view.js";
import elem from "./_elem.js";


var s, x, y, z,
 colorNum = 0,
 arrMap = [],
 c = document.getElementById("canvasGrid"),
 ctx = c.getContext("2d"),
 bitIllustrator = {
    init: () => {
      bitIllustrator.bindActions();
    },

    bindActions: () => {
      elem.s.createGrid.addEventListener("click",() =>{
        bitIllustrator.updatedSettings();
        bitIllustrator.hideShow();
        bitIllustrator.resizeGrid();
        grid.createGridIllustrator();
      });
      elem.el.viewButton.addEventListener("click", () =>{
        cntrlView.removeTiles();
        cntrlView.addBackTiles();
      });
      elem.el.drawButton.addEventListener("click", function(){
        cntrlView.removeTiles();
        grid.createGridIllustrator();
        cntrlView.redoGrid();
      });
      elem.s.resetButton.addEventListener("click", cntrlView.resetButton, false);
      c.addEventListener("click", function(){
         grid.handleClick();
         hndClck.addColors();
         hndClck.convertToArray();
         //I would like the following code to be cleaner if possible
         if(elem.s.codeBox.classList.contains("css_box")){
             hndClck.convertToCss();
         }
         else if(elem.s.codeBox.classList.contains("sass_box")) {
             convert.addSassVariables();
             convert.convertToSass();
         }
         else if(elem.s.codeBox.classList.contains("less_box")) {
             convert.addLessVariables();
             convert.convertToLess();
         }
         else{
             convertJS.addEmptyArrayMap();
             convertJS.addArrayMap();
             convertJS.addArrMapCode();
             convertJS.addColorMap();
             bitIllustrator.convertToJs();
         }

      });
      elem.el.cssToggle.addEventListener("click", function(){
          hndClck.convertToCss();
      });
      elem.el.sassToggle.addEventListener("click", function(){
         convert.addSassVariables();
         convert.convertToSass();
      });
      elem.el.lessToggle.addEventListener("click", function(){
         convert.addLessVariables();
         convert.convertToLess();
      });
      elem.el.hexColor.addEventListener("input", function(){
         bitIllustrator.pickHexColor();
      });
      //consider revision
      for(var i = 0; i < 3; i++){
        elem.el.rgb[i].addEventListener("input", bitIllustrator.pickRgbColor, false);
      }
      elem.el.jsToggle.addEventListener("click", function(){
         convertJS.addEmptyArrayMap();
         convertJS.addArrayMap();
         convertJS.addArrMapCode();
         convertJS.addColorMap();
         bitIllustrator.convertToJs();
      });

    },



    updatedSettings: () =>{
      elem.s.rowCount = document.getElementById("input-for-rows").value;
      elem.s.columnCount = document.getElementById("input-for-columns").value;
      elem.s.pixSize = document.getElementById("input-for-pixel-size").value;
    },

    hideShow: () => {
      elem.s.chooseSizeContainer.style.display = "none";
      elem.el.colorPicker.style.display = "block";
      elem.el.headerContainer.style.display = "block";
      elem.s.canvas.style.display = "block";
    },

   resizeGrid: () =>{
     elem.s.canvas.width = elem.s.columnCount * elem.s.pixSize;
     elem.s.canvas.height = elem.s.rowCount * elem.s.pixSize;
     elem.s.canvas.style.marginLeft = -(elem.s.columnCount * elem.s.pixSize) / 2 + "px";

   },

   pickHexColor: () =>{
     var newHexValue = elem.el.hexColor.value;

     elem.el.colorBar.style.background = newHexValue;

     elem.el.red.value = utils.hexToRgb(newHexValue).r;
     elem.el.green.value = utils.hexToRgb(newHexValue).g;
     elem.el.blue.value = utils.hexToRgb(newHexValue).b;
   },

   pickRgbColor: () =>{
     elem.el.hexColor.value = utils.rgbToHex(parseFloat(elem.el.red.value), parseFloat(elem.el.green.value), parseFloat(elem.el.blue.value));
     elem.el.colorBar.style.background = elem.el.hexColor.value;
   },


   convertToJs: () =>{
      elem.el.codeBox.classList.remove("css_box", "sass_box", "less_box");
      elem.el.codeBox.classList.add("js_box");
   }
  };

bitIllustrator.init();






