  var  elem = {
    el: {
        codeBoxContainer: document.getElementById("code_box_container"),
        headerContainer: document.getElementById("header-container"),
        codeBox: document.getElementById("code_box"),
        innerCodeBox: document.getElementById("inner_code_box"),
        cssToggle: document.getElementById("css_toggle"),
        sassToggle: document.getElementById("sass_toggle"),
        lessToggle: document.getElementById("less_toggle"),
        jsToggle: document.getElementById("js_toggle"),
        viewButton: document.getElementById("view-button"),
        drawButton: document.getElementById("draw-button"),
        codeBoxToggle: document.getElementById("code_box_toggle"),
        codeBoxBorder : document.getElementById("code_box_border"),
        colorBar: document.getElementById("color_bar"),
        backgroundColorBar: document.getElementById("background_color_bar"),
        rgb: document.getElementById("color-picker").getElementsByClassName("rgb"),
        backgroundRgb: document.getElementById("background-color-picker").querySelectorAll(".backgroundRgb"),
        colorPicker: document.getElementById("color-picker"),
        backgroundColorPicker: document.getElementById("background-color-picker"),
        hexColor: document.getElementById("pix-hex-color"),
        backgroundHexColor: document.getElementById("background-hex-color"),
        pixRed: document.getElementById("pix-red"),
        pixGreen: document.getElementById("pix-green"),
        pixBlue: document.getElementById("pix-blue"),
        backgroundRed: document.getElementById("background-red"),
        backgroundGreen: document.getElementById("background-green"),
        backgroundBlue: document.getElementById("background-blue")
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