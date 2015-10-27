import elem from "./_elem.js";

var convert = {
    addSassVariables: () =>{
        elem.el.codeBox.classList.remove("css_box", "less_box", "js_box");
        elem.el.codeBox.classList.add("sass_box");

        elem.el.codeBox.innerHTML = `$num: ${elem.s.pixSize};<br>`;
        for(var avi = 0; avi < elem.s.storeColors.length; avi++){
            elem.el.codeBox.innerHTML += ` $colors${avi}: ${elem.s.storeColors[avi]};`;
        }

        elem.el.codeBox.innerHTML += "<br>";

        for(var x = 0; x < elem.s.columnCount; x++){
            elem.el.codeBox.innerHTML += `$X${x}: $num*${x}px; `;
        }
        elem.el.codeBox.innerHTML += `$num: ${elem.s.pixSize};<br>`;
        for(var y = 0; y < elem.s.columnCount; y++){
            elem.el.codeBox.innerHTML += `$O${x}: $num*${x}px; `;
        }
        elem.el.codeBox.innerHTML += "<br><br>";
    },

    convertToSass: () =>{

        elem.el.codeBox.innerHTML += "box-shadow: ";
        for(var x = 0; x < elem.s.storeValues.length; x++) {
            elem.el.codeBox.innerHTML += ` $X${parseFloat(elem.s.storeValues[x][0]) / elem.s.pixSize}`;
            elem.el.codeBox.innerHTML += ` $O${parseFloat(elem.s.storeValues[x][1]) / elem.s.pixSize}`;
            //need to add support with name that color

            for(var y = 0; y < elem.s.storeColors.length; y++){
                if(elem.s.storeValues[x][2] === elem.s.storeColors[y]){
                    elem.el.codeBox.innerHTML += ` ${elem.s.sassColorVariables[y]}`;
                }
            }
            if(x === elem.s.storeValues.length - 1){
                elem.el.codeBox.innerHTML += ";";
            }
            else{
                elem.el.codeBox.innerHTML += ",";
            }
        }
    },

    addLessVariables: () =>{
        elem.el.codeBox.classList.remove("css_box", "sass_box", "js_box");
        elem.el.codeBox.classList.add("less_box");

        elem.el.codeBox.innerHTML = "@num:" + elem.s.pixSize + ";<br>";

        for(var x = 0; x < elem.s.storeColors.length; x++){
            elem.el.codeBox.innerHTML += `@colors ${x}: ${elem.s.storeColors[x]};`;
        }

        elem.el.codeBox.innerHTML += "<br>";

        for(var x = 0; x < elem.s.columnCount; x++){
            elem.el.codeBox.innerHTML += `@X${x}: @num*${x}px; `;
        }
        elem.el.codeBox.innerHTML += `$num: ${elem.s.pixSize};<br>`;
        for(var y = 0; y < elem.s.columnCount; y++){
            elem.el.codeBox.innerHTML += `@O${x}: @num*${x}px; `;
        }
        elem.el.codeBox.innerHTML += "<br><br>";
    },

    convertToLess: () => {
        elem.el.codeBox.innerHTML += "box-shadow: ";
        for (var xyz = 0; xyz < elem.s.storeValues.length; xyz++) {
            elem.el.codeBox.innerHTML += " @X" + parseFloat(elem.s.storeValues[xyz][0]) / elem.s.pixSize;
            elem.el.codeBox.innerHTML += " @O" + parseFloat(elem.s.storeValues[xyz][1]) / elem.s.pixSize;

            for(var avi = 0; avi < elem.s.storeColors.length; avi++){
                if(elem.s.storeValues[xyz][2] === elem.s.storeColors[avi]){
                    elem.el.codeBox.innerHTML += " " + elem.s.lessColorVariables[avi];
                }
            }

            if (xyz === elem.s.storeValues.length - 1) {
                elem.el.codeBox.innerHTML += ";";
            }
            else {
                elem.el.codeBox.innerHTML += ",";
            }
        }
    }
};

export default convert;

