function login(){
    var p1 = document.getElementById("input1").value;
    var p2 = document.getElementById("input2").value;
    localStorage.setItem("Player_1_name",p1);
    localStorage.setItem("Player_2_name",p2);
    window.location="quiz.html";
}