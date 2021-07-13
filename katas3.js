const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (valor){
    let mostrarResultado = document.createElement("p");
    let texto = document.createTextNode("O resultado é " + valor)
    mostrarResultado.appendChild(texto);
    let destino = document.getElementById("d1")
    destino.appendChild(mostrarResultado);
}

function kata1() {
    let resultado = [];
    for(let i = 1 ; i <= 25; i++){
       resultado.push(i)
    }
    return showResults(resultado);
       
} 

function kata2() {
    let resultado = [];
    for(let i = 25; i > 0; i--){
        resultado.push(i);
    }
    return showResults(resultado);
}

function kata3() {
    let resultado = [];
    for(let i = -1; i >= (-25); i--){
        resultado.push(i);
    }
    return showResults(resultado);

}

function kata4() {
    let resultado = [];
    for(let i = -25; i <= -1; i++){
        resultado.push(i);
    }
    return showResults(resultado);

}

function kata5() {
    let resultado = [];
    for (let i = 25; i >= (-25); i--){
        if(i%2 != 0){
            resultado.push(i)
        }
    }
    return showResults(resultado);
}

function kata6() {
    let resultado = [];
    for(let i = 1; i <= 100; i++){
        if(i%3 === 0){
            resultado.push(i)
        }
    }
    return showResults(resultado);

}

function kata7() {
    let resultado = [];
    for(let i = 1; i <= 100; i++){
        if(i%7 === 0){
            resultado.push(i)
        }
    }
    return showResults(resultado);

}

function kata8() {
    let resultado = [];
    for(let i = 100; i>= 1; i--){
        if (i%3 === 0 || i%7 === 0){
            resultado.push(i)
        }
    }
    return showResults(resultado);

}

function kata9() {
   let resultado = [];
   for(let i = 5; i <=100 ; i++){
       if(i%5===0 && i%2 !== 0){
           resultado.push(i)
       }
   }
   return showResults(resultado);

}

function kata10() {
   return showResults(sampleArray);
}

function kata11() {
    let resultado = [];
    for(let i = 1; i <= sampleArray.length; i++){
        if(sampleArray[i]%2 === 0){
            resultado.push(sampleArray[i])
        }
    }
    return showResults(resultado);

}

function kata12() {
    let resultado = [];
    for(let i = 1; i <= sampleArray.length -1; i++){
        if(sampleArray[i]%2 !== 0){
            resultado.push(sampleArray[i])
        }
    }
    return showResults(resultado);

}


function kata13() {
    let resultado = [];
    for(let i = 0; i <= sampleArray.length -1; i++){
        if(sampleArray[i]%8 === 0){
            resultado.push(sampleArray[i])
        }
    }
    return showResults(resultado);

}

function kata14() {
    let resultado = [];
    for(let i = 0; i <= sampleArray.length; i++){
        resultado.push(sampleArray[i]**2)
    }
    return showResults(resultado);

}

function kata15() {
    let resultado = 0;
    for( let i = 1; i <=20; i++){
        resultado += i
    }
    return showResults(resultado);

}

function kata16() {
    let resultado = 0;
    for(let i = 1; i < sampleArray.length; i++){
        resultado  += sampleArray[i]
      
    }
    return showResults(resultado);

}

function kata17() {
    let resultado = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < resultado){
            resultado = sampleArray[i];
        }
                
    }
    return showResults(resultado);

}

function kata18() {
    let resultado = 0;
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > resultado){
            resultado = sampleArray[i];
        }        
    }
    return showResults(resultado);

}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
