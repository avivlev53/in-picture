'use strict'
var isPlay = true

var gQuests = [
    { id: 0, opts: ['Iron Man 2', 'Thor', 'HULK'], correctOptIndex: 0 },
    { id: 1, opts: ['Avengers: Age of Ultron', 'Captain America: The Winter Soldier'], correctOptIndex: 1 },
    { id: 2, opts: ['Spider-Man: Homecoming', 'Guardians of the Galaxy Vol.2'], correctOptIndex: 1 },
]
var gCurrQuestIdx = 0
var gRightAnswer = 1


// function toggle() {
//     isPlay = !isPlay
//     if (!isPlay) {
//         alert('you restart the game')
//         gCurrQuestIdx = 0
//         gRightAnswer = 1
//         initGame()

//     }else{initGame()}
    
// }

function initGame() {
    gCurrQuestIdx = 0;
    gRightAnswer = 1;

    renderQuest();
}

function renderQuest() {
    var htmlPic = ''
    var elPic = document.querySelector('.pic')
    htmlPic = '<img src="img/' + gCurrQuestIdx + '.PNG" alt=""/>'
    elPic.innerHTML = htmlPic
    
    var htmlBtnStr = ''
    var elBtn = document.querySelector('.btn-continer')
    var opts =  gQuests[gCurrQuestIdx].opts;
    for (var i = 0; i < opts.length; i++) {
        htmlBtnStr += '<button class="btn" onclick="checkAnswer('+i+')">' + opts[i] + '</button>';
    }
    // htmlBtnStr = '<button class="btn" onclick="checkAnswer(0)">' + gQuests[gCurrQuestIdx].opts[0] + '</button><button class="btn" onclick="checkAnswer(1)">' + gQuests[gCurrQuestIdx].opts[1] + '</button>'
    elBtn.innerHTML = htmlBtnStr

}


// function checkAnswer(optIdx) {

//     if (gQuests[gCurrQuestIdx].correctOptIndex === optIdx && gQuests[gCurrQuestIdx].id < 2) {
//         gCurrQuestIdx++;
//         gRightAnswer++
//         renderQuest();
//     }
//     else if (gQuests[gCurrQuestIdx].id === 2) {
//         console.log(gRightAnswer)
//         alert('Victory you know Marvel')
//         gCurrQuestIdx = 0;
//         gRightAnswer = 1
//         initGame();
//     } else {
//         alert('Oops..Try Again!');
//         gRightAnswer++
//     }

// }
function checkAnswer(optIdx) {

    if (gQuests[gCurrQuestIdx].correctOptIndex === optIdx) {
        gCurrQuestIdx++;
        gRightAnswer++
        
        if (gCurrQuestIdx === gQuests.length) {
            console.log(gRightAnswer)
            alert('Victory you know Marvel');
            initGame();
        } else {
            renderQuest();
        }
    } else {
        alert('Oops..Try Again!');
        gRightAnswer++
    }

}





