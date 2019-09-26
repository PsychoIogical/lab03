function run() {
  widthPick();
  borderColorPick();
  backColorPick();
}
function widthPick() {
  var w = document.getElementById("width_border").value;
  document.getElementById("myStyle").style.borderWidth = w + "px";
}

function borderColorPick() {
  var r = document.getElementById("red_border").value;
  var g = document.getElementById("green_border").value;
  var b = document.getElementById("blue_border").value;
  var rgb = "#" + r + g + b;

  document.getElementById("myStyle").style.borderColor = rgb;
}

function backColorPick() {
  var r = document.getElementById("red_back").value;
  var g = document.getElementById("green_back").value;
  var b = document.getElementById("blue_back").value;
  var rgb = "#" + r + g + b;

  document.getElementById("myStyle").style.backgroundColor = rgb;
}
