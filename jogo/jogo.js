var numero= Math.ceil(Math.random()*(10-0)+0);
console.log(numero)
var pc = document.getElementById("console")
var put = document.getElementById("entrada")
var but = document.getElementById("botao")
var pontos = document.getElementById("pontoatual")


function click(){
    console.log ("entrou")
    var inumero= parseInt( put.value )
    put.value=""
    console.log (inumero)
    if(numero>inumero){
        pc.innerHTML+="<h3> O número é maior</h3>"
    }
    if(numero<inumero){
        pc.innerHTML+="<h3> O número é menor</h3>"
    }
    if(numero==inumero){
        pontos.innerText=(parseInt(pontos.innerText)+1)+""
        pc.innerHTML+="<h3>GANHOU!!!</h3>"
        numero= Math.ceil(Math.random()*(10-0)+0);
        var audio= new Audio("musica.mp3")
        audio.play();
    }
}

but.addEventListener("click",click)