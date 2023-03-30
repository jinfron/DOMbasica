/*var numero = 10;

 switch (numero){
    case 1:
        console.log("soy uno");
        break;
    case 10:
        console.log("soy un diez");
        break;
    case 100:
        console.log("soy un 100");
        break;
    default:
        console.log
 }
 */

 var user;
 var pc;

 switch (true){
    case user == "piedra" && pc == "tijera":
        console.log ("tu ganaste");
        break;
    case user == "tijera" && pc == "papel":
            console.log ("tu ganaste");
            break;
    case user == "papel" && pc == "piedra":
            console.log ("tu ganaste");
            break;
    case user == "piedra" && pc == "tijera":
            console.log ("tu ganaste");
            break;
    case user == pc:
            console.log ("tu Empate");
            break;
    default:
        console.log("perdiste");
            }