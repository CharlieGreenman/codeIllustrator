import elem from "./_elem.js";

var convert = {
    addSassVariables: () =>{
        elem.el.codeBox.classList.remove("css_box", "less_box", "js_box");
        elem.el.codeBox.classList.add("sass_box");

        elem.el.codeBoxBorder.classList.remove("css_border", "less_border", "js_border");
        elem.el.codeBoxBorder.classList.add("sass_border");

        elem.el.innerCodeBox.innerHTML = `$num: ${elem.s.pixSize};<br>`;
        for(let x = 0; x < elem.s.storeColors.length; x++){
            elem.el.innerCodeBox.innerHTML += `$colors-${x + 1}: ${elem.s.storeColors[x]}; `;
        }

        elem.el.innerCodeBox.innerHTML += "<br>";

        for(let x = 0; x < elem.s.columnCount; x++){
            elem.el.innerCodeBox.innerHTML += `$X${x}: $num*${x}px; `;
        }
        //elem.el.innerCodeBox.innerHTML += `$num: ${elem.s.pixSize};<br>`;
        for(var y = 0; y < elem.s.columnCount; y++){
            elem.el.innerCodeBox.innerHTML += `$O${y}: $num*${y}px; `;
        }
        elem.el.innerCodeBox.innerHTML += "<br><br>";
    },

    convertToSass: () =>{

        elem.el.innerCodeBox.innerHTML += "box-shadow: ";
        for(var x = 0; x < elem.s.storeValues.length; x++) {
            elem.el.innerCodeBox.innerHTML += ` $X${parseFloat(elem.s.storeValues[x][0]) / elem.s.pixSize}`;
            elem.el.innerCodeBox.innerHTML += ` $O${parseFloat(elem.s.storeValues[x][1]) / elem.s.pixSize}`;
            //need to add support with name that color
            for(var y = 0; y < elem.s.storeColors.length; y++){
                if(elem.s.storeValues[x][2] === elem.s.storeColors[y]){
                    elem.el.innerCodeBox.innerHTML += ` $colors-${elem.s.storeColors.indexOf(elem.s.storeValues[x][2]) + 1}`;
                }
            }
            if(x === elem.s.storeValues.length - 1){
                elem.el.innerCodeBox.innerHTML += ";";
            }
            else{
                elem.el.innerCodeBox.innerHTML += ",";
            }
        }
    },

    addLessVariables: () =>{
        elem.el.codeBox.classList.remove("css_box", "sass_box", "js_box");
        elem.el.codeBox.classList.add("less_box");

        elem.el.codeBoxBorder.classList.remove("css_border", "sass_border", "js_border");
        elem.el.codeBoxBorder.classList.add("less_border");

        elem.el.innerCodeBox.innerHTML = "@num:" + elem.s.pixSize + ";<br>";

        for(let x = 0; x < elem.s.storeColors.length; x++){
            elem.el.innerCodeBox.innerHTML += `@colors-${x + 1}: ${elem.s.storeColors[x]};`;
        }

        elem.el.innerCodeBox.innerHTML += "<br>";

        for(let x = 0; x < elem.s.columnCount; x++){
            elem.el.innerCodeBox.innerHTML += `@X${x}: @num*${x}px; `;
        }
        for(let y = 0; y < elem.s.columnCount; y++){
            elem.el.innerCodeBox.innerHTML += `@O${y}: @num*${y}px; `;
        }
        elem.el.innerCodeBox.innerHTML += "<br><br>";
    },

    convertToLess: () => {
        elem.el.innerCodeBox.innerHTML += "box-shadow: ";
        for (var x = 0; x < elem.s.storeValues.length; x++) {
            elem.el.innerCodeBox.innerHTML += " @X" + parseFloat(elem.s.storeValues[x][0]) / elem.s.pixSize;
            elem.el.innerCodeBox.innerHTML += " @O" + parseFloat(elem.s.storeValues[x][1]) / elem.s.pixSize;

            for(var y = 0; y < elem.s.storeColors.length; y++){
                if(elem.s.storeValues[x][2] === elem.s.storeColors[y]){
                    elem.el.innerCodeBox.innerHTML += ` @colors-${elem.s.storeColors.indexOf(elem.s.storeValues[x][2]) + 1}`;
                }
            }

            if (x === elem.s.storeValues.length - 1) {
                elem.el.innerCodeBox.innerHTML += ";";
            }
            else {
                elem.el.innerCodeBox.innerHTML += ",";
            }
        }
    }
};

export default convert;

