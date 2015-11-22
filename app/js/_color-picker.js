import elem from "./_elem.js";
import utils from "./_utils.js";

var clrPckr = {
    pickHexColor: () =>{
        var newHexValue = elem.el.hexColor.value;

        elem.el.colorBar.style.background = newHexValue;
        elem.el.headerContainer.style.boxShadow = '0 0 0 10px ' + newHexValue +  ' inset';

        elem.el.pixRed.value = utils.hexToRgb(newHexValue).r;
        elem.el.pixGreen.value = utils.hexToRgb(newHexValue).g;
        elem.el.pixBlue.value = utils.hexToRgb(newHexValue).b;

    },
    pickRgbColor: () =>{
        elem.el.hexColor.value = utils.rgbToHex(parseFloat(elem.el.pixRed.value), parseFloat(elem.el.pixGreen.value), parseFloat(elem.el.pixBlue.value));

        elem.el.colorBar.style.background = elem.el.hexColor.value;
        elem.el.headerContainer.style.boxShadow = '0 0 0 10px ' + elem.el.hexColor.value +  ' inset';



    },
    pickBackgroundHexColor: () => {
        var newHexValue = elem.el.backgroundHexColor.value;

        document.body.style.background = newHexValue;
        //elem.el.headerContainer.style.boxShadow = '0 0 0 10px ' + newHexValue +  ' inset';

        elem.el.backgroundRed.value = utils.hexToRgb(newHexValue).r;
        elem.el.backgroundGreen.value = utils.hexToRgb(newHexValue).g;
        elem.el.backgroundBlue.value = utils.hexToRgb(newHexValue).b;
    },
    pickBackgroundRgbColor: () =>{
        elem.el.backgroundHexColor.value = utils.rgbToHex(parseFloat(elem.el.backgroundRed.value), parseFloat(elem.el.backgroundGreen.value), parseFloat(elem.el.backgroundBlue.value));
        elem.el.backgroundColorBar.style.background = elem.el.backgroundHexColor.value;
        document.body.style.background = elem.el.backgroundHexColor.value;
    }
};

export default clrPckr;