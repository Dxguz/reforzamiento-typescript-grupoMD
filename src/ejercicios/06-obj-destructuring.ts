//Ejercicio 6: Desestructuración de Objetos
//Maria Angelica Castro Pinzón
//Reutilizar el objeto estudiante.
//Desestructurar nombre y carrera.
//Mostrar valores en consola.

const Student = {
  StudentName: "María",
  StudentAge: 22,
  Career: "Ingeniería de Sistemas",
  Semester: 9
};

const { StudentName, Career } = Student;

console.log("Nombre extraido:", StudentName);
console.log("Carrera extraida:", Career);
