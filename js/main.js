var body = document.querySelector("body")
var header = document.querySelector("header")
var start = document.getElementById("start")
var divFlou = document.getElementById("div-flou")
var barre = document.getElementById("barre")
var meilleurScore = 0
var meilleurNiveau = 0

function verificationUser() {
    var userJason = localStorage.user
    userJason? welcome():login();

    function welcome() {
        divFlou.style.display="none" 
    }

    function login() {
        divFlou.style.display="initial";
    }

}
verificationUser()


var inputNom = document.getElementById("nom")
var inputPrenom = document.getElementById("prenom")

class users{
    constructor(_nom,_prenom,_niveau,_score){
        this.nom =_nom;
        this.prenom =_prenom;
        this.niveau =_niveau;
        this.score =_score;
    }
}

var submit =document.getElementById("submit")
var user=null
submit.addEventListener("click",function () {
    

    if (inputNom.value =="") {
        alert("Remplisser votre nom pour jouer")

    }

    if ( inputPrenom.value =="") {
        alert("Remplisser votre prenom pour jouer")
    }
    if (inputPrenom.value!="" && inputNom.value!="") {
        divFlou.style.display="none"
        user = new users (inputNom.value,inputPrenom.value)
        var myjson =JSON.stringify(user)
        localStorage.setItem("user",myjson)
    }
    
})


start.addEventListener("click",interval,)
var set = null
const chrono={
    sec:{val:59 , dom:document.getElementById("divsec")},
    milisec:{val:999 , dom:document.getElementById("divmilisec")},
}

function interval() {
    
    set = setInterval(function () {
        chrono.milisec.val--
        chrono.milisec.dom.innerText=chrono.milisec.val
        if (chrono.milisec.val<100) {
            chrono.milisec.dom.innerText="0"+chrono.milisec.val
        }
        if (chrono.milisec.val<10) {
            chrono.milisec.dom.innerText="00"+chrono.milisec.val
        }
        if (chrono.milisec.val==0) {
            chrono.milisec.val=999
            chrono.sec.val--
            chrono.sec.dom.innerText=chrono.sec.val
            if (chrono.sec.val<10) {
                chrono.sec.dom.innerText="0"+chrono.sec.val
            }
        }
        if (chrono.milisec.val==0 && chrono.sec.val==0) {
            
        }
    },1)  
}

//barre.addEventListener()