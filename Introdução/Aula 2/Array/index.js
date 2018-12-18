/***
 * Em JS o conteúdo do Array não precisa necessariamente 
 * ser do mesmo tipo de dado, os seus itens podem ser diferentes 
 * sem precisar explicitar o seu tipo.
 */
let array = ['palio', 'uno', 'toro', 10, true, new Date()]

console.log("Tamanho do Array",array.length)

array.forEach(function(valor, index){
    console.log(index, valor)
})

console.log(array)