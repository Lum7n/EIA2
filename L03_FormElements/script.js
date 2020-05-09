window.addEventListener("load", init);
function init(_event) {
    console.log("Init");
    var divs = document.querySelectorAll("div");
    // Install listeners on divs
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.addEventListener("change", handleChange);
        div.addEventListener("input", handleChange);
    }
}
function handleChange(_event) {
    var target = _event.target;
    // Amount response
    if (target.name == "Slider") {
        var ouput = document.querySelector("output");
        ouput.value = target.value + " €";
    }
}
//# sourceMappingURL=script.js.map