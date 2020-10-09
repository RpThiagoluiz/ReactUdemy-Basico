const letters = ['a', 'b', 'c' , 'd', 'e', 'f', 'g', 'h']
const numbers = ['1', '2', '3', '4', '5']

//para cada elemento no array - colocar o mouse em cima do foEach, aparece os paramentros q ele recebe.
numbers.forEach()

function consoleItem (item, index,array)  {
   console.log(item); //chamar os items do array
   console.log('A [' + index + '] = ' + item) //o elemento `a` vai ser adc ao index de cada elemento do array. a[1] = 0, a[2] = 1 ... 
}

//    <--!--> em Forma de arrow Function

let sum = 0;

numbers.forEach((item,index,array) => {
   sum += item;
   console.log(array)
   console.log(sum) // fazer a soma dos items dos array.
   // <--*--> Lembrando que o index é a posição do item no array, e ele sempre começa em 0. O primeiro item da no index ;
})



// <--!-->

let count = {} // a variavel recebe um objeto vazio. vc coloca oq quer ali!
//letters, para cada item vai receber count!
letters.forEach(item => {
   if (count[item]) {
      count [item] ++
   } else {
      count[item] = 1;
   }
})
console.log(count)