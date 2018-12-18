

// FUNÇÃO
function func(x1, x2, op){

    return eval(
        `${x1} ${op} ${x2}`
    )
    // eval() analisa uma string e executa como código o seu conteúdo
    /** EXEMPLO
     *  function calc(){
            return eval(
                `(6 * 6)/2`
            )
        }
        retornara 18        
     */
}

let _conta = func( 8, 165, '*')

console.log("FUNÇÃO NORMAL", _conta);


// FUNÇÃO ANÔNIMA
let anon = (function (x1, x2, op){

    return eval(
        `${x1} ${op} ${x2}`
    )
})( 8, 165, '*');

console.log("FUNÇÃO ANÔNIMA", anon)

//ARROW FUNCTION
let arrow = (x1, x2, op) =>{

    return eval(
        `${x1} ${op} ${x2}`
    )

}

let conta = arrow( 8, 165, '*')

console.log("ARROW FUNCTION", conta);





/*
function calculo(x1, x2, op){

    let 
        result

    switch ( op ){
        
        case '+':
            result = x1 + x2
        break

        case '-':
            result = x1 - x2
        break

        case '*':
            result = x1 * x2
        break

        case '/':
            result = x1 / x2
        break
        
        
    }

    return result

}

let conta = calculo( 3, 3, '+')

console.log(conta)*/