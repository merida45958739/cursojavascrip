//funcion contar vocales(texto){retur cantidadVocales}
contarVocales("eucalipto")//5
let texto="eucalipto"
let contador=0
for (let i=0;i<texto.length;i++){
    switch(texto^[i]){
        case"a":case"e":case"i":case"o":case"u":
        ++contador
    }

}
//funcion calculadora(num1,num2,operation){retur total}calculadora(45,12,"suma")//33
function calcular(num1,num2,operacion){
    if(operacion=="suma"){
        total=num1+num2
    }
    if(operacion=="resta"){
        total=num1+num2
    } 
    if(operacion=="multiplicacion"){
        total=num1+num2
    }
    if(operacion=="division"){
        total=num1+num2
    }
    return total
}
