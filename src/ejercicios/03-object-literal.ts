// Literales de Objetos

// - Definir un objeto estudiante con propiedades: nombre, edad, carrera y semestre.
const Student = {
  StudentName: "María",
  StudentAge: 22,
  Career: "Ingeniería de Sistemas",
  Semester: 9
};

// - Agregar un método que retorne una descripción.
const getStudentDescription = () => {
  return `Nombre: ${Student.StudentName}, Edad: ${Student.StudentAge}, Carrera: ${Student.Career}, Semestre: ${Student.Semester}`;
};

// - Mostrar la descripción en consola.
console.log(getStudentDescription());
