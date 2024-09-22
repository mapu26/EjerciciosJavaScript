// Solicitar al usuario que introduzca un número
let numero = prompt("Introduce un número:");

// Convertir la entrada a número entero
numero = parseInt(numero);

// Verificar si el número es par o impar
if (numero % 2 === 0) {
  alert("El número " + numero + " es par.");
} else {
  alert("El número " + numero + " es impar.");
}
