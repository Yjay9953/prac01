let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input"); // 폼 껍데기들을 html상 id이름으로서 '선택'하여 다른이름으로 선언
let resultArea = document.getElementById("result-area");
let resetButton = documenet.getElementById("reset-button");
let chance=5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");


playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답",computerNum);
}
function play(){

    let userValue = userInput.value;
    console.log(userValue);
    chances--;

    if (userValue < computerNum){
        resultArea.textContent="UP";
    } else if (userValue > computerNum)
{
    resultArea.textContent="DOWN";
}else{
    resultArea.textContent = "BINGO"
}

}    

}


pickRandomNum();