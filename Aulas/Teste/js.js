
let pessoa = {
    fSexo:fSexo = document.getElementsByName("radsex"),
    Nome:nome = document.getElementById("Nome"),
    Carregar(){
        let Sexo = ""
        
        let lista = document.querySelector("select#lista")
        let item = document.createElement("option")
        if(pessoa.Nome =! ""){
            window.alert("Seja bem vindo!"+pessoa.Nome+"!")
            if(pessoa.fSexo[0].checked){
                Sexo = "Masculino"
                item.text = `Olá ${pessoa.Nome}, prazer em conhecelo. Seu sexo é ${Sexo}.`
                lista.appendChild(item)

            }else{
                if(pessoa.fSexo[1].checked){
                    Sexo = "Feminino"
                    item.text = `Olá ${pessoa.Nome}, prazer em conhecela. Seu sexo é ${Sexo}`
                    lista.appendChild(item)
                }
        
            }
        }
        else{
            alert("Você deve escrever um nome!DE SEU BURRO!")
        }
    }

}