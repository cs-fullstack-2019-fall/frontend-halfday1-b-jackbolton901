// getting the 1st button reference
let but1 = document.getElementById("bfont");

// getting the second button reference
let but2 = document.getElementById("bfont2");

// 1st score number text
let score1 = document.getElementById("sfont");

// 2nd number text
let score2 = document.getElementById("sfont2");

// my 2 counter variables

let clickNum = 0;
let clickNum2 = 0;
// button 1 events
but1.addEventListener("click", function (ev) {
    clickNum += 1;
    score1.innerHTML = clickNum;

});
// button 2 events
but2.addEventListener("click", function (ev) {
    clickNum2 += 1;
    score2.innerHTML = clickNum2;

});
let victory = document.getElementById("winner");
// function to keep the score of winner
function winText(){
       if(clickNum > clickNum2){
           victory.innerHTML= "Player 1 is in the lead!!!"
       }
       else if(clickNum < clickNum2){
           victory.innerHTML = "Player 2 is in the lead!!!"
       }
       else{
           victory.innerHTML = "Tied"
       }

}
// getting page reference
let page = document.getElementById("container");
page.addEventListener("click", winText);



