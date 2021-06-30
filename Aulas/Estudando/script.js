var num1 = (document.getElementById("num1"))
var num2 = (document.getElementById("num2"))
var res = document.getElementById("res")
var ap = document.getElementById("ap")
var resp = document.getElementById("resp")

function somar(){
    var soma = Number(num1.value) + Number(num2.value)
    res.innerHTML = `A soma é ${soma}`
}
function subtrair(){
    var subtrai = Number(num1.value) - Number(num2.value)
    res.innerHTML = `A subtração é ${subtrai}`
}
function multiplicar() {
    var mult = Number(num1.value) * Number(num2.value)
    res.innerHTML = `A multiplicação é ${mult}`
}
function dividir() {
    var divi = Number(num1.value) / Number(num2.value)
    res.innerHTML = `A divisão é ${divi}`
}

function aplicar() {
    var aplic = ap.value
    resp.innerHTML = `Valor é ${aplic}`
}