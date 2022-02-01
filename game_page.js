
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
    get_word = document.getElementById("word").value ;
    word = get_word.toLowerCase();
    console.log("word in lower case"+word);
chartAt1 = word.chartAt(1);
console.log(chartAt);

length_divide_2=Math.floor(word.lenght/2);
charAt2=word.word.chartAt(length_divide_2);
console.log(charAt2);

length_minus_1=word.length - 1;
charAt3=word.word.chartAt(length_minus_1);
console.log(charAt3);

remove_charAt1 = word.replace(charAt1,"_");
remove_charAt2 = remove_charAt2.replace(charAt2,"_");
remove_charAt3 = remove_charAt3.replace(charAt3,"_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input_type = 'text' id = 'input_check_box'>";
check_button = "<br></br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
row = question_word + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

Question_turn = "player1";
Answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value ;
    answer = get_answer.toLowerCase();
    console.log(" answer in lower case :"+ answer);
     
    if (answer==word)
    {
        if ( Answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML= player1_score;

        }
        else
        {

            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML= player2_score;

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
