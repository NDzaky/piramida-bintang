var text = "";
for (var i = 0; i <= 0; i++){
    text += "*";
}
text += "\n";
for (var a = 2; a <= 5; a++){
    for (var b = 5 - 1; b >= a; b--){
        text += " ";
    }
    for (var c = 1; c <= a; c++){
        text += "*";
    }
    text += "\n";
}
console.log(text);
