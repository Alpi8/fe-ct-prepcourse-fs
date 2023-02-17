/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   for (i = 0; i < nombre.length; i ++){
      var borrarPrimera = nombre.split("").splice(1);
      var primeraMayuscula = nombre[0].toUpperCase();
      var cadena = borrarPrimera.join("");    
  }
  return (primeraMayuscula + cadena)
  
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
 resultado = cb(num1, num2)
return resultado
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   suma = 0
   for (let recorriendo of arrayOfNumbers) {  
   suma += recorriendo
   }
   cb(suma); //Solo se invoco el callback con el parametro buscado
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   for (i = 0; i < array.length; i ++ ) {
      
      cb(array[i])
   }

}  

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   var elemento = []
   for (i = 0; i < array.length; i ++ ) {
      
      elemento.push(cb(array[i]));
   }
   return elemento

}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
      var nuevoArray = []
      arrayOfStrings.filter(function(arrayOfStrings){
         if (arrayOfStrings[0] == "a"){
         nuevoArray.push(arrayOfStrings)
         }
      })
   return nuevoArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
