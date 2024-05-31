

          // global scope --> function scope --> block scope

  // scope & GLOBAL scope

// lo que esta dentro de la funcion de se conoce como scope (todo lo que este adentro nomas existira de forma local ahi adentro)

function logTest() {
  const test = 'Hello World';
  console.log(test);
}
logTest();          //compila bien
console.log(test);  // da error porq trato de llamar a una funcion que estba en scope (osea de forma local en una variable)


// ---- BLOCK scope

      // es toda aquella que hace que lo que este adentro sea global
      // ejemplo

          // lo mejor seria que todo lo que este { } todo dentro de esto ya es un scope (osea algo guardado de fomra local)


                                const x = 10
                                {
                                 // block scope
                                 const x = 5;
                                 console.log(`Value of local x = ${x}`);
                                }
                                console.log(`Value of global x = ${x}`);


                // Conditional statements

                if (true) {
                 // block scope
                }

                // for loop
                for (let i = 0; i < 5; i++) {
                 // block scope
                }

                // while loop
                while (true) {
                 // block scope
                }


                // ejemplos resumidos


                function func() {       // scope usando funciones
                  // function scope
                  const localVar = "I'm only visible within the scope of func."
               }



               {                      //  block scope
                  // block scope
                  const localVar = "I'm only visible within the scope of the block."
               }