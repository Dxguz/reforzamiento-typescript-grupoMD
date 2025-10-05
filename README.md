# ACTIVIDAD DE REFORZAMIENTO TYPESCRIPT

# Nombre del grupo e integrantes.
- María Angélica Castro Pinzón
- Danna Ximena Guzmán Rincón

# Descripción breve de cada ejercicio.

## Ejercicio 1: Variables y Alcance
- Archivo: 01-variables.ts
En este ejercicio se declaran variables utilizando const y let para comprender sus diferencias.
Se define un nombre de estudiante como constante (const) y una edad como variable modificable (let), actualizando su valor y mostrando ambos en consola.
El objetivo es reforzar el uso adecuado de const para valores inmutables y let para aquellos que pueden cambiar durante la ejecución del programa.

## Ejercicio 2: Cadenas de Plantilla
- Archivo: 02-template-string.ts
En este ejercicio se utilizan cadenas de plantilla (template strings) para crear mensajes dinámicos de manera más legible y sencilla.
Se declaran variables que almacenan el nombre, la carrera y el semestre del estudiante, y se construye un mensaje personalizado empleando la sintaxis ${variable} dentro de una cadena entre comillas invertidas (`).
El resultado se muestra en consola para reforzar el uso de variables en TypeScript.

## Ejercicio 3: Literales de Objetos
- Archivo: 03-object-literal.ts
En este ejercicio se practica el uso de literales de objetos para representar información estructurada.
Se define un objeto Student con propiedades como nombre, edad, carrera y semestre, y se implementa un método que retorna una descripción completa del estudiante.
El resultado se muestra en consola, reforzando el uso de objetos y métodos para organizar y manipular datos en TypeScript.

## Ejercicio 4: Arreglos
- Archivo: 04-arrays.ts
Se crea un arreglo de calificaciones asi mismo se calcula el promedio utilizando un bucle for y finalmente se muestra el resultado en la consola.

## Ejercicio 5: Funciones
- Archivo: 05-functions.ts
Se implementa una función llamada calcularPromedio que recibe un arreglo de números y así retornando el promedio para finalmente probar un conjunto de calificaciones.

## Ejercicio 6: Desestructuración de Objetos
- Archivo: 06-obj-destructuring.ts
Se reutiliza el objeto estudiante (Ejercicio 3: Literales de Objetos),  en el cual se extraen  las propiedades nombre y carrera,  mediante desestructuración para finalmente mostrarla en consola.

## Ejercicio 7: Desestructuración de Arreglos
- Archivo: 07-array-destructuring.ts
En este ejercicio se refuerza el concepto de desestructuración de arreglos para extraer valores de forma sencilla.
Se reutiliza el arreglo de calificaciones y se desestructuran los dos primeros elementos en variables individuales.
Finalmente, se muestran los valores en consola, demostrando cómo acceder rápidamente a elementos específicos de un arreglo mediante la sintaxis de desestructuración en TypeScript.

# Estructura de los ejercicios del proyecto
src/ejercicios/
01-variables.ts
02-template-string.ts
03-object-literal.ts
04-arrays.ts
05-functions.ts
06-obj-destructuring.ts
07-array-destructuring.ts


# Instrucciones para ejecutar el código.

## Clonar repositorio
- git clone https://github.com/Dxguz/reforzamiento-typescript-grupoMD.git
- cd reforzamiento-typescript-grupoMD

## Instalar dependencias
- npm install

## Comando para ejecutar el proyecto
- npm run dev
- Ejecutar URL que aparece en consola en el navegador