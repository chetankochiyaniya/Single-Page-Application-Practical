const BG_COLOR = "#000000";
const d = document;

d.body.style.background = BG_COLOR;

let active = d.getElementsByClassName("nav-item");

active.addEventListener("click", function(){
    console.log("click");
  });