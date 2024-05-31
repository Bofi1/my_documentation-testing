const strings = ["a", "b", "c"];      // ejemplo de array [0,1,2,3,4,5] la primer posicion es 0
const numbers = [1, 2, 3];
const mixed = ["a", 2, false];
const empty = [];

const arrays = [[1, 2, 3]];           // tambien puedes poner uno sobre otro

arrays.length                         // muestra cuanto es el tamaño del array

  // ejemplo de como usar length 
  // (obtener el ultimo valor de un array)
      const arrOne = [1, 2, 3, 4];  
      const arrTwo = ['a', 'b', 3, 1, 'c'];

      const getLast = function (arr) {
         return arr[arr.length - 1];  // <----
      }

      console.log(getLast(arrOne), getLast(arrTwo));


    // -----------
    const arr = [1, 2, 3, 4];
    const index = arr.indexOf(2); // 1
    
    console.log(arr[index] === 2); // arr[1] === 2 es igual a true