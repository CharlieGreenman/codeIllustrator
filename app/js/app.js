
/**
 * @constructor
 * @param {string} title - Pixelator
 * @param {string} author - Charlie Greenman
 */
import utils from "./_utils.js";
import grid from "./_grid.js";
import hndClck from "./_when-clicked.js";
import convert from "./_conversion.js";

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
         bitIllustrator.addEmptyArrayMap();
         bitIllustrator.addArrayMap();
         bitIllustrator.addArrMapCode();
         bitIllustrator.addColorMap();
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

   addEmptyArrayMap: () => {
       elem.codeBox.innerHTML = `var canvas, ctx, tileSize = ${s.pixSize}, map = [<br> `;
       elem.codeBox.innerHTML += "[";
       arrMap = [];
       //initialize the array map
       for(x = 0; x < s.rowCount; x++) {
           arrMap.push([]);
       }
       // populate initial array map

   },

   addArrayMap: () => {
// create a dynamic array map
     for (x = 0; x < s.rowCount ; x++) {
       for(y = 0; y < s.columnCount; y++) {
         arrMap[y].push(0);
         for(z = 0; z < s.storeValues.length; z++) {
           //tells us value needs to be changed
           if (x === parseFloat(s.storeValues[z][0]) / s.pixSize && y === parseFloat(s.storeValues[z][1]) / s.pixSize) {
           //tells us what it should be changed to
             arrMap[y][x] = s.storeColors.indexOf(s.storeValues[z][2]) + 1 ;
          }
        }
       }
     }


     //create a new line once the app continues to the next line
    //test to see if I can change value of  arrMap[1][1] = 3;
      arrMap[s.columnCount - 1] += "]";
      arrMap[s.columnCount - 1] += "<br>],";
      elem.codeBox.innerHTML += arrMap.join("],<br />[");
   },

// make to add a pre tag, so that it actually treats code as code
// and it makes a line break
   addArrMapCode: () => {
     elem.codeBox.innerHTML += `
       <pre> arrMap = {
      Color: function(r, g, b, a) {

          this.r = r;
          this.g = g;
          this.b = b;
          this.a = a;

          this.toString = function() {

              return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
          }

      },

      draw: function(){
        for(var y = 0; y < map.length; y++) {
          for(var x = 0; x < map.length; x++) {
            ctx.fillStyle = colors[map[y][x]].toString();
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
          }
        }
      },
      init: function(){
        canvas = document.getElementById("canvas");
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
        ctx = canvas.getContext("2d");

        window.setInterval(function() {

            arrMap.draw();
        }, 1000 / 30);
      }
    };

       </pre>`;
   },

   addColorMap: () => {
     elem.codeBox.innerHTML += `var colors = [ " ",`
     for(x = 0; x < s.storeColors.length; x++){
       elem.codeBox.innerHTML += `new arrMap.Color(${utils.hexToRgb(s.storeColors[x]).r},${utils.hexToRgb(s.storeColors[x]).g},${utils.hexToRgb(s.storeColors[x]).b}, 1)`;
       if(x === s.storeColors.length - 1){
           elem.codeBox.innerHTML += '';
       }
       else{
           elem.codeBox.innerHTML += ", ";
       }
     }

     elem.codeBox.innerHTML += `];<pre>
     arrMap.init();</pre>
     `
   },

   convertToJs: () =>{
      elem.codeBox.classList.remove("css_box", "sass_box", "less_box");
      elem.codeBox.classList.add("js_box");
   }
  };

bitIllustrator.init();






