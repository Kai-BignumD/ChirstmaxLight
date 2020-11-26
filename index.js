const lightArea=document.getElementsByClassName("Light");
const onButton=document.getElementById("onLight")
const offButton=document.getElementById("offLight");
const submitButton=document.getElementById("submit");
const title = document.getElementsByClassName('title')[0];
var lightLen = lightArea.length;

const on = function() {
  for (var i = 0; i < lightLen; i++) {
    lightArea[i].removeAttribute("style");
    lightArea[i].style.animationPlayState = "running";
    lightArea[i].style.WebkitAnimationPlayState = "running";
  }
}

const off = function() {
  title.style.animation = "none";

  for (var i = 0; i < lightLen; i++) {
    lightArea[i].style.animation = "none";
    lightArea[i].style.background = "#563260";
  }
}

function convert() {
  var speed = document.getElementById('quantity').value;
  for (var i = 0; i < lightLen; i++) {
    lightArea[i].style.animationDuration = speed + "s";
  }
}

onButton.addEventListener('click', on);
offButton.addEventListener('click', off);
