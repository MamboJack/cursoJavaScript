let celular = function(){

    //atributo
    this.cor = "prata"

    //método
    this.ligar = function(){
        return console.log("Ligou")
    }
}

let objeto = new celular()
console.log(objeto.cor,  objeto.ligar())