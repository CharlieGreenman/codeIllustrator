import elem from "./_elem.js";
import utils from "./_utils.js";

  var hndClck = {
    //create a color array for sass variables
    // in order to enable color1, color2, etc...
    addColors: () =>{
        //only add value if it is a new color
        if(elem.s.storeColors.length > 0 && elem.s.storeColors.indexOf(elem.el.hexColor.value) > -1){
            return;
        }
        else{
            let colorNum = 0;
            colorNum++;
            elem.s.storeColors.push(elem.el.hexColor.value);
            elem.s.sassColorVariables.push(`$color ${colorNum}`);
            elem.s.lessColorVariables.push(`$color ${colorNum}`);
        }
    },
    /* create multi-dimensional array
     that is sorted by x value */
    convertToArray: (e) =>{
        e = e || window.event;
        var xVal = Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize;
        var yVal = Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize;

        elem.s.storeValues.push([xVal, yVal, elem.el.hexColor.value]);

        for(var i = 0; i < 2; i++){
            elem.s.storeValues[elem.s.storeValues.length - 1][i] += "px";
        }

        for (var io = 0; io < elem.s.storeValues.length - 1; io++) {
            //decided it made more sense to remove pushed value in array and then to parse through and remove value
            //used this stackoverflow http://stackoverflow.com/questions/26635297/how-to-remove-an-array-from-a-multidimensional-array-if-it-exists-in-another-mul
            if (JSON.stringify(elem.s.storeValues[io][0] + elem.s.storeValues[io][1]) === JSON.stringify(elem.s.storeValues[elem.s.storeValues.length - 1][0] + elem.s.storeValues[elem.s.storeValues.length - 1][1]) ){
                //remove value if it already exists, if statement above does not focus on color
                elem.s.storeValues.splice(io, 1);
                elem.s.storeValues.splice(elem.s.storeValues.length - 1, 1);
            }
        }

        elem.s.storeValues.sort(utils.compare);

    },
    convertToCss: () =>{
        elem.el.codeBox.classList.remove("sass_box", "less_box", "js_box");
        elem.el.codeBox.classList.add("css_box");

        elem.el.codeBoxBorder.classList.remove("sass_border", "less_border", "js_border");
        elem.el.codeBoxBorder.classList.add("css_border");

        /* reset value for elem.codeBox */
        elem.el.innerCodeBox.innerHTML = "box-shadow: ";
        /* instead of re-inserting value, need to think of how to do this */
        for(var abc = 0; abc < elem.s.storeValues.length; abc++){
            if(abc === elem.s.storeValues.length - 1){
                elem.el.innerCodeBox.innerHTML += `${elem.s.storeValues[abc].join(" ")};`;
            }
            else {
                elem.el.innerCodeBox.innerHTML += elem.s.storeValues[abc].join(" ") + ", ";
            }
        }

    }

};

export default hndClck;