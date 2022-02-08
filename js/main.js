var body = document.querySelector("body")
var header = document.querySelector("header")
var milisec = document.getElementById("milisec")
var sec = document.getElementById("sec")
var inscrire = document.getElementById("inscrire")
var start = document.getElementById("start")
var divFlou = document.getElementById("div-flou")
var barre = document.getElementById("barre")


inscrire.addEventListener("click", function () {
divFlou.style.display="initial"
})


var inputNom = document.getElementById("nom")
var inputPrenom = document.getElementById("prenom")
var submit =document.getElementById("submit")
submit.addEventListener("click",function () {
    if (inputNom.value =="") {
        alert("Remplisser votre nom pour jouer")
    }

    if ( inputPrenom.value =="") {
        alert("Remplisser votre prenom pour jouer")
    }

    divFlou.style.display="none"
})


