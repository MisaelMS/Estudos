function verificar() {
    var data = new Date()
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    var nada = document.querySelector("footer#nada")
    if (fano.value.length == 0 || fano.value > ano) {

        window.alert("ERRO. Verifique os dados e tente novamente")
    
    }else {

        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var imagem = document.createElement('img')
        imagem.setAttribute('id','foto')
        
        if (fsex[0].checked) {

            genero = "Homem"
            document.body.style.background="rgba(0, 65, 139, 0.521)"
            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'bebehomem.png')//seta o atributo img 

            }else if (idade >= 10 && idade < 21) {

                img.setAttribute('src', 'jovemhomem.png')//seta o atributo img 

            }else if (idade >= 21 && idade < 50) {

                img.setAttribute('src','adultohomem.png')//seta o atributo img 

            }else if (idade >= 50) {
                img.setAttribute('src','idosohomem.png')//seta o atributo img 

            }

        }else if(fsex[1].checked){

            genero = 'Mulher'
            document.body.style.background="rgba(126, 1, 88, 0.555)"
            if (idade >= 0 && idade < 10) {

                img.setAttribute('src','bebemulher.png')//seta o atributo img 

            }else if (idade >= 10 && idade < 21) {

                img.setAttribute('src','jovemmulher.png')//seta o atributo img 

            }else if (idade >= 21 && idade < 50) {

                img.setAttribute('src','adultomulher.png')//seta o atributo img 

            }else if (idade >= 50) {

                img.setAttribute('src','idosomulher.png')//seta o atributo img 
                document.body.style.backgroundImage="url(taok.jpg)"
                //document.body.style.backgroundRepeat="no-repeat"
                document.body.style.backgroundSize="cover"
                document.body.style.height="150px"
                
                imagem.setAttribute('src','bonolula.png')
                
            }
        }if (fsex[1].checked || fsex[0].checked) {

        res.style.textAlign ="center"//estilo
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)//adiciona na res o img
        nada.appendChild(imagem)

        }
        else{
            res.innerHTML = `Detectamos apenas a idade, que é ${idade} anos, por favor selecione seu gênero`
        }
    }
}