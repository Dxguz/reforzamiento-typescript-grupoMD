//Ejercicio 6: Desestructuración de Objetos
//Maria Angelica Castro Pinzón
//Reutilizar el objeto estudiante.
//Desestructurar nombre y carrera.
//Mostrar valores en consola.

// Reutilizar el objeto estudiante
const Student = {
  StudentName: "María",
  StudentAge: 22,
  Career: "Ingeniería de Sistemas",
  Semester: 9
};

// Desestructuración de nombre y carrera
const { StudentName, Career } = Student;

// Mostrar valores en consola
console.log("Nombre:", StudentName);
console.log("Carrera:", Career);
