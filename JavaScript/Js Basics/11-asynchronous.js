// JavaScript es de un solo hilo, esto se refiere a que corre el programa de una sola 
    // forma (osea es de un solo carril y solo puede pasar un carro pero pueden pasar mucho pero solo uno por uno)
    // por ende se va a esperar a generar todo de uno por uno, y si una funcion tarda mucho va a esperar hasta q esa funcion ejecute para seguir el codigo

    // para eso esta el SetTimeOut
    
    // esta recibe una funcion y el tiempo de esprar para que esta funcion se realice
      // le puedes poner 0 de tiempo pero SI ESTA DENTRO DE SetTimeOut JavaScript la va a considerar HASTA EL FINAL aunque si tiempo de espera sea de CERO (0)


     // EJEMPLO 1

     function pause() {
        const start = new Date().getTime();
        while (new Date().getTime() - start < 3000);
        console.log('Hello!');
      }
       
      pause();
      console.log('Another log message.');    // este ejemplo de lo que pasa si no se usa SetTimeOut (tenemos que esperar a que la funcion se ejecute que va a tardar 3segundos o 3000 milisegundos
  
  
      //EJEMPLO 2
  
      function func() {
        console.log('Hello!');
       }
       setTimeout(func, 3000);
       console.log('Another log message.');   // aqui se muestra como usar el SetTimeOut correctamente (primero se ejecuta el console.log y despues el setTimeout)
  
       // ------- callback -------------- // 
      // (no se entendio muy  bien pero se dejara un link donde se explique mejor)
  
  
           // ------- promesas -------------- // 
      // (no se entendio muy  bien pero se dejara un link donde se explique mejor)