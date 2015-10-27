import elem from "./_elem.js";

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
                ctx.strokeStyle = "#3e4649";
                ctx.strokeRect(r * elem.s.pixSize, i * elem.s.pixSize, elem.s.pixSize, elem.s.pixSize);
            }
        }
    },

    //allow individual boxes to be clicked
    // handleClick is still in prototyping phase
    handleClick: (e) => {
        e = e || window.event;
        ctx.fillStyle = elem.el.hexColor.value;
        var imgData = ctx.getImageData(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize,
            Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize,
            elem.s.pixSize, elem.s.pixSize);
        if(imgData.data[0] !== 62 && imgData.data[1] !== 71 && imgData.data[2] !== 74){
            ctx.fillStyle = "#333333";
            ctx.strokeStyle = "#3e4649";
            ctx.lineWidth = 2;
            // each individual blank piece is now removed and added using canvas
            // as opposed to how it is/was originally used, which is through
            //
            ctx.clearRect(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize,
                Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize,
                bitIllustrator.s.pixSize, elem.s.pixSize);
            ctx.strokeRect(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize,
                Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize,
                elem.s.pixSize, elem.s.pixSize);

            return false;
        }

        ctx.fillRect(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize,
            Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize,
            elem.s.pixSize, elem.s.pixSize);

    }
};

export default grid;