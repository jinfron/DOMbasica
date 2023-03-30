var user;
var pc;
if (user == "piedra" && pc == "tijeras") {
    console.log("ganaste");
}
else if (user == "tijeras" && pc == "papel"){
    console.log("ganaste");
}
else if (user == "papel" && pc == "piedra"){
    console.log("ganaste");
}
else if (user == pc){
    console.log("empate");
}
else {
    console.log("perdiste")
};