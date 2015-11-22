
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
import clrPckr from "./_color-picker.js";
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
        cntrlView.allowHandleClick();
        cntrlView.removeTiles();
        grid.createGridIllustrator();
        cntrlView.redoGrid();
      });
      elem.s.resetButton.addEventListener("click", cntrlView.resetButton, false);
      c.addEventListener("click", function(e){
         if(c.classList.contains("allow-handle-click")) {
             grid.handleClick(e);
             hndClck.addColors();
             hndClck.convertToArray(e);
             //I would like the following code to be cleaner if possible
             if (elem.el.codeBox.classList.contains("css_box")) {
                 hndClck.convertToCss();
             }
             else if (elem.el.codeBox.classList.contains("sass_box")) {
                 convert.addSassVariables();
                 convert.convertToSass();
             }
             else if (elem.el.codeBox.classList.contains("less_box")) {
                 convert.addLessVariables();
                 convert.convertToLess();
             }
             else {
                 convertJS.addEmptyArrayMap();
                 convertJS.addArrayMap();
                 convertJS.addArrMapCode();
                 convertJS.addColorMap();
                 bitIllustrator.convertToJs();
             }
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
      elem.el.backgroundHexColor.addEventListener("input", function(){
          clrPckr.pickBackgroundHexColor();
      });
      elem.el.hexColor.addEventListener("input", function(){
         clrPckr.pickHexColor();
      });
      //consider revision
      for(var i = 0; i < 3; i++){
        elem.el.rgb[i].addEventListener("input", clrPckr.pickRgbColor, false);
      }
        for(var i = 0; i < 3; i++){
            elem.el.backgroundRgb[i].addEventListener("input", clrPckr.pickBackgroundRgbColor, false);
        }
      elem.el.jsToggle.addEventListener("click", function(){
         convertJS.addEmptyArrayMap();
         convertJS.addArrayMap();
         convertJS.addArrMapCode();
         convertJS.addColorMap();
         bitIllustrator.convertToJs();
      });
      window.addEventListener("keydown", function(){
         cntrlView.toggleView(event);
      });

    },
    updatedSettings: () =>{
      elem.s.rowCount = document.getElementById("input-for-rows").value;
      elem.s.columnCount = document.getElementById("input-for-columns").value;
      elem.s.pixSize = document.getElementById("input-for-pixel-size").value;
    },

    hideShow: () => {
      elem.s.chooseSizeContainer.style.display = "none";
      elem.el.codeBoxContainer.style.display = "block";
      elem.el.colorPicker.style.display = "block";
      elem.el.backgroundColorPicker.style.display = "block";
      elem.el.headerContainer.style.display = "block";
      elem.s.canvas.style.display = "block";
    },

   resizeGrid: () =>{
     elem.s.canvas.width = elem.s.columnCount * elem.s.pixSize;
     elem.s.canvas.height = elem.s.rowCount * elem.s.pixSize;
     elem.s.canvas.style.marginLeft = -(elem.s.columnCount * elem.s.pixSize) / 2 + "px";

   },


   convertToJs: () =>{
      elem.el.codeBox.classList.remove("css_box", "sass_box", "less_box");
      elem.el.codeBox.classList.add("js_box");

      elem.el.codeBoxBorder.classList.remove("css_border", "less_border", "sass_border");
      elem.el.codeBoxBorder.classList.add("js_border");
   }
  };

bitIllustrator.init();






