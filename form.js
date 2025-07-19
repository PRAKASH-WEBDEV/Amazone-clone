let nm = document.querySelector('#name');
let mail = document.querySelector('#email');
let password = document.querySelector('#password');
let self = document.querySelector('#self');
let form = document.querySelector('form');

form.addEventListener("submit", function(dets) {
  dets.preventDefault(); // to stop the form from reloading

  if (nm.value.length <= 2) {
    document.querySelectorAll("#hide").style.display = "initial";
  } else {
    document.querySelectorAll("#hide").style.display = "none";
  }
});
