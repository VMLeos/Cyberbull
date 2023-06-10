var video = document.getElementById("my-video");
var botonEnlace = document.getElementById("boton-enlace");

video.addEventListener("ended", function() {
  botonEnlace.classList.add("show");
});
