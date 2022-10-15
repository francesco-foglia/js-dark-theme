let light = window.matchMedia("(prefers-color-scheme: light)").matches;
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let html = document.getElementsByTagName("html")[0];
html.style.filter = (light) ? html.style.filter = "none" : html.style.filter = "invert(1)";

let button = document.getElementById("dark-theme");
button.innerHTML = (light) ? button.innerHTML = "Activate the dark theme" : button.innerHTML = "Activate the light theme";

let img = document.querySelectorAll("img");
img.forEach(
  (img) => {
    img.style.filter = (light) ? img.style.filter = "none" : img.style.filter = "invert(1)";
  }
);


function changeTheme() {

  html.style.filter = (html.style.filter == "none") ? "invert(1)" : "none";
  button.innerHTML = (button.innerHTML == "Activate the dark theme") ? "Activate the light theme" : "Activate the dark theme";

  img.forEach(
    (img) => {
      img.style.filter = (img.style.filter == "none") ? "invert(1)" : "none";
    }
  );

}
