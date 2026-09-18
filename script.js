let select = document.getElementById("colorSelect");
let button = document.querySelector("input");

button.onclick = function() {
  select.remove(select.selectedIndex);
};