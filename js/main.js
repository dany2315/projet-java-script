var body = document.querySelector("body")
var header = document.querySelector("header")
var milisec = document.getElementById("milisec")
var sec = document.getElementById("sec")
var inscrire = document.getElementById("inscrire")
var start = document.getElementById("start")
var divFlou = document.getElementById("div-flou")
var barre = document.getElementById("barre")
var meilleurScore = 0
var meilleurNiveau = 0


inscrire.addEventListener("click", function () {
divFlou.style.display="initial"
})


var inputNom = document.getElementById("nom")
var inputPrenom = document.getElementById("prenom")
var submit =document.getElementById("submit")

class users{
    constructor(_nom,_prenom,_niveau,_score){
        this.nom =_nom;
        this.prenom =_prenom;
        this.niveau =_niveau;
        this.score =_score;
    }
}
var user=null
var userJason = localStorage.user

function verificationUser() {
    userJason? welcome():login();

    function welcome() {
        inscrire.style.display="none"
    }

    function login() {
        inscrire.style.display="initial"
        
    }
}


submit.addEventListener("click",function () {
    
    if (inputNom.value =="") {
        alert("Remplisser votre nom pour jouer")
    }

    if ( inputPrenom.value =="") {
        alert("Remplisser votre prenom pour jouer")
    }
    if (inputPrenom.value!="" && inputNom.value!="") {
        divFlou.style.display="none"
    }
    

    user = new users (inputNom.value,inputPrenom.value)
    var myjson =JSON.stringify(user)
    localStorage.setItem("user",myjson)

    verificationUser

})

//start.addEventListener("click",function)
