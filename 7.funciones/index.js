// arrow function o funciones flecha
//
//pasos para contruir una function
//1 palabra reservada  function
//2 ponerle un nombre que escriba el trabajo
//que realizara las funciones 
//3 la funcion puede resivir parametros
//pero si o si indicar que tendra parametros 
//()
//(listaAmigos)
//(edad,nombre)
//4 DATO IMPORTANTE.una funcion siempre tiene que 
//retornar un tipo de dato

function saludo (nombre,apellido){
    let saludo="hola como estas "+nombre+" "+apellido
    return saludo
}

//par usar una funcion debe llamar a la funcion 
console.log(saludo("merita","isabel"))
console.log(saludo("alex","cuadros"))



// si quiero saber nombre y tambien apellido
function saludo2 (nombre,apellido){
    let saludo=""+nombre+""+apellido 
    return saludo

}
//funciones
console.log(saludo2("merida ","inca"))
// tarea
switch("num1+num2")
{
    case "1":
    num1=ingresedatouno();
    num2=ingresedatodos();
    suma (num1,num2);
    break;
    case "2":
    num1=ingresedatouno();
    num2=ingresedatodos();
    multiplicacion (num1,num2);
    break; 
    case "3":
    num1=ingresedatouno();
    num2=ingresedatodos();
    resta (num1,num2);
    break;
    case "4":
    num1=ingresedatouno();
    num2=ingresedatodos();
   division (num1,num2);
    break;
    case "5":
    num1=ingresedatouno();
    num2=ingresedatodos();
    suma (num1,num2);
    break;
}
retur=resultado;
