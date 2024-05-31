// PARAMETROS en funciones

function square(x) {
    return x * x;
  }
        // aqui pones dentro () el valor q va tomar x
  console.log(square(2)); // 4
  console.log(square(5)); // 25
  console.log(square(11)); // 121

        // ESTOS SON EJEMPLO, MUY IMPORANTES PARA Q ENTIENDAS
            
        
        
        function logX(x = 'hello') {
              console.log(x);
            }

            logX('hi'); // hi
            logX(); // hello

            // -----------




            function connect(a, b = 'people') {
                return a + ' ' + b;
              }
               
              const result = connect('hello');
               
              console.log(result); // hello people
            
            // -----------




            const b = 'caro'; // no cambia porq es CONST
            function connect(a, b = 'people') {
              return a + ' ' + b;
            }
             
            const result = connect('hello', b);
             
            console.log(result); // hello caro

            // -----------




            const b = 'caro'; 
            function connect(a, b = 'people') {
              return a + ' ' + b;
            }
             
            const result = connect('hello' + b);
             
            console.log(result); // hellocaro people

            // -----------




            const func = function (a, b) {
                return b + a;
             };
              
             const result = func(' world', 'hello');
              
             console.log(result); // hello world

             // ------------




             const func = function (num) {
                if (num < 5) {
                    return;
                }
                return num * num
             };
              
             const result = func(5);
              
             console.log(result); // 25

             // -------------




             function multiply(x, y = 5) {
                return x * y;
              }
               
              const result = multiply(6, 4);
               
              console.log(result); // 24