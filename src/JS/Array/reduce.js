const numbers = [1, 2, 3, 4, 5]


//    <--!-->

const numSoma = numbers.reduce(sum)
// reduce ele recebe um function, e essa function haje dentro do array. No caso eu pedi pra ela somar os valores contidos no array.
function sum(accumulator, value) {
   return accumulator + value //acumulator ta somando os valores dentro do array.

}
console.log(numSoma)

//    <--!-->

const numSub = numbers.reduce(sub)

function sub(total, number) {
   return total - number
}

console.log(numSub)

/*
The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

*/

// <--!-->

function getSum(total, sum) {
   return total + Math.round(sum)
}
function myF(item) {
   numbers.reduce(getSum,0)
}

/*
   Ele intende oq sao esses parametros passados porq, ja faz parte dele, nao tem necessidade explicar oq s'ao nem passar pra ele.

   Site da w3schools


   Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

   Parameter Values
Parameter	Description
function(total,currentValue, index,arr)	Required. A function to be run for each element in the array.
Function arguments:
Argument	Description
total	Required. The initialValue, or the previously returned value of the function
currentValue	Required. The value of the current element
currentIndex	Optional. The array index of the current element
arr	Optional. The array object the current element belongs to
initialValue	Optional. A value to be passed to the function as the initial value

*/