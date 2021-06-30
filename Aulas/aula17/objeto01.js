let amigo = {nome: "Misael", sexo: "M", peso: 103, 
engordar(p){
    console.log("Engordou")
    this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)