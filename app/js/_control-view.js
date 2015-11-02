import elem from "./_elem.js";

var s, x, y, z,
    colorNum = 0,
    arrMap = [],
    c = document.getElementById("canvasGrid"),
    ctx = c.getContext("2d");

var cntrlView = {
    removeTiles: () => {
        elem.s.canvas.style.background = "none";
        for(var r = 0; r < elem.s.columnCount; r++) {
            for(var i = 0; i < elem.s.rowCount; i++) {
                ctx.clearRect(r * elem.s.pixSize, i * elem.s.pixSize, elem.s.pixSize, elem.s.pixSize);
            }
        }
    },

    addBackTiles: () =>{
        for(x = 0; x < elem.s.storeValues.length; x++){
            ctx.fillRect(parseFloat(elem.s.storeValues[x][0]), parseFloat(elem.s.storeValues[x][1]), elem.s.pixSize, elem.s.pixSize);
            ctx.fillStyle = elem.s.storeValues[x][2];
        }
    },

    redoGrid: () =>{
        for(var r = 0; r < elem.s.columnCount; r++) {
            for(var i = 0; i < elem.s.rowCount; i++) {
                ctx.strokeStyle = "#3e4649";
                ctx.strokeRect(r * elem.s.pixSize, i * elem.s.pixSize, elem.s.pixSize, elem.s.pixSize);
            }
        }

        for(var pw = 0; pw < elem.s.storeValues.length; pw++){
            ctx.fillRect(parseFloat(elem.s.storeValues[pw][0]), parseFloat(elem.s.storeValues[pw][1]), elem.s.pixSize, elem.s.pixSize);
            ctx.fillStyle = elem.s.storeValues[pw][2];
        }

    },
    resetButton: () =>{
        location.reload();
    }
};

export default cntrlView;
