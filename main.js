var seconds = 0;
var secondCounter = document.getElementById('secondCounter');
var nothing = document.getElementById('nothing');
var randMessageNo = 0;
var randMessage = "";
var button = document.getElementById('clicker');
var clickCounter = document.getElementById('clickCounter');
var clicks = 0;
var hiddenMessage = 0;

function clickButton(){
    clicks = clicks + 1;
    clickCounter.innerText = "Clicks : " + clicks;
}

function incrementSeconds() {
    seconds += 1;
    secondCounter.innerText = "You have been here for " + seconds + " seconds.";

    hiddenMessage = Math.round(Math.random()*1000000);

    if(hiddenMessage == 500){
        nothing.innerText = "CONGRATULATIONS!!!!!! THIS MESSAGE HAS A 0.0001% CHANCE OF APPEARING!!";
    }

    randMessageNo = Math.round(Math.random()*10);
    console.log(randMessageNo);

    if(randMessageNo == 1){
        randMessage = "Nothing is going to happen";
    }else if(randMessageNo == 2){
        randMessage = "You can close this tab now";
    }else if(randMessageNo == 3){
        randMessage = "Why are you still here?";
    }else if(randMessageNo == 4){
        randMessage = "You are wasting your time";
    }else if(randMessageNo == 5){
        randMessage = "You could be doing anything else right now";
    }else if(randMessageNo == 6){
        randMessage = "How much free time do you have?";
    }else if(randMessageNo == 7){
        randMessage = "You could be doing work, eating, playing games, but you are here";
    }else if(randMessageNo == 8){
        randMessage = "Why are you boring yourself";
    }else if(randMessageNo == 9){
        randMessage = "Go touch some grass";
    }else if(randMessageNo == 10){
        randMessage = "Go spend time with your family, or anything other than this";
    }else{
        randMessage = "";
    }

    if(seconds == 100){
        nothing.innerText = randMesage;
    }else if(seconds == 120){
        nothing.innerText = randMessage;
    }else if(seconds == 150){
        nothing.innerText = "Fine, you can click this button"
        button.innerText = "CLICK ME!";
        button.style.backgroundColor = "grey";
        button.style.border = "15px";
        clickCounter.innerText = "Clicks : "
    }else if(seconds == 170){
        nothing.innerText = randMessage;
    }else if(seconds == 225){
        nothing.innerText = randMessage;
    }else if(seconds == 250){
        nothing.innerText = randMessage;
    }else if(seconds == 300){
        nothing.innerText = "5 minutes now!";
    }else if(seconds == 350){
        nothing.innerText = randMessage;
    }else if(seconds == 400){
        nothing.innerText = randMessage;
    }else if(seconds == 450){
        nothing.innerText = randMessage;
    }else if(seconds == 500){
        nothing.innerText = randMessage;
    }else if(seconds == 550){
        nothing.innerText = randMessage;
    }else if(seconds == 600){
        nothing.innerText = "10 minutes now!";
    }else if(seconds == 650){
        nothing.innerText = randMessage;
    }else if(seconds == 700){
        nothing.innerText = randMessage;
    }else if(seconds == 750){
        nothing.innerText = randMessage;
    }else if(seconds == 800){
        nothing.innerText = randMessage;
    }else if(seconds == 850){
        nothing.innerText = randMessage;
    }else if(seconds == 900){
        nothing.innerText = randMessage;
    }else if(seconds == 950){
        nothing.innerText = randMessage;
    }else if(seconds == 1000){
        nothing.innerText = "1000 seconds!";
    }else if(seconds == 1100){
        window.close();
    }
}

var interval = setInterval(incrementSeconds, 1000);