function Imc() {
    let massa = window.document.getElementById("massa")
    let altura = window.document.getElementById("altura")
    
    
    if(massa.value >= 200) {
        alert("Digite um valor válido!");
    }
    
    let imc = massa.value/(altura.value**2);
    //Resultado numérico do IMC.
    window.document.getElementById("imc").innerHTML = "Seu IMC é de: " + imc.toFixed(2);    
    //Resultado da classificação do IMC.
    let result = "classificação de massa corpórea: ";

    if(imc < 18.5){
       window.document.getElementById("imc2").innerHTML = result + "Magreza";
    }else if(imc >= 18.5 && imc <= 24.9){
        window.document.getElementById("imc2").innerHTML = result + "Normal";
    }else if(imc >= 25 && imc <= 29.9){
        window.document.getElementById("imc2").innerHTML = result + "Sobrepeso";
    }else if(imc >= 30 && imc <= 34.9){
        window.document.getElementById("imc2").innerHTML = result + "Obesidade grau I";
    }else if(imc >= 35 && imc <= 39.9){
        window.document.getElementById("imc2").innerHTML = result + "Obesidade grau II";
    }else if(imc >= 40){
        window.document.getElementById("imc2").innerHTML = result + "Obesidade grau III";
    }
    
}

function Reset() {
    window.document.getElementById("imc").innerHTML = "Seu IMC é de: ";
    window.document.getElementById("imc2").innerHTML = "Resultado aqui";    

}
