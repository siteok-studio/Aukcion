var projectsec = document.getElementById("project-section");
var btn2 = document.getElementById("btn");
var btn1 = document.getElementById("btns");

btn1.addEventListener("click", function() {
  projectsec.classList.remove("off");
  projectsec.classList.add("on");
  projectsec.classList.add("fadeIn");
  projectsec.classList.remove("fadeOut");
});
btn2.addEventListener("click", function() {
  projectsec.classList.remove("on");
  projectsec.classList.remove("fadeIn");
  projectsec.classList.add("off");
});
