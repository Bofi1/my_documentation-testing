

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


// -------- math ---------
let r = Math.random(); // revuelve un numero random
let x = math.max (10, 20); // revuelve el valor mas grande (osea 20)
let x = Math.round(5.3); // revuelve el numero mas cercano al entero
let x = Math.sqrt(9); // devuelve el numero elevado al cuadrado


//---- if -----

if (condition) {
        
} else {
        
}


// ----- switch ----

switch () {
        case "banana":
                alert("Hello")
        break;

        case 33:
                alert("bienvenido")
        break;

        default:
                alert("malcom el del medio")
        break;
}


// ---- (FOR) bucle

for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
}


// ---- (FOR OF) imprimir un array UNO POR UNO

const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

// ----- (WHILE) repetir algo hasta que se cumpla una condicion

let i = 0;
while
 (i < 10) {
  console.log(i);
  i++
}


// --- parar un bucle 
break;

        // para cuando i = 5
        for (i = 0; i < 10; i++) { 
                console.log(i);
                if (i == 5) {
                  break;
                }
              }


// --- saltar a la siguiente interaccion
continue;

        for (i = 0; i < 10; i++) { 
                console.log(i);
                if (i == 5) {
                  break;
                }

                console.log(i);
              }

// ---- event listener (en lugar de añadir el onclick y asi en el html)

<button id="demo">Click me1</button>

document.getElementById("demo")
addEventListener("click", myFunction);





