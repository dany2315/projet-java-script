var start = document.getElementById("start")
var body = document.querySelector("body")
var milisec = document.getElementById("milisec")
var sec = document.getElementById("sec")
var barre = document.getElementById("barre")
var divFlou = document.getElementById("div-Flou")
var header = document.querySelector("header")

    start.addEventListener("click", function () {
    body.style.opacity ="0.5";
    var divLog = document.createElement("div")
    divLog.style.width="250px"
    divLog.style.height="250px"
    divLog.style.backgroundColor="red"
    divLog.style.opacity="0.5"
    divLog.style.margin ="0px AUTO"
    divLog.style.position="absolute"
    body.appendChild(divLog)

    
})