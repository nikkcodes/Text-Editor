function updateText() {
  const input = document.getElementById("inputText");
  const output = document.getElementById("output-text");
  output.innerText = input.value;
}
function makebold(ele) {
  ele.classList.toggle("active");
  document.getElementById("output-text").classList.toggle("boldmaker");
}
function makeitalic(ele) {
  ele.classList.toggle("active");
  document.getElementById("output-text").classList.toggle("italicmaker");
}
function makeunderline(ele) {
  ele.classList.toggle("active");
  document.getElementById("output-text").classList.toggle("underliner");
}
function align(ele, dir) {
  ele.classList.toggle("active");
  document.getElementById("output-text").style.textAlign = dir;
}
