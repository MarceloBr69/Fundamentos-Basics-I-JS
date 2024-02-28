//Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function a(){
    for (let i=1; i<256; i++){
        console.log(i)       
    }
}
a();
console.log("Hasta aqui es el ejercicio anterior")

//Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
function b(){
    let suma = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) { // Verificar si el número es par, si es True, es par
            suma += i; // Sumar el número par a la suma total
        }
    }
    return suma;
}
let resultado = b();
console.log(resultado);
console.log("Hasta aqui es el ejercicio anterior")

//Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function c(){
    let suma1 = 0
    for (let i = 1; i<=5000; i++){
        if(i % 2 != 0){
            suma1 += i
        }
    }
    return suma1
}
let result = c();
console.log(result);
console.log("Hasta aqui es el ejercicio anterior")



//Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).
let array = [1,2,5]
let suma2 = 0
function d(){
    for(let i = 0; i<=2; i++){
        suma2 = suma2 + array[i]
    }
    return suma2
}
let result2 = d();
console.log(result2);
console.log("Hasta aqui es el ejercicio anterior")



//Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function e(){
    var arr = [-3, 3, 5, 7];
    var max = Math.max(...arr);
    console.log(max); //La función Math.max() retorna el mayor de cero o más números dados como parámetros de entrada, o NaN si cualquier parámetro no es un número y no puede ser convertido en uno. En este caso, busca el numero mayor dentro de un array ya existente. 
}
e();
console.log("Hasta aqui es el ejercicio anterior")



//Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

let arr = [1,3,5,7,20];
let sum = 0;
function f(){
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    if (i=arr.length){
        let div = sum/arr.length;
        console.log(div);
    }
}
f();
console.log("Hasta aqui es el ejercicio anterior")


//Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

let arrpush = []
function g(){
    for (let i = 1; i<=50; i++){
        if( i % 2 != 0){
            arrpush.push(i);
        }
    }
}
g();
console.log(arrpush);
console.log("Hasta aqui es el ejercicio anterior")

//Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
let varY = 3;
let varArr = [1,3,5,7];
let sumatoria = 0;
function Y(){
    for(let i = 0; i<= varArr.length; i++){
        if(varArr[i]>varY){
            sumatoria += 1;            
        }
    }
}
Y();
console.log("La cantidad de numeros que es mayor de 3, dentro del array son: " + sumatoria);
console.log("Hasta aqui es el ejercicio anterior")





//Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).





//function EcuacionCuadratica(ArrayAlCuadrado){
    //for(let i = 0; i<ArrayAlCuadrado.length; i++){
      //  calculo = ArrayAlCuadrado[i] * 2
        //ArrayAlCuadrado.push(calculo);
   // }
//}
//console.log(EcuacionCuadratica([1,5,10,-2]));



//Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

arrayNumeros = [1,5,10,-2];
function NumerosNegativosACero(){
    for(i = 0; i<arrayNumeros.length; i++){
        if(arrayNumeros[i] < 0){
            arrayNumeros.pop();
            arrayNumeros.push(0);
        }
        
    }
}
NumerosNegativosACero();
console.log(arrayNumeros);
console.log("Hasta aqui es el ejercicio anterior")

//Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

let Original = [1,5,10,-2];
let sumAVG = 0
let ResultadoMaxMinAVG= [];
let max1 = [];
let min1 = [];


function MaxMinAVG(){
    for(let i = 0; i<Original.length; i++){
        sumAVG = Original[i]+ sumAVG;
        if(i==3){
            max1 = Math.max(...Original);
            min1 = Math.min(...Original);
           
            let divMaxMinAVG = sumAVG/Original.length;

            ResultadoMaxMinAVG.push(max1, min1, divMaxMinAVG);
            console.log(ResultadoMaxMinAVG);
            break
        }
    }
}
MaxMinAVG();
console.log("Hasta aqui es el ejercicio anterior")

//Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

let ValoresCambio =  [1,5,10,-2];
let ValoresCambios = [];
function F_ValoresCambio(){
    ValoresCambios.splice(0, 1, ValoresCambio[3]);
    ValoresCambios.splice(1,0,ValoresCambio[1]);
    ValoresCambios.splice(2,0,ValoresCambio[2]);
    ValoresCambios.splice(3, 1, ValoresCambio[0]);
    console.log(ValoresCambios);
}
F_ValoresCambio();


//De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

let NumeroArr = [-1,-3,2];
function NumeroAStrings(){
    NumeroArr.splice(0, 1, "Dojo");
    NumeroArr.splice(1, 1, "Dojo");
    console.log(NumeroArr);
}
NumeroAStrings();