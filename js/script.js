let light = window.matchMedia("(prefers-color-scheme: light)").matches;
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let html = document.getElementsByTagName("html")[0];
html.style.filter = (light) ? html.style.filter = "none" : html.style.filter = "invert(0.9)";

let button = document.getElementById("dark-theme");
// button.innerHTML = (light) ? button.innerHTML = "Activate the dark theme" : button.innerHTML = "Activate the light theme";
button.innerHTML = (light) ? button.innerHTML = "<i class=\"fas fa-moon\"></i>" : button.innerHTML = "<i class=\"fas fa-sun\"></i>";

let img = document.querySelectorAll("img");
img.forEach(
  (img) => {
    img.style.filter = (light) ? img.style.filter = "none" : img.style.filter = "invert(0.9)";
  }
);


function changeTheme() {

  html.style.filter = (html.style.filter == "none") ? "invert(0.9)" : "none";
  // button.innerHTML = (button.innerHTML == "Activate the dark theme") ? "Activate the light theme" : "Activate the dark theme";
  button.innerHTML = (button.innerHTML == "<i class=\"fas fa-moon\"></i>") ? "<i class=\"fas fa-sun\"></i>" : "<i class=\"fas fa-moon\"></i>";

  img.forEach(
    (img) => {
      img.style.filter = (img.style.filter == "none") ? "invert(0.9)" : "none";
    }
  );

}
