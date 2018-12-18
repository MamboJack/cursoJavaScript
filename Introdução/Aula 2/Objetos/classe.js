class classe {
    constructor(){        
        this.cor = 'prata'
    }

    ligar(){
        console.log("Tentando ligar")
        return "Ligou"
    }
}


let objeto = new classe()
console.log(objeto.cor, objeto.ligar())