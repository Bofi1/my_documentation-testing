// asi es como funciona una funcion

function logMessage() {
    console.log('Hello world!');
  }

  // o

  const logMessageTwo = function() {
    console.log('Great, thanks!');
  }

''


// tambien puedes devolver valores con RETURN()

function func() {
    return 5;
  }
   
  const result = func(); // importante no olvidar el ()
   
  console.log(result);






// todo lo que este despues de RETURN se va a ignorar

function func() {
    return 5;
    console.log("I will not be logged.");
  }
   
  const result = func();
   
  console.log(result); // 5