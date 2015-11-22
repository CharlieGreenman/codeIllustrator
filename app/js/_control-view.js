import elem from "./_elem.js";
import grid from "./_grid.js";

var s, x, y, z,
    colorNum = 0,
    arrMap = [],
    c = document.getElementById("canvasGrid"),
    ctx = c.getContext("2d");

var cntrlView = {
    allowHandleClick: () => {
        c.classList.add("allow-handle-click");
    },
    stopHandleClick: () =>{
        c.classList.remove("allow-handle-click");
    },
    removeTiles: () => {
        elem.s.canvas.style.background = "none";
        for(var x = 0; x < elem.s.columnCount; x++) {
            for(var y = 0; y < elem.s.rowCount; y++) {
                ctx.clearRect(x * elem.s.pixSize, y * elem.s.pixSize, elem.s.pixSize, elem.s.pixSize);
            }
        }
    },

    addBackTiles: () =>{
        for(x = 0; x < elem.s.storeValues.length; x++){
            ctx.fillStyle = elem.s.storeValues[x][2];
            ctx.fillRect(parseFloat(elem.s.storeValues[x][0]), parseFloat(elem.s.storeValues[x][1]), elem.s.pixSize, elem.s.pixSize);
        }
    },

    redoGrid: () =>{
        for(x = 0; x < elem.s.storeValues.length; x++){
            ctx.fillStyle = elem.s.storeValues[x][2];
            ctx.fillRect(parseFloat(elem.s.storeValues[x][0]) + 1, parseFloat(elem.s.storeValues[x][1]) + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);

        }
    },
    resetButton: () =>{
        if(elem.s.resetButton.classList.contains("warning")){
          location.reload();
        }
        else{
            elem.s.resetButton.classList.add("warning");
        }
    },
    toggleView: (e) => {
        let x = e.keyCode;
        if(x === 71){
            if(c.classList.contains("allow-handle-click")){
                cntrlView.stopHandleClick();
                cntrlView.removeTiles();
                cntrlView.addBackTiles();
            }
            else{
                cntrlView.allowHandleClick();
                cntrlView.removeTiles();
                grid.createGridIllustrator();
                cntrlView.redoGrid();
            }

        }

    }
    };

export default cntrlView;
