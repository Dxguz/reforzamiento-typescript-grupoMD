//Ejercicio 5: Funciones
// Maria Angelica Castro
//Crear una función calcularPromedio.
//Recibir un arreglo de números y devolver el promedio.
//Probar la función con calificaciones.


function calculateAverage(scores: number[]): number {
  // Inicializamos la variable suma en 0
  let sum: number = 0

  //  bucle for
  for (let i = 0; i < scores.length; i++) {
    // En cada iteración sumamos el valor actual al acumulador
    sum += scores[i]
  }

  // Retornamos el promedio 
  return sum / scores.length
}

// Definicion del arreglo de notas
let scores: number[] = [4.0, 5.0, 3.8]

// Llamamos la función
let average = calculateAverage(scores)

// consola las notas originales
console.log("Notas:", scores)

// consola del promedio calculado con 2 decimales
console.log("Promedio calculado:", average.toFixed(2))
