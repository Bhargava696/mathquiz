var player_1 = localStorage.getItem("Player_1_name");
var player_2 = localStorage.getItem("Player_2_name");
var score_1 = 0;
var score_2 = 0;
document.getElementById("player_1").innerHTML=player_1 + ": ";
document.getElementById("player_2").innerHTML=player_2 + ": ";
document.getElementById("player_1_score").innerHTML=score_1;
document.getElementById("player_2_score").innerHTML=score_2;
document.getElementById("questionTurn").innerHTML = "Question Turn : " + pl1;
document.getElementById("answerTurn").innerHTML = "Answer Turn : " + pl2;
function submit(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var ans = num1*num2;
    var q = "<h4>"+num1+" x "+num2;
    var a = "<br><h4>Answer : </h4><input id='inp'>";
    var btn = "<br><br><button class='btn btn-info' onclick='enter()'>Enter</button>";
    var b = q+a+btn;
    document.getElementById("ans").innerHTML=b;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}