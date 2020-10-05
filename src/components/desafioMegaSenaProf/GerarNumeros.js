function gerarNumeroNaoContido(min, max, array) {
   const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
   return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
   // o returno, e quando a function aleatoria gerar um numero nao contido no array ela para, se tiver contido ele continua chamando.
}


function gerarNumeros(qtde) {
   const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
         const novoNumero = gerarNumeroNaoContido(1, 60, nums)
         return [...nums, novoNumero]
      }, [])
      .sort((n1, n2) => n1 - n2)


   //O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
   //O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
   // sort - colocar na ordem crescente, do menor pra o maior.
   return numeros
}