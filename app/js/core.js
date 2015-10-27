import elem from "./_elem.js";
import grid from "./_grid.js";
import bitIllustrator from "./app.js";

var ui = {
    elem.s.createGrid.addEventListener("click",() =>{
        bitIllustrator.updatedSettings();
        bitIllustrator.hideShow();
        bitIllustrator.resizeGrid();
        grid.createGridIllustrator();
    });
    elem.el.viewButton.addEventListener("click", () =>{
        bitIllustrator.removeTiles();
        bitIllustrator.addBackTiles();
    });
    elem.el.drawButton.addEventListener("click", function(){
        bitIllustrator.redoGrid();
    });
    elem.s.resetButton.addEventListener("click", bitIllustrator.resetButton, false);
    c.addEventListener("click", function(){
        grid.handleClick();
        bitIllustrator.addColors();
        bitIllustrator.convertToArray();
        bitIllustrator.convertToCss();
    });
    elem.cssToggle.addEventListener("click", function(){
        bitIllustrator.convertToCss();
    });
    elem.sassToggle.addEventListener("click", function(){
        bitIllustrator.addSassVariables();
        bitIllustrator.convertToSass();
    });
    elem.lessToggle.addEventListener("click", function(){
        bitIllustrator.addLessVariables();
        bitIllustrator.convertToLess();
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
}