/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   var primero = array[0];
   return (primero);
}


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimo = array[array.length - 1];
   return (ultimo);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var cantidad = array.length;
   return (cantidad);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   nuevoArray = [] 
   for (let i = 0; i < array.length; i++) {
      nuevoArray.push(array[i]+1)
   }
   return (nuevoArray);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array
}
function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   frases = palabras.join(" ")
   return (frases)
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   /* if (array.includes(elemento)) {
      return true;
   }
   else return false;*/
   verificador = array.includes(elemento);
   return verificador;
} 


   

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
suma = 0
for (let recorriendo of arrayOfNums) {  
   suma += recorriendo
}
return (suma);
}



function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   promedio = 0
   suma = 0
   cantidadElementos = resultadosTest.length;
for (let recorriendo of resultadosTest) {  
   suma += recorriendo
}
promedio = suma / cantidadElementos;
return (promedio);
}


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   nMayor = 0
   nMayor = Math.max.apply(null, arrayOfNums);
   return (nMayor)
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:  
   sinArg = 0
   multiplicacion = 1
   cantidadArg = arguments.length
   
   if (cantidadArg > 1){
      for (let i = 0; i < arguments.length; i++) { //Esfa linea sirve para recorrer 1 por uno toda la lista
      multiplicacion = arguments[i]*multiplicacion;
      }
      return multiplicacion
   }  
      else if (cantidadArg == 1){
      return arguments[0]
   }
   else (cantidadArg == 0) 
   return sinArg
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   sumatoria = 0
   for (let i = 0; i < array.length; i++) { 
      if (array[i] > 18){
      sumatoria ++
      }
   } 
   return sumatoria
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   //for (let i = 0; i < numeroDeDia.length; i++) ESTA PARTE NO ES NECESARIA PORQUE SOLO ESTAN ENREGANDO 1 ELEMENTO
      if (numeroDeDia > 1 && numeroDeDia < 7 ){
      return ("Es dia laboral");
      }
      else if (numeroDeDia == 1 || numeroDeDia == 7 )
      return ("Es fin de semana");
   }   
  



function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

      if (num >= 9){
      return true;      
      }
   return false;
} 
  


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   
   comparador = 0
   comparador = array[1]
   for (let i = 0; i < array.length; i++) { 
      if (array[i] == comparador){
      return true
      }
      return false
   } 
     
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   nuevoArreglo = []
   ninguno  = 0
   for (let i = 0; i < array.length; i++) { 
                
      if (array[i] == "Marzo"){
          nuevoArreglo.push("Marzo");}
          
          
          else if (array[i] == "Noviembre"){
              nuevoArreglo.push("Noviembre");}
               
          
          else if (array[i] == "Enero"){
              nuevoArreglo.push("Enero");
              return (nuevoArreglo)  
              }

          
          }
  if (ninguno < nuevoArreglo.length){
      return ("No se encontraron los meses pedidos")    
      }
}
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   mult = 0
   resultado = []
      for (let i = 0; i <= 10; i++) { 
         if (mult < 60)
         mult = i * 6
         resultado.push(mult)
         }
         return (resultado)
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   segundaLista = []
   for (let i = 0; i < array.length; i++){
         if (array[i] > 100){
               segundaLista.push(array[i])
         }   
      }
   return (segundaLista)  
}
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   nuevoArray = []
   for (let i = 0; i < 10; i++) {
      num = num + 2;
      nuevoArray.push(num);   
      if (i == num){
          return("Se interrumpió la ejecución")
          } 
   }
  return(nuevoArray)
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   segundoArray = []
   for (let i = 0; i < 10; i++) {
    num = num+ 2;
        segundoArray.push(num); 
   if (i == 4){
     //segundoArray.pop()  ESTA FUNCION SIRVE ES PARA QUE EL ELEMENTO 5 DE LA LISTA NO SE AGREGUE AL ARRAY
      i ++
       continue;    
       }
       
}

return(segundoArray)
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
