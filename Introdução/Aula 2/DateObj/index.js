//A Data é exibida em TimeStamp
//contanto os milissegundos desde 1/jan/1970
//até o presente momento
let saporra = Date.now()
console.log(saporra)

//segundos
console.log((saporra / 1000));
//minutos
console.log(((saporra / 1000)/60));
//horas
console.log((((saporra / 1000)/60)/60));
//dias
console.log(((((saporra / 1000)/60)/60)/24));
//anos
console.log(((((saporra / 1000)/60)/60)/24)/365);


let agora = new Date()

console.log(agora)
console.log(agora.getDate())
console.log(agora.getDay())
console.log(agora.getMonth())
console.log(agora.getFullYear())
console.log(agora.toLocaleDateString('pt-BR'))