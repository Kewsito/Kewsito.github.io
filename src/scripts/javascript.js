var i = 0;
var txt =
  "Estudiante avanzado de Tecnicatura en Desarrollo Web y estudiante de Lic. en Ciencias de la computacion. Buscando mi primera experiencia laboral.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Call the typeWriter function when the page loads
window.onload = function() {
  typeWriter();
};

;
