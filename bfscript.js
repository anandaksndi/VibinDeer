var audioBfast = document.getElementById("audioBfast");
var playBfast = document.getElementById("play-icon-bfast");
// bell
var audioSBell = document.getElementById("audioBell");
var playSBell = document.getElementById("play-icon-bfast-2");
// food
var audioFood = document.getElementById("audioFood");
var playFood = document.getElementById("play-icon-bfast-3");
// traffic
var audioTraffic = document.getElementById("audioTrafic");
var playTraffic = document.getElementById("play-icon-bfast-4");


playBfast.onclick = function(){
    if(audioBfast.paused){
        audioBfast.play();
        playBfast.src = "media/pause.png";
    }
    else{
        audioBfast.pause();
        playBfast.src = "media/play.png";
    }
}

playSBell.onclick = function(){
    if(audioSBell.paused){
        audioSBell.play();
        playSBell.src = "media/pause.png";
    }
    else{
        audioSBell.pause();
        playSBell.src = "media/play.png";
    }
}

playFood.onclick = function(){
    if(audioFood.paused){
        audioFood.play();
        playFood.src = "media/pause.png";
    }
    else{
        audioFood.pause();
        playFood.src = "media/play.png";
    }
}

playTraffic.onclick = function(){
    if(audioTraffic.paused){
        audioTraffic.play();
        playTraffic.src = "media/pause.png";
    }
    else{
        audioTraffic.pause();
        playTraffic.src = "media/play.png";
    }
}


var volumesliderBfast = document.getElementById("volumeslider-bfast");
var volumesliderBell = document.getElementById("volumeslider-bfast-2");
var volumesliderFood = document.getElementById("volumeslider-bfast-3");
var volumesliderTraffic = document.getElementById("volumeslider-bfast-4");

volumesliderBfast.addEventListener('mousemove', setvolume11);
volumesliderBell.addEventListener('mousemove', setvolume12);
volumesliderFood.addEventListener('mousemove', setvolume13);
volumesliderTraffic.addEventListener('mousemove', setvolume14);

function setvolume11(){
    audioBfast.volume = volumesliderBfast.value / 100;
}

function setvolume12(){
    audioSBell.volume = volumesliderBell.value / 100;
}

function setvolume13(){
    audioFood.volume = volumesliderFood.value / 100;
}

function setvolume14(){
    audioTraffic.volume = volumesliderTraffic.value / 100;
}

//change image button



