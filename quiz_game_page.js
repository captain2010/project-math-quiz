
player1_name = localStorage.getItem("player1_name");

player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn-"+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+ player2_name;

function send(){
    number1 = document.getElementById("Number 1").value;
    number2 = document.getElementById("Number 2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X"+ number2 + "</h4>";
    
}
input_box = "<br>Answer : <input type=''text  id='input_check_box'>";

Question_turn = "player1";
Answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value ;
    answer = get_answer.toLowerCase();
    console.log(" answer in lower case :"+ answer);

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";

     question_button = "<h4>" + number1 + "X"+ number2 +"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>" ;
     row = question_number + input_box + check_button ;
     
    if (get_answer==actual_answer)
    {
        if ( Answer_turn=="player1")
        {
            Update_player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML= update_player1_score;

        }
        else
        {

            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML= update_player2_score;

        }
    }

if (Question_turn=="player1")
{
    Question_turn = "player2";
    document.getElementById("player_question").innerHTML = "question turn"+player2_name;
}
else
{
    Question_turn = "player1";
    document.getElementById("player_question").innerHTML = " question turn"+player1_name;
}
if (Answer_turn="player2")
{
    Answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "answer turn"+player2_name;
}
else{
    Answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = " answer turn"+player1_name;
}
document.getElementById("output").innerHTML="";

}

document.getElementById("output").innerHTML=row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";