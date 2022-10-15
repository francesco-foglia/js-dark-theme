let html = document.getElementsByTagName("html")[0];
html.style.filter = "none";

let button = document.getElementById("dark-theme");
button.innerHTML = "Activate the dark theme";

let img = document.querySelectorAll("img");
img.forEach(
  (img) => {
    img.style.filter = "none";
  }
);


function darkTheme() {

  html.style.filter = (html.style.filter == "none") ? "invert(1)" : "none";
  button.innerHTML = (button.innerHTML == "Activate the dark theme") ? "Activate the light theme" : "Activate the dark theme";

  img.forEach(
    (img) => {
      img.style.filter = (img.style.filter == "none") ? "invert(1)" : "none";
    }
  );

}
