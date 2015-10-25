var grid = {
    //create grid and create boxes
    createGridIllustrator: () => {
        //module for creating a grid

        for(var r = 0; r < s.columnCount; r++) {
            for(var i = 0; i < s.rowCount; i++) {
                ctx.strokeStyle = "#3e4649";
                ctx.strokeRect(r * s.pixSize, i * s.pixSize, s.pixSize, s.pixSize);
            }
        }
    },

    //allow individual boxes to be clicked
    // handleClick is still in prototyping phase
    handleClick: (e) => {
        e = e || window.event;
        var newHexValue = elem.hexColor.value;
        ctx.fillStyle = newHexValue;
        var imgData = ctx.getImageData(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
            Math.floor(e.offsetY / s.pixSize) * s.pixSize,
            s.pixSize, s.pixSize);
        if(imgData.data[0] !== 62 && imgData.data[1] !== 71 && imgData.data[2] !== 74){
            ctx.fillStyle = "#333333";
            ctx.strokeStyle = "#3e4649";
            ctx.lineWidth = 2;
            // each individual blank piece is now removed and added using canvas
            // as opposed to how it is/was originally used, which is through
            //
            ctx.clearRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
                Math.floor(e.offsetY / s.pixSize) * s.pixSize,
                s.pixSize, s.pixSize);
            ctx.strokeRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
                Math.floor(e.offsetY / s.pixSize) * s.pixSize,
                s.pixSize, s.pixSize);

            return false;
        }

        ctx.fillRect(Math.floor(e.offsetX / s.pixSize) * s.pixSize,
            Math.floor(e.offsetY / s.pixSize) * s.pixSize,
            s.pixSize, s.pixSize);

    }
};

export default grid;