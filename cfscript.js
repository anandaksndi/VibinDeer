// cafe bgm
var audioCafe = document.getElementById("audioCafe");
var playCafe = document.getElementById("play-icon-4");
// coffee
var audioCoffee = document.getElementById("audioCoffee");
var playCoffee = document.getElementById("play-icon-5");
// counter
var audioCounter = document.getElementById("audioCounter");
var playCounter = document.getElementById("play-icon-6");
// cat
var audioCat = document.getElementById("audioCat");
var playCat = document.getElementById("play-icon-7");
// customer
var audioCustomer = document.getElementById("audioCustomer");
var playCustomer = document.getElementById("play-icon-8");
// white/people
var audioWhite = document.getElementById("audioWhite");
var playWhite = document.getElementById("play-icon-9");

playCafe.onclick = function(){
    if(audioCafe.paused){
        audioCafe.play();
        playCafe.src = "media/pause.png";
    }
    else{
        audioCafe.pause();
        playCafe.src = "media/play.png";
    }
}

playCoffee.onclick = function(){
    if(audioCoffee.paused){
        audioCoffee.play();
        playCoffee.src = "media/pause.png";
    }
    else{
        audioCoffee.pause();
        playCoffee.src = "media/play.png";
    }
}

playCounter.onclick = function(){
    if(audioCounter.paused){
        audioCounter.play();
        playCounter.src = "media/pause.png";
    }
    else{
        audioCounter.pause();
        playCounter.src = "media/play.png";
    }
}

playCat.onclick = function(){
    if(audioCat.paused){
        audioCat.play();
        playCat.src = "media/pause.png";
    }
    else{
        audioCat.pause();
        playCat.src = "media/play.png";
    }
}

playCustomer.onclick = function(){
    if(audioCustomer.paused){
        audioCustomer.play();
        playCustomer.src = "media/pause.png";
    }
    else{
        audioCustomer.pause();
        playCustomer.src = "media/play.png";
    }
}

playWhite.onclick = function(){
    if(audioWhite.paused){
        audioWhite.play();
        playWhite.src = "media/pause.png";
    }
    else{
        audioWhite.pause();
        playWhite.src = "media/play.png";
    }
}

// volume cafe
var volumesliderCafe = document.getElementById("volumeslider-4");
var volumesliderCoffee = document.getElementById("volumeslider-5");
var volumesliderCounter = document.getElementById("volumeslider-6");
var volumesliderCat = document.getElementById("volumeslider-7");
var volumesliderCustomer = document.getElementById("volumeslider-8");
var volumesliderWhite = document.getElementById("volumeslider-9");


volumesliderCafe.addEventListener('mousemove', setvolume4);
volumesliderCoffee.addEventListener('mousemove', setvolume5);
volumesliderCounter.addEventListener('mousemove', setvolume6);
volumesliderCat.addEventListener('mousemove', setvolume7);
volumesliderCustomer.addEventListener('mousemove', setvolume8);
volumesliderWhite.addEventListener('mousemove', setvolume9);

function setvolume4(){
    audioCafe.volume = volumesliderCafe.value / 100;
}

function setvolume5(){
    audioCoffee.volume = volumesliderCoffee.value / 100;
}

function setvolume6(){
    audioCounter.volume = volumesliderCounter.value / 100;
}

function setvolume7(){
    audioCat.volume = volumesliderCat.value / 100;
}

function setvolume8(){
    audioCustomer.volume = volumesliderCustomer.value / 100;
}

function setvolume9(){
    audioWhite.volume = volumesliderWhite.value / 100;
}

