//Aula 12
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são exatemente ${hora} horas`)

if (hora < 12) {
    console.log("Bom dia")
}else if(hora <= 18){
    console.log("Boa tarde")
}else{
    console.log("Boa noite")
}