function s1(){
    var soma1 = document.getElementById("soma1").value;
    var soma2 = document.getElementById("soma2").value;
    var soma3 = document.getElementById("soma3").value;
    var soma4 = document.getElementById("soma4").value;
    //aqui vai ter o resultado
    var resultado1 = (Number(soma1) + Number(soma2) + Number(soma3) + Number(soma4)) / 4;
    if (resultado1 >= 7) {
        document.getElementById("somas1").innerHTML = 'você passou !';
    } else {
        document.getElementById("somas1").innerHTML = 'você não passou !';
    }
}
//aqui vai ter as somas de matemática
function s2(){
    var soma5 = document.getElementById("soma5").value;
    var soma6 = document.getElementById("soma6").value;
    var soma7 = document.getElementById("soma7").value;
    var soma8 = document.getElementById("soma8").value;
    //aqui vai ter o resultado
    var resultado2 = (Number(soma5) + Number(soma6) + Number(soma7) + Number(soma8)) / 4;
    if (resultado2 >= 7) {
        document.getElementById("somas2").innerHTML = 'você passou !';
    } else {
        document.getElementById("somas2").innerHTML = 'você não passou !';
    }
}

//aqui vai ter as somas de Historia
function s3(){
    var soma9 = document.getElementById("soma9").value;
    var soma10 = document.getElementById("soma10").value;
    var soma11 = document.getElementById("soma11").value;
    var soma12= document.getElementById("soma12").value;
    //soma
    var resultado3 = (Number(soma9) + Number(soma10) + Number(soma11) + Number(soma12)) / 4 ;
    if (resultado3 >= 7) {
        document.getElementById("somas3").innerHTML = 'você passou !';
    } else {
         document.getElementById("somas3").innerHTML = 'você não passou !';
    }
}
//artes
function s4(){
    var soma13 = document.getElementById("soma13").value;
    var soma14 = document.getElementById("soma14").value;
    var soma15 = document.getElementById("soma15").value;
    var soma16 = document.getElementById("soma16").value;
    //soma 
    var resultado4 = (Number(soma13) + Number(soma14) + Number(soma15) + Number(soma16)) / 4;
    if (resultado4 >= 7) {
        document.getElementById("somas4").innerHTML = 'você passou !';
    } else {
        document.getElementById("somas4").innerHTML = 'você não passou !';
    }
}
//geografia
function s5(){
    var soma17 = document.getElementById("soma17").value;
    var soma18 = document.getElementById("soma18").value;
    var soma19 = document.getElementById("soma19").value;
    var soma20 = document.getElementById("soma20").value;
    //resultado
    var resultado5 = (Number(soma17) + Number(soma18) + Number(soma19) + Number(soma20)) / 4;
    if (resultado5 >= 7) {
        document.getElementById("somas5").innerHTML = 'você passou !'
    } else {
         document.getElementById("somas5").innerHTML = 'você não passou !'
    }
}

//prompt
var prompts = prompt("Qual é o seu nome ?");
var resposta = document.getElementById("nome").innerHTML = 'Bem-Vindo(a) ' +prompts;
var serie = prompt("Qual é a sua série ?");
var resultado = document.getElementById("serie").innerHTML = 'série ' + serie;