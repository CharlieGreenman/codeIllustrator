import elem from "./_elem.js";
import clrPckr from "./_color-picker.js";

var s, x, y, z,
    colorNum = 0,
    arrMap = [],
    c = document.getElementById("canvasGrid"),
    ctx = c.getContext("2d");

var grid = {

    //create grid and create boxes
    createGridIllustrator: () => {
        //module for creating a grid

        for(var r = 0; r < elem.s.columnCount; r++) {
            for(var i = 0; i < elem.s.rowCount; i++) {
                ctx.strokeStyle = "#3F3B3A";
                ctx.strokeRect(r * elem.s.pixSize, i * elem.s.pixSize, elem.s.pixSize, elem.s.pixSize);
                ctx.fillStyle = "rgba(25, 25, 25, 122)";
                ctx.fillRect(r * elem.s.pixSize + 1, i * elem.s.pixSize + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
            }
        }
    },

    //allow individual boxes to be clicked
    // handleClick is still in prototyping phase
    handleClick: (e) => {
        clrPckr.pickBackgroundHexColor();

        e = e || window.event;
        var xVal = Math.floor(e.offsetX === undefined ? e.layerX : e.offsetX / elem.s.pixSize) * elem.s.pixSize;
        var yVal = Math.floor(e.offsetY === undefined ? e.layerY : e.offsetY / elem.s.pixSize) * elem.s.pixSize;
        ctx.fillStyle = elem.el.hexColor.value;
        //get the color for the box clicked on
        var imgData = ctx.getImageData(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize + 1,
            Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize + 1,
            elem.s.pixSize - 2, elem.s.pixSize - 2);
        //if it is the background grey/gray remove it
        //currently does not work with color change
        console.log(imgData);
        console.log(elem.el.backgroundRed.value + " " + elem.el.backgroundGreen.value + " " + elem.el.backgroundBlue.value );
        if(imgData.data[0] !== parseFloat(elem.el.backgroundRed.value) && imgData.data[1] !== parseFloat(elem.el.backgroundGreen.value) && imgData.data[2] !== parseFloat(elem.el.backgroundBlue.value)){
            ctx.fillStyle = `rgba(${elem.el.backgroundRed.value}, ${elem.el.backgroundGreen.value}, ${elem.el.backgroundBlue.value}, 1)`;
            ctx.clearRect(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize + 1,
                Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize + 1,
                elem.s.pixSize - 2, elem.s.pixSize - 2);
            ctx.fillRect(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize + 1,
                Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize + 1,
                //accomodate for 2 px border
                //need to put in a variable down the line
                elem.s.pixSize - 2, elem.s.pixSize - 2);
            //elem.s.storeValues.indexOf([xVal, yVal, elem.el.hexColor.value]).pop();
            //this return false is causing wonky behavior, should look into it
            return false;
        }

        ctx.fillRect(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize + 1,
            Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize + 1,
            //accomodate for 2 px border
            //need to put in a variable down the line
            elem.s.pixSize - 2, elem.s.pixSize - 2);

    },

    updateGridColor: () => {
        for(let x = 0; x < elem.s.columnCount; x++) {
            for(let y = 0; y < elem.s.rowCount; y++) {
                ctx.strokeStyle = "#3F3B3A";
                ctx.strokeRect(x * elem.s.pixSize, y * elem.s.pixSize, elem.s.pixSize, elem.s.pixSize);
                ctx.fillStyle = elem.el.backgroundHexColor.value;
                ctx.fillRect(x * elem.s.pixSize + 1, y * elem.s.pixSize + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
            }
        }

        for(let x = 0; x < elem.s.storeValues.length; x++){
            ctx.fillStyle = elem.s.storeValues[x][2];
            ctx.fillRect(parseFloat(elem.s.storeValues[x][0]) + 1, parseFloat(elem.s.storeValues[x][1]) + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
        }

    }
};

export default grid;