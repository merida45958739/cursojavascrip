
// otra manera numerico y mes  
numeroMes=5
switch(numeroMes){
    case 1:
        console.log("enero")
        break
        console.log("febrero")
        break
        case 3:
            console.log("marzo")
            break
            default:
                console.log("error mes no encontrado")
}
//otra manera en vocales 
numeroMes=b
switch(numeroMes){
    case a:
        console.log("es una vocal")
        break
        default:
        console.log("no una vocal")
//otra manera en vocales 
        vocal="e"
        switch(vocal){
            case "a": case "e": case "i": case "o": case "u":
                console.log ("la letra ${vocal},es una vocal")
                break
                default:
                    console,log("no es una vocal")
        }
 // ejemplos  de otra manera de realizar la programacion
        console.log ("la letra ${vocal},es una vocal")
        console.log ("la letra ",vocal,"es una vocal")
        console.log ("la letra " + vocal +",es una vocal")


 // ejercicio del dia jueves 03 de noviembre

 // para realizar un ejercicio que te salga solo numeros pares de 2 a 20
        for(let inicial=2;inicial<=20;inicial+=2){
            console.log (inicial)
        }
 //ejemplo que se realice los numeros pares con if
        for(let inicial=1;inicial<=20;inicial++){
        if (inicial%2==0){
            console.log(i)
            
 // si deseamos ver los numeros inpares de 1 a 19
        }else{
            console.log(i)

        }
 //como mostrar en vocales "aeiou" y cuantas letras lleva  
        let vocales ="aeiou"
        console.log(vocales.length)
        console .log (vocales)[2]
        for(let i=0;i<=(vocales.length);i++){
            console.log(vocales[i])
        }
 //realizar let de texto  y for cuantas vocales "a" existe en ese texto
        let texto ="bienbenidos a puquio querido"
        let contador=0
        for(let i=0;i<=(texto.length);i++){
            if (texto[i]=="a"){
                contador+=1
            }
            console.log(vocales[i])
        }
    }
    console.log("tienes",contador,"vocales a")
 // realizar que muestre la cantidad de vocales que tiene mi texto
   let texto="bienbenidos a puquio querido"
    let contador=5
        for(let i=5 ;i<=(texto.length);i++){
            if (texto[i]=="a"){
                contador+=1
                if (texto[i]=="e"){
                    contador+=1
                    if (texto[i]=="i"){
                        contador+=1
                        if (texto[i]=="o"){
                            contador+=1
                            if (texto[i]=="u"){
                                contador+=1
            }
            console.log(vocales[i])
        }
    }
    console.log("tienes",contador,"vocales a")
    //otra manera  de realizar 
    for (let i=0;i<texto.length;i++){
        switch(texto[i]){
            case"a":case"e":case"i":case"o":case"u":
            contador+=1
        }
    }
