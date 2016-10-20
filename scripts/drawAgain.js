/**
 * Created by Liss on 20.10.2016.
 */
//Создаём функцию перерисовки
 var i;
var row=29;


var drawAgain=function drawAgain(pictures) {
    var gameSpace=document.getElementById("gameSpace");
    var parts=[];
    gameSpace.innerHTML = "";
    for (i = 0; i < row; i++) {
        parts+= pictures[i].join("");
    }
    gameSpace.innerHTML += (parts + "</br>");
};