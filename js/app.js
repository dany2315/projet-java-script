var body = document.querySelector("body")
var header = document.querySelector("header")
var start = document.getElementById("start")
var pause =document.getElementById("pause")
var divFlou = document.getElementById("div-flou")
var barre = document.getElementById("barre")
var meilleurScore = 0
var meilleurNiveau = 0

function verificationUser() {
    return new Promise((resolve,reject)=>{
            var userJason = localStorage.user
        
            if (userJason) {
                welcome()
                resolve()
            }else{
                    login()
                    if (inscrire==true) {
                    resolve()
                    }
                }
    })
}

function welcome() {
    divFlou.style.display="none" 

}

function login() {
    divFlou.style.display="initial";
}

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

submit.addEventListener("click",inscrire)


function inscrire() {
    var terminer = null

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
        return terminer=true
    }
     
    return terminer
}











//LE BOUTON START ACTIVE LE CHRONO ET LA ROTATION DE LA BARRE
verificationUser().then(startGame)

var score = 0
var scorefinal = 0
var level = 0



function startGame() {
    start.addEventListener("click",interval)
    start.addEventListener("click",rotation)         
}


start.addEventListener("click",starting)

function starting() {
    barre.addEventListener("click",changeScore)
    barre.addEventListener("mouseover",hoverDisparait)
}


var set = null
const chrono={
    sec:{val:59 , dom:document.getElementById("divsec")},
    milisec:{val:999 , dom:document.getElementById("divmilisec")},
}

function interval() {
    
    start.removeEventListener("click",interval)
    
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
        
    },1)  
}

function rotation() {
    barre.style.animationName="rotating"
    barre.style.animationDuration="2s"
    barre.style.animationTimingFunction="linear"
    barre.style.animationIterationCount="infinite"
    barre.style.animationPlayState="running"
}

var spanLevel = document.getElementById("level")
var spanScore = document.getElementById("score")
var y = 0
var x = 0
var score=0
var level = 1

function changeScore() {
    x++
    score+=10
    var scorefinal=score*level
    spanScore.innerText=scorefinal


    
    if (x-y==10) {
        y+=10
        level++
        spanLevel.innerText="0"+level
    }
    
    if (level==5) {
        youWin()
    }
}
function hoverDisparait() {
    setTimeout(barre.style.display= "non",)
}









//LE BOUTON PAUSE MET EN PAUSE LE CHRONO ET LA ROTATION DE LA BARRE 
pause.addEventListener("click",pausing)
pause.addEventListener("click",stopRotation)

function pausing() {
    clearInterval(set,0)
    start.addEventListener("click",interval)   
    barre.removeEventListener("click",changeScore)
    barre.removeEventListener("mouseover",hoverDisparait)
}

function stopRotation() {
    barre.style.animationPlayState="paused"
}

    

    
function youWin(){
    
}

    




