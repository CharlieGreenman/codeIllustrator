  var  elem = {
    el: {
        codeBoxContainer: document.getElementById("code_box_container"),
        headerContainer: document.getElementById("header-container"),
        colorPicker: document.getElementById("color-picker"),
        codeBox: document.getElementById("code_box"),
        innerCodeBox: document.getElementById("inner_code_box"),
        cssToggle: document.getElementById("css_toggle"),
        sassToggle: document.getElementById("sass_toggle"),
        lessToggle: document.getElementById("less_toggle"),
        jsToggle: document.getElementById("js_toggle"),
        viewButton: document.getElementById("view-button"),
        drawButton: document.getElementById("draw-button"),
        codeBoxToggle: document.getElementById("code_box_toggle"),
        hexColor: document.getElementById("hex_color"),
        colorBar: document.getElementById("color_bar"),
        rgb: document.querySelectorAll(".rgb"),
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    },
    //settings
    s: {
        resetButton: document.getElementById("reset-button"),
        chooseSizeContainer: document.getElementById("choose_size_container"),
        canvas: document.getElementById("canvasGrid"),
        createGrid: document.getElementById("create_grid"),
        rowCount: document.getElementById("input-for-rows").value,
        columnCount: document.getElementById("input-for-columns").value,
        pixSize: document.getElementById("input-for-pixel-size").value,
        codeBox: document.getElementById("code_box"),
        storeValues: [],
        storeColors: [],
        sassColorVariables: [],
        lessColorVariables: []
    }
};

export default elem;