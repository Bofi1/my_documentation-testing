...args		// -----> (rest parameters) cuando hay mas parametros tomara todo los que tu tengas, puede ser cualquier variable 
          // pero tiene que tener los 3 puntitos al principi ( ...x ) y todo lo que de resultado de  ( ...x ) se en pondra dentro de "[ ]"
	//ej. 
	function func (x, ...rest) {
	console.log (x, rest);
	}
	
	func(1, 2);	// 1, [2]
	func(10, 5, 1);	// 10, [5,1]
	func(5);	// 5, []    ----> si no hay parametros aparece vacio


arrow functions	// ----> simplificas las sintax de las funciones

// ej. arrow functions

// function expression
let logMessage = function() {
  return 'How are you?';
}
console.log(logMessage()); // How are you?


// arrow function
logMessage = () => {
  return 'How are you?';
}
console.log(logMessage()); // How are you?

// arrow function mas simplicado, esto significa q simplificas el RETURN
logMessage 0 = () => 'How are you?';
console.log(logMessage()); // How are you?



//otra forma de simplicar un funcion

(num) => {
  const multiplier = 5;
  return num * multiplier;
}

// o

(num) => {;
  return num * 5;
}

// o

(num) => num * 5;

num => num * 5;