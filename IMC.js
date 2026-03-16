
calcular.addEventListener("click", function(){

let peso = document.querySelector("#peso").value
let altura = document.querySelector("#altura").value
let nome = document.querySelector("#nome").value
let calcular = document.querySelector("#calcular")
let res = document.querySelector("#res")
let altref = altura.replace(",", ".")


if(altref>=100){
        altref = altref/100  
    }
let imc = Number(peso/altref**2)
    if (imc < 18.5) {
        res.innerHTML = `<span style="color:gold;font-weight:bold;">${nome}</span> seu IMC é <span style="color:gold;font-weight:bold;">${imc.toFixed(1)}</span> e você esta abaixo do peso.`;
    } else if (18.5 <= imc && imc <= 25) {
        res.innerHTML = `<span style="color:gold;font-weight:bold;">${nome}</span> seu IMC é <span style="color:gold;font-weight:bold;">${imc.toFixed(1)}</span> e você esta no peso ideal.`;
    } else if (25 <= imc && imc <= 30) {
        res.innerHTML = `<span style="color:gold;font-weight:bold;">${nome}</span> seu IMC é <span style="color:gold;font-weight:bold;">${imc.toFixed(1)}</span> e você esta com sobrepeso.`;
    } else if (30 <= imc && imc < 40) {
        res.innerHTML = `<span style="color:gold;font-weight:bold;">${nome}</span> seu IMC é <span style="color:gold;font-weight:bold;">${imc.toFixed(1)}</span> e você com obesidade.`;
    } else {
        res.innerHTML = `<span style="color:gold;font-weight:bold;">${nome}</span> seu IMC é <span style="color:gold;font-weight:bold;">${imc.toFixed(1)}</span> e você esta com obesidade grave.`;
    }
        }) 





