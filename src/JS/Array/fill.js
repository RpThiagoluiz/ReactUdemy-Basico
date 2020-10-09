const numbers = [1, 2, 3, 4, 5]

numbers.fill(0) // recebe um valor de inicio e fim. [1,2,3].fill(4,1) *-[1,4,4] como ha 3 elementos no array eles serao substituidos na primeira possicao por 1 e os outros pro 4
console.log(numbers) // * vai sair que cada elemento no array agora, sera 0.fill ele modifica os elementos do array.

const fruits = ['banana', 'manga' ,'pessego']
fruits.fill('kiwi') // todos os elementos serao substituidos pela string kiwi.fill



const fruitsNews = ['banana', 'manga','pessego', 'tomate',  'jabuticaba']
fruitsNews.fill('kiwi',1,4) // o kiwi vai entrar na possicao 1 do array, e na possicao 4, ou ultima, lembrando que array comeca com indice 0.
console.log(fruitsNews) // ['banana', 'kiwi','pessego','kiwi']