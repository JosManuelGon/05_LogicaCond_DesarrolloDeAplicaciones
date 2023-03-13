//Alumno: José Manuel González Maldonado
//Desarrollo de Aplicaciones Web
//05. Lógica Condicional

//EJERCICIO #1: ¿Hiciste la tarea?.
var Respuesta = prompt('¿Hiciste la tarea?')

function tarea(){
    if(Respuesta === 'Si'){
        console.log("¡Bien Hecho!")
        
    }
    else{
        console.log("No te rindas,¡Empieza ya mismo!")
        
    }
}
console.log(tarea())

//EJERCICIO #2: Conversion de grados Farenheit a Celsius.
var Respuesto = prompt('¿A cuantos grados Farenheit(Fº) esta el lugar donde vives?')

function Temp(){
    console.log((( Respuesto - 32) * 5 / 9)+ " Cº");
}
console.log(Temp())

//EJERCICIO #3: Mayor de 3 numeros.
var n1 = prompt("Ingrese Primer Digito: ");
var n2 = prompt("Ingrese Segundo Digito: ");
var n3 = prompt("Ingrese Tercer Digito: ");

n1=parseInt(n1);
n2=parseInt(n2);
n3=parseInt(n3);

function Digitos(){
    if (n1 == n2 && n1 == n3){
        console.log("Primer Digito, Segundo Digito y Tercer Digito son iguales! y valen: " + n1 + "");
        }
        else{
          
           if (n1 > n2){
              if (n1 > n3){
                 console.log("Primer Digito es Mayor y vale: " + n1 +"");
                 }
                 else{
                     console.log("Tercer Digito es Mayor y vale: " + n3 +"");
                    }
           }
           else{
              if(n1 < n2){
                 if (n2 > n3){
                     console.log("Segundo Digito es Mayor y vale: " + n2 + "");
                    }
                    else{
                     console.log("Tercer Digito es Mayor y vale: " + n3 + "");
                       }
                 }
              }
        }
        
}
console.log(Digitos());

//EJERCICIO EXTRA #1: Consonante o Vocal.
var letra= prompt('Digite una letra :')

function evaluateLetter() {
if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' || 
    letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U')
{
    console.log('Es vocal')
} else if (letra !=='b' || letra !=='c' || letra !=='d' || letra !=='f' || letra !=='g' || 
           letra !=='h' || letra !=='j' || letra !=='k' || letra !=='l' || letra !=='m' || 
           letra !=='n' || letra !=='ñ' || letra !=='p' || letra !=='q' || letra !=='r' || 
           letra !=='s' || letra !=='t' || letra !=='v' || letra !=='w' || letra !=='x' || 
           letra !=='y' || letra !=='z' ||  letra !=='B' || letra !=='C' || letra !=='D' ||  
           letra !=='F' || letra !=='G' || letra !=='H' || letra !=='J' || letra !=='K' || 
           letra !=='L' || letra !=='M' || letra !=='N' || letra !=='Ñ' || letra !=='P' || 
           letra !=='Q' || letra !=='R' || letra !=='S' || letra !=='T' || letra !=='V' || 
           letra !=='W' || letra !=='X' || letra !=='Y' || letra !=='Z') 
{
    console.log('Es Consonante')
}
}
console.log(evaluateLetter());