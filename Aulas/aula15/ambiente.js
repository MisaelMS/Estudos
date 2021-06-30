let num = [5, 8, 2, 9, 3]
num[5]=6
num.push(1)//bota numa casa vazia dps da ultima vaga
num.length//tamanho da array
num.sort()//vai colocar os elementos em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`Tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//for (let pos = 0; pos < num.length; pos++){
//console.log(`A posição ${pos} tem o valor ${num[pos]}`)
//}

//agora em ecmascript
//for (let pos in num) {//para cada posição em num
//    console.log(`A posição ${pos} tem o valor ${num[pos]}`)    
//}
let onde = num.indexOf(81)
//buscar valores dentro de um vetor
num.indexOf(7)//Ele vai procurar na array o valor que nesse seria 7
num.indexOf(8)
//quando mostra -1, significa que não foi encontrado

if (onde == -1) {
    console.log("NÂO ENCONTRADA A POSIÇÂO")
}else{
console.log(`O valor se encontra na posição ${onde}`)
}