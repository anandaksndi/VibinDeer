// modal pop up
let popup = document.getElementById("popup")

// ----------------------------------------------------------
// cafe
let popupCafe = document.getElementById("popup-cafe")

// //text appear
// let revealText = document.getElementById("reveal")

// function revealText(){
//     popup.classList.add("open-p2-reveal")
// }
// //

function openPopup(){
    popup.classList.add("open-popup")
}

function closePopup(){
    popup.classList.remove("open-popup")
}

// ----------------------------------------------------------
// cafe popup
function openPopupCafe(){
    popupCafe.classList.add("open-popup-cafe")
}

function closePopupCafe(){
    popupCafe.classList.remove("open-popup-cafe")
}
// ----------------------------------------------------------


//modal-text
let popupText = document.getElementById("popup-text")
let popupTextCafe = document.getElementById("popup-text-cafe")
let popupTextBfast = document.getElementById("popup-text-bfast")

function openPopup1(){
    popupText.classList.add("open-popup-text")
}

function closePopup1(){
    popupText.classList.remove("open-popup-text")
}

function openPopup2(){
    popupTextCafe.classList.add("open-popup-text-cafe")
}

function closePopup2(){
    popupTextCafe.classList.remove("open-popup-text-cafe")
}

function openPopup3(){
    popupTextBfast.classList.add("open-popup-text-bfast")
}

function closePopup3(){
    popupTextBfast.classList.remove("open-popup-text-bfast")
}

// song play
var audioTrain = document.getElementById("musicTrain");
var play = document.getElementById("play-icon");
// train
var audioTrainSound = document.getElementById("musicTrain-sound");
var playTrain = document.getElementById("play-icon-3");
// people 
var audioTrainPeople = document.getElementById("musicTrain-people");
var playPeople = document.getElementById("play-icon-1");
// white-noise
var audioTrainWhite = document.getElementById("musicTrain-whitenoise");
var playWhite = document.getElementById("play-icon-2");


play.onclick = function(){
    if(audioTrain.paused){
        audioTrain.play();
        play.src = "media/pause.png";
    }
    else{
        audioTrain.pause();
        play.src = "media/play.png";
    }
}

playTrain.onclick = function(){
    if(audioTrainSound.paused){
        audioTrainSound.play();
        playTrain.src = "media/pause.png";
    }
    else{
        audioTrainSound.pause();
        playTrain.src = "media/play.png";
    }
}

// loop train sound
audioTrainSound.loop = true

playPeople.onclick = function(){
    if(audioTrainPeople.paused){
        audioTrainPeople.play();
        playPeople.src = "media/pause.png";
    }
    else{
        audioTrainPeople.pause();
        playPeople.src = "media/play.png";
    }
}

playWhite.onclick = function(){
    if(audioTrainWhite.paused){
        audioTrainWhite.play();
        playWhite.src = "media/pause.png";
    }
    else{
        audioTrainWhite.pause();
        playWhite.src = "media/play.png";
    }
}

// playCafe.onclick = function(){
//     if(audioCafe.paused){
//         audioCafe.play();
//         playCafe.src = "media/pause.png";
//     }
//     else{
//         audioCafe.pause();
//         playCafe.src = "media/play.png";
//     }
// }



// volume setting
var volumeslider = document.getElementById("volumeslider");
// volume people
var volumesliderPeople = document.getElementById("volumeslider-1");
// volume white noise
var volumesliderWhite = document.getElementById("volumeslider-2");

volumeslider.addEventListener('mousemove', setvolume);
volumesliderPeople.addEventListener('mousemove', setvolume1);
volumesliderWhite.addEventListener('mousemove', setvolume2);

function setvolume(){
    audioTrain.volume = volumeslider.value / 100;
}

function setvolume1(){
    audioTrainPeople.volume = volumesliderPeople.value / 100;
}

function setvolume2(){
    audioTrainWhite.volume = volumesliderWhite.value / 100;
}

//text appear on click - change text

function changeText() {
    var id = document.getElementsByName("button")[0].id;
    if (id==1){
        document.getElementById("changeText").innerHTML = "我平常都在這家早餐店裡";
        document.getElementsByName("button")[0].id=2;
    }
    else if (id==2){
        document.getElementById("changeText").innerHTML = "因為這裡在我讀的學校附近";
        document.getElementsByName("button")[0].id=3;
    }
    else if (id==3){
        document.getElementById("changeText").innerHTML = "又來了，那隻胖鹿";
        document.getElementsByName("button")[0].id=4;
    }
    else if (id==4){
        document.getElementById("changeText").innerHTML = "我蠻喜歡那傢伙的";
        document.getElementsByName("button")[0].id=5;
    }
    else if (id==5){
        document.getElementById("changeText").innerHTML = "因為他很笨，偷吃他的蛋餅也不會被發現";
        document.getElementsByName("button")[0].id=6;
    }
    else if (id==6){
        document.getElementById("changeText").innerHTML = "什麼? 對，我是鳥還吃蛋";
        document.getElementsByName("button")[0].id=7;
    }
    else if (id==7){
        document.getElementById("changeText").innerHTML = "我以前上學的時候最喜歡吃蛋餅了";
        document.getElementsByName("button")[0].id=8;
    }
    else if (id==8){
        document.getElementById("changeText").innerHTML = "老闆娘每天都喊我帥哥";
        document.getElementsByName("button")[0].id=9;
    }
    else if (id==9){
        document.getElementById("changeText").innerHTML = "現在當了八哥";
        document.getElementsByName("button")[0].id=10;
    }
    else if (id==10){
        document.getElementById("changeText").innerHTML = "那個滋滋叫的煎板也變得蠻可怕的";
        document.getElementsByName("button")[0].id=11;
    }
    else if (id==11){
        document.getElementById("changeText").innerHTML = "過去就熟了";
        document.getElementsByName("button")[0].id=12;
    }
    else if (id==12){
        document.getElementById("changeText").innerHTML = "嘖嘖，我可不想加菜單";
        document.getElementsByName("button")[0].id=13;
    }
    else if (id==13){
        document.getElementById("changeText").innerHTML = "比起鳥肉我比較喜歡雞肉";
        document.getElementsByName("button")[0].id=14;
    }
    else if (id==14){
        document.getElementById("changeText").innerHTML = "但總匯口味更好";
        document.getElementsByName("button")[0].id=15;
    }
    else if (id==15){
        document.getElementById("changeText").innerHTML = "鳥生在世，總匯三明治";
        document.getElementsByName("button")[0].id=16;
    }
    else if (id==16){
        document.getElementById("changeText").innerHTML = "啊，懷念啊，小時候我媽總是給我買總匯三明治……";
        document.getElementsByName("button")[0].id=17;
    }
    else if (id==17){
        document.getElementById("changeText").innerHTML = "等等，胖鹿手上拿的是……";
        document.getElementsByName("button")[0].id=18;
    }
    else if (id==18){
        document.getElementById("changeText").innerHTML = "…";
        document.getElementsByName("button")[0].id=19;
    }
    else if (id==19){
        document.getElementById("changeText").innerHTML = "……";
        document.getElementsByName("button")[0].id=20;
    }
    else if (id==20){
        document.getElementById("changeText").innerHTML = "『傳說中，有一隻八哥王子，被魔女下了詛咒，』";
        document.getElementsByName("button")[0].id=21;
    }
    else if (id==21){
        document.getElementById("changeText").innerHTML = "『只要吃到總匯三明治，就能變回人類。』";
        document.getElementsByName("button")[0].id=22;
    }
    else if (id==22){
        document.getElementById("changeText").innerHTML = "(滴口水)";
        document.getElementsByName("button")[0].id=23;
    }
    else if (id==23){
        document.getElementById("changeText").innerHTML = "End.";
        document.getElementsByName("button")[0].id=24;
    }
    else if(id==24){
        location.href = '#pages';
    }
}


//cafe text story
function changeTextCafe() {
    var id = document.getElementsByName("button1")[0].id;
    if (id==1){
        document.getElementById("changeTextCafe").innerHTML = "「喵喵喵！喵喵喵喵。」";
        document.getElementsByName("button1")[0].id=2;
        document.getElementById("changeTextCafe").style.color = "green";
    }
    else if (id==2){
        document.getElementById("changeTextCafe").innerHTML = "「喵喵。」";
        document.getElementsByName("button1")[0].id=3;
        document.getElementById("changeTextCafe").style.color = "#652A42";
    }
    else if (id==3){
        document.getElementById("changeTextCafe").innerHTML = "「喵喵喵喵喵……」";
        document.getElementsByName("button1")[0].id=4;
        document.getElementById("changeTextCafe").style.color = "green";
    }
    else if (id==4){
        document.getElementById("changeTextCafe").innerHTML = "「喵喵喵喵喵喵喵喵！」";
        document.getElementsByName("button1")[0].id=5;
        document.getElementById("changeTextCafe").style.color = "#652A42";
    }
    else if (id==5){
        document.getElementById("changeTextCafe").innerHTML = "「喵喵，喵喵喵喵，喵喵。」";
        document.getElementsByName("button1")[0].id=6;
        document.getElementById("changeTextCafe").style.color = "green";
    }
    else if (id==6){
        document.getElementById("changeTextCafe").innerHTML = "「喵……」";
        document.getElementsByName("button1")[0].id=7;
        document.getElementById("changeTextCafe").style.color = "#652A42";
    }
    else if (id==7){
        document.getElementById("changeTextCafe").innerHTML = "「喵喵喵喵喵喵喵喵喵喵喵！喵喵喵喵喵喵喵喵喵喵！喵喵喵喵喵喵喵喵喵！喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵！喵喵喵！喵！」 ";
        document.getElementsByName("button1")[0].id=8;
        document.getElementById("changeTextCafe").style.color = "green";
    }
    else if (id==8){
        document.getElementById("changeTextCafe").innerHTML = "「喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵。」";
        document.getElementsByName("button1")[0].id=9;
        document.getElementById("changeTextCafe").style.color = "#652A42";
    }
    else if (id==9){
        document.getElementById("changeTextCafe").innerHTML = "「喵……」";
        document.getElementsByName("button1")[0].id=10;
        document.getElementById("changeTextCafe").style.color = "green";
    }
    else if (id==10){
        document.getElementById("changeTextCafe").innerHTML = "「喵……」";
        document.getElementsByName("button1")[0].id=11;
        document.getElementById("changeTextCafe").style.color = "#652A42";
    }
    else if (id==11){
        document.getElementById("changeTextCafe").innerHTML = "「欸，不要吵架，不要吵架！」";
        document.getElementsByName("button1")[0].id=12;
        document.getElementById("changeTextCafe").style.color = "#5d5d5d";
    }
    else if (id==12){
        document.getElementById("changeTextCafe").innerHTML = "「客人來了啦。」";
        document.getElementsByName("button1")[0].id=13;
        document.getElementById("changeTextCafe").style.color = "#5d5d5d";
    }
    else if (id==13){
        document.getElementById("changeTextCafe").innerHTML = "「……」";
        document.getElementsByName("button1")[0].id=14;
        document.getElementById("changeTextCafe").style.color = "green"
    }
    else if (id==14){
        document.getElementById("changeTextCafe").innerHTML = "「……」";
        document.getElementsByName("button1")[0].id=15;
        document.getElementById("changeTextCafe").style.color = "#652A42";
    }
    else if (id==15){
        document.getElementById("changeTextCafe").innerHTML = "…………";
        document.getElementsByName("button1")[0].id=16;
        document.getElementById("changeTextCafe").style.color = "green"
    }
    else if (id==16){
        document.getElementById("changeTextCafe").innerHTML = "…………";
        document.getElementsByName("button1")[0].id=17;
        document.getElementById("changeTextCafe").style.color = "#652A42";
    }
    else if (id==17){
        document.getElementById("changeTextCafe").innerHTML = "「這裡的貓咪很安靜耶。」";
        document.getElementsByName("button1")[0].id=18;
        document.getElementById("changeTextCafe").style.color = "#5d5d5d";
    }
    else if (id==18){
        document.getElementById("changeTextCafe").innerHTML = "「對，它們比較寡言。」";
        document.getElementsByName("button1")[0].id=19;
        document.getElementById("changeTextCafe").style.color = "#5d5d5d";
    }
    else if (id==19){
        document.getElementById("changeTextCafe").innerHTML = "「「喵——」」";
        document.getElementsByName("button1")[0].id=20;
        document.getElementById("changeTextCafe").style.color = "green"
    }
    else if(id==20){
        location.href = '#pages';
    }
}

//train text story
function changeTextTrain() {
    var id = document.getElementsByName("button2")[0].id;
    if (id==1){
        document.getElementById("changeTextTrain").innerHTML = "「阿嬤掰掰！」";
        document.getElementsByName("button2")[0].id=2;
        document.getElementById("changeTextTrain").style.color = "#B59410";
    }
    else if (id==2){
        document.getElementById("changeTextTrain").innerHTML = "「胖鹿鹿，車廂外面聽不到啦。」";
        document.getElementsByName("button2")[0].id=3;
        document.getElementById("changeTextTrain").style.color = "#8B0000";
    }
    else if (id==3){
        document.getElementById("changeTextTrain").innerHTML = "「怎麼會！外面的聲音一清二楚耶！」";
        document.getElementsByName("button2")[0].id=4;
        document.getElementById("changeTextTrain").style.color = "#B59410";
    }
    else if (id==4){
        document.getElementById("changeTextTrain").innerHTML = "「那個打電話的人在念他朋友，火車都來了還沒下床。」";
        document.getElementsByName("button2")[0].id=5;
    }
    else if (id==5){
        document.getElementById("changeTextTrain").innerHTML = "「那邊的婆婆說他孫子過完年，長胖了五公斤真可愛！」";
        document.getElementsByName("button2")[0].id=6;
    }
    else if (id==6){
        document.getElementById("changeTextTrain").innerHTML = "「那邊的弟弟跟他媽媽說他哥哥叫他說他想跟哥哥一起吃冰淇淋讓媽媽買給他們。";
        document.getElementsByName("button2")[0].id=7;
    }
    else if (id==7){
        document.getElementById("changeTextTrain").innerHTML = "「你耳朵真好，不過最後那個是怎樣……」 ";
        document.getElementsByName("button2")[0].id=8;
        document.getElementById("changeTextTrain").style.color = "#8B0000";
    }
    else if (id==8){
        document.getElementById("changeTextTrain").innerHTML = "「噓！」";
        document.getElementsByName("button2")[0].id=9;
        document.getElementById("changeTextTrain").style.color = "#B59410";
    }
    else if (id==9){
        document.getElementById("changeTextTrain").innerHTML = "「阿嬤有話要說！」";
        document.getElementsByName("button2")[0].id=10;
    }
    else if (id==10){
        document.getElementById("changeTextTrain").innerHTML = "「阿嬤說……」";
        document.getElementsByName("button2")[0].id=11;
    }
    else if (id==11){
        document.getElementById("changeTextTrain").innerHTML = "「去台北……」";
        document.getElementsByName("button2")[0].id=12;
    }
    else if (id==12){
        document.getElementById("changeTextTrain").innerHTML = "「要記得……」";
        document.getElementsByName("button2")[0].id=13;
    }
    else if (id==13){
        document.getElementById("changeTextTrain").innerHTML = "「每餐吃滿三菜三碗飯兩肉一湯一甜點，沒吃飽回來要打屁屁……」";
        document.getElementsByName("button2")[0].id=14;
    }
    else if (id==14){
        document.getElementById("changeTextTrain").innerHTML = "「哦……哦……」";
        document.getElementsByName("button2")[0].id=15;
        document.getElementById("changeTextTrain").style.color = "#8B0000";
    }
    else if (id==15){
        document.getElementById("changeTextTrain").innerHTML = "「更重要的是……」";
        document.getElementsByName("button2")[0].id=16;
        document.getElementById("changeTextTrain").style.color = "#B59410";
    }
    else if (id==16){
        document.getElementById("changeTextTrain").innerHTML = "「阿嬤說……」";
        document.getElementsByName("button2")[0].id=17;
    }
    else if (id==17){
        document.getElementById("changeTextTrain").innerHTML = "『車門——要關了——』";
        document.getElementsByName("button2")[0].id=18;
        document.getElementById("changeTextTrain").style.color = "#B59410";
    }
    else if (id==18){
        document.getElementById("changeTextTrain").innerHTML = "「啊……聲音被蓋過去……」";
        document.getElementsByName("button2")[0].id=19;
        document.getElementById("changeTextTrain").style.color = "#8B0000";
    }
    else if (id==19){
        document.getElementById("changeTextTrain").innerHTML = "「要玩得開心！」";
        document.getElementsByName("button2")[0].id=20;
        document.getElementById("changeTextTrain").style.color = "#B59410"
    }
    else if (id==20){
        document.getElementById("changeTextTrain").innerHTML = "「你耳朵真好啊。」";
        document.getElementsByName("button2")[0].id=21;
        document.getElementById("changeTextTrain").style.color = "#8B0000"
    }
    else if (id==21){
        document.getElementById("changeTextTrain").innerHTML = "匡噹匡噹……";
        document.getElementsByName("button2")[0].id=22;
        document.getElementById("changeTextTrain").style.color = "#652A42";
    }
    else if (id==22){
        document.getElementById("changeTextTrain").innerHTML = "車軌與碎石的聲音";
        document.getElementsByName("button2")[0].id=23;
    }
    else if (id==23){
        document.getElementById("changeTextTrain").innerHTML = "蓋不過溫暖的叮囑";
        document.getElementsByName("button2")[0].id=24;
    }
    else if (id==24){
        document.getElementById("changeTextTrain").innerHTML = "旅途愉快。";
        document.getElementsByName("button2")[0].id=25;
    }
    else if(id==25){
        location.href = '#pages';
    }
}


