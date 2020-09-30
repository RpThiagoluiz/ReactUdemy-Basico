/*
   criar um componente que tem uma propriedade teste q passe uma expresao, e ele verifique true or false, e mostre na tela a resposta.

   <if test = { aluno.nota >=7}>
      <span></span>
      span></span>
      span></span>

*/



export default props => {

//usei o filtro, para filtar o filho 'child' que tem a tag Else, fazendo o test para o return.

   const elseChild = props.children.filter(child => {
      return child.type && child.type.name === 'Else'
   })[0]

   const ifChildren = props.children.filter(child => {
      return child !== elseChild
   })

   if (props.test) {
      return ifChildren //todos os elementos passado no componente serao exibidos caso atenda a verificacao
   } else if(elseChild) {
      return elseChild
   }
   else {
      return false
   }
}

export const Else = props => props.children // como nao ta exportando default ele precisa ter um nome na variavel.


/*
if (props.test) {
      return props.children //todos os elementos passado no componente serao exibidos caso atenda a verificacao
   } else {
      return false
   }

   *tava dentro do copor do porps, era o objeto da arrow function.
*/