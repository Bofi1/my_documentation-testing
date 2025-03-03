

variable.slice() // digamos que tenemos "hola como estan"
        // y quiero tomar el valor "como"
        // entonces hariamos variable.slice(4,8)

variable.replace() // reemplazamos valor - ej. abajo
let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");




// ---- array methods -----
array.pop() //elimina el ultima elemente de un array
array.push() //añade un valor al array al final
array.splice(array[numero del array que quieras eliminar], array[2]) //elimina valores de un array

array.sort() //ordena un array (para numeros tiene que darle un ejemplo de como ordenar, abajo abra un ejemplo)

        // con numeros y ordenar de forma ascendente
        let numeros = [10, 5, 20, 1];
        numeros.sort(function(a, b) {
            return a - b; // Orden ascendente
        });
        console.log(numeros); // Imprime: [1, 5, 10, 20]

        // con strings
        let frutas = ["manzana", "arandano", "plátano", "uva"];
        frutas.sort();
        console.log(frutas); // Imprime: ["arandano", "manzana", "plátano", "uva"]



// ------ date ----------

//muestra la fecha y hora
const d = new Date()
console.log(d) // fecha y hora (2024-10-27T10:30:45.123Z)

//obtener solo el año
const d = new Date();
year = d.getFullYear(d.getFullYear()); // 2024

//obtener solo el mes
const d = new Date();
month = d.getMonth(); //10

//estableces un año en especifico en la fecha
const d = new Date();
d.setFullYear(2020); // fecha y hora (2020-10-27T10:30:45.123Z)
