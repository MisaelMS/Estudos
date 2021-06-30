function clicar(){
    var nome = document.getElementById("nome")
    var agradece = document.getElementById("agradece")
    agradece.innerHTML = (`Obrigado por clicar! ${nome.value}.`)
    alert(`Seja bem vindo! ${nome.value}.`)
}
function redirecionar(){
    window.open("https://watch.lolesports.com/vods/cblol-brazil/cblol-split-2-2020") // abre mais uma aba
    //window.location.href = "https://watch.lolesports.com/vods/cblol-brazil/cblol-split-2-2020" // na mesma aba vai para outro site
}
function trocar(elemento){
    //document.getElementById("mouse").innerHTML = ("Obrigado por passar o mouse!")
    //alert("Trocar texto!")
    elemento.innerHTML = "Obrigado por passar o mouse!"
}
function voltar(elemente){
    document.getElementById("mouse").innerHTML = ("Passe o mouse aqui!")
}
function load(){
    alert("Página carregada!")
}
function change(elemento){
    console.log(elemento.value)
}