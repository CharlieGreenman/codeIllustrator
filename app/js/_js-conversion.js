import elem from "./_elem.js";
import utils from "./_utils.js";

var arrMap = [], x, y, z;

var convertJS = {

    addEmptyArrayMap: () => {
        elem.el.codeBox.innerHTML = `var canvas, ctx, tileSize = ${elem.s.pixSize}, map = [<br> `;
        elem.el.codeBox.innerHTML += "[";
        arrMap = [];
        //initialize the array map
        for (x = 0; x < elem.s.rowCount; x++) {
            arrMap.push([]);
        }
        // populate initial array map

    },

    addArrayMap: () => {
// create a dynamic array map
        for (x = 0; x < elem.s.rowCount; x++) {
            for (y = 0; y < elem.s.columnCount; y++) {
                arrMap[y].push(0);
                for (z = 0; z < elem.s.storeValues.length; z++) {
                    //tells us value needs to be changed
                    if (x === parseFloat(elem.s.storeValues[z][0]) / elem.s.pixSize && y === parseFloat(elem.s.storeValues[z][1]) / elem.s.pixSize) {
                        //tells us what it should be changed to
                        arrMap[y][x] = elem.s.storeColors.indexOf(elem.s.storeValues[z][2]) + 1;
                    }
                }
            }
        }


        //create a new line once the app continues to the next line
        //test to see if I can change value of  arrMap[1][1] = 3;
        arrMap[elem.s.columnCount - 1] += "]";
        arrMap[elem.s.columnCount - 1] += "<br>],";
        elem.el.codeBox.innerHTML += arrMap.join("],<br />[");
    },

// make to add a pre tag, so that it actually treats code as code
// and it makes a line break
    addArrMapCode: () => {
        elem.el.codeBox.innerHTML += `
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
        elem.el.codeBox.innerHTML += `var colors = [ " ",`
        for (x = 0; x < elem.s.storeColors.length; x++) {
            elem.el.codeBox.innerHTML += `new arrMap.Color(${utils.hexToRgb(elem.s.storeColors[x]).r},${utils.hexToRgb(elem.s.storeColors[x]).g},${utils.hexToRgb(elem.s.storeColors[x]).b}, 1)`;
            if (x === elem.s.storeColors.length - 1) {
                elem.el.codeBox.innerHTML += '';
            }
            else {
                elem.el.codeBox.innerHTML += ", ";
            }
        }

        elem.el.codeBox.innerHTML += `];<pre>
     arrMap.init();</pre>
     `
    }
};

export default convertJS;