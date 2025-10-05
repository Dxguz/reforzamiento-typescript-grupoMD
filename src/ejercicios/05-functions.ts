//Ejercicio 5: Funciones
// Maria Angelica Castro
//Crear una función calcularPromedio.
//Recibir un arreglo de números y devolver el promedio.
//Probar la función con calificaciones.

function calculateAverage(scores: number[]): number {
  let sum: number = 0
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]
  }
  return sum / scores.length
}

let scores: number[] = [4.0, 5.0, 3.8]
let average = calculateAverage(scores)

console.log("Notas:", scores)
console.log("Promedio calculado:", average.toFixed(2))
