let input = document.querySelectorAll(".teclado div");
let visor = document.querySelector(".input");
let rst = 0; // flag do resultado mostrado

//transformando div em botões

input[0].addEventListener("click", apagar);

for (let i = 1; i < 6; i++) {
    input[i].addEventListener("click", op);
}

input[6].addEventListener("click", igual);

for (let i = 7; i < 17; i++) {
    input[i].addEventListener("click", num);
}

//funcionalidade dos botões

function apagar () {
    visor.innerHTML= "";
}

function op (e) {
    let c = visor.innerHTML.length;
    let u = visor.innerHTML[c-1];
    rst = 0;
    
    if(u == "+" || u == "/" || u == "-" || u == "x"){
        let v = visor.innerHTML.substring(0, c-1);
        visor.innerHTML = v + e.target.innerHTML;
    }
    else{
        visor.innerHTML += e.target.innerHTML;
    }
    
}

function num (e) {
    
    if(rst==0){
        visor.innerHTML += e.target.innerHTML;
    }
    else if(rst==1){
        visor.innerHTML = "";
        visor.innerHTML = e.target.innerHTML;
        rst = 0;
    }
    
}

function igual () {
    let v = visor.innerHTML;
    let aN = v.split(/[+-/x]/);
    let aO = v.replace(/[0-9]/g, "").split("");
    
    while (aO.indexOf("/") != -1) {
        let iD = aO.indexOf("/");

        aN.splice(iD, 2, aN[iD] / aN[iD+1]);
        aO.splice(iD, 1);
    }
    
     while (aO.indexOf("x") != -1) {
        let iD = aO.indexOf("x");

        aN.splice(iD, 2, aN[iD] * aN[iD+1]);
        aO.splice(iD, 1);
    }
    
     while (aO.indexOf("+") != -1) {
        let iD = aO.indexOf("+");

        aN.splice(iD, 2, Number(aN[iD]) + Number(aN[iD+1]));
        aO.splice(iD, 1);
    }
 
     while (aO.indexOf("-") != -1) {
        let iD = aO.indexOf("-");

        aN.splice(iD, 2, aN[iD] - aN[iD+1]);
        aO.splice(iD, 1);
    }
    
    visor.innerHTML = aN;
    rst = 1;
}