//Ejercicio 4: Arreglos
// Maria Angelica Castro
//Crear un arreglo con calificaciones.
//Calcular el promedio con un bucle for.
//Mostrarlo en consola.

// Definicion del arreglo con las calificaciones
let Grades: number[] = [4.0, 5.0, 3.8]

// Variable para acumular la suma de las calificaciones
let Sum: number = 0

//  bucle for
for (let i = 0; i < Grades.length; i++) {
  Sum += Grades[i]
}

// Calculo del promedio 
let Average: number = Sum / Grades.length

//  calificaciones en consola
console.log("Calificaciones:", Grades)

//  promedio en consola
console.log("Promedio de notas:", Average.toFixed(2))
