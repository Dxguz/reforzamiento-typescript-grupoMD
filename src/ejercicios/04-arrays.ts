//Ejercicio 4: Arreglos
// Maria Angelica Castro
//Crear un arreglo con calificaciones.
//Calcular el promedio con un bucle for.
//Mostrarlo en consola.

let Grades: number[] = [4.0, 5.0, 3.8];
let Sum: number = 0

for (let i = 0; i < Grades.length; i++) {
  Sum += Grades[ i]
}

let Average: number = Sum / Grades.length

console.log("Calificaciones:", Grades)
console.log("Promedio de notas:", Average.toFixed(2))