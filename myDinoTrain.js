//board
let board;
let boardWidth = 730;
let boardHeight = 350;
let context;

//dino
let dinoWidth = 96;
let dinoHeight = 90;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight
}

//cactus
let cactusArray = [];

let cactus1Width = 75;
let cactus2Width = 85;
let cactus3Width = 75;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

//physics
let velocityX = -10; //cactus moving left speed
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;

window.onload = function() {
    board = document.getElementById("board3");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //draw initial dinosaur
    // context.fillStyle="green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    dinoImg = new Image();
    dinoImg.src = "media/NEW-UI/jump-latte_3x.png";
    dinoImg.onload = function() {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }

    cactus1Img = new Image();
    cactus1Img.src = "media/img/game_item_6_3x.png";

    cactus2Img = new Image();
    cactus2Img.src = "media/img/New icon/game_item_card.png";

    cactus3Img = new Image();
    cactus3Img.src = "media/img/game_item_bird.png";

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000); //1000 milliseconds = 1 second
    document.addEventListener("keydown", moveDino);
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //dino
    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY); //apply gravity to current dino.y, making sure it doesn't exceed the ground
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    //cactus
    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        cactus.x += velocityX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);

        if (detectCollision(dino, cactus)) {
            gameOver = true;
            dinoImg.src = "media/NEW-UI/dead-latte_3x.png";
            dinoImg.onload = function() {
                context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
            }
        }
    }

    //score
    context.fillStyle="black";
    context.font="20px courier";
    score++;
    context.fillText(score, 5, 20);
}

// function moveDino(e) {
//     if (gameOver) {
//         return;
//     }

//     if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {
//         //jump
//         velocityY = -10;
//     }
//     else if (e.code == "ArrowDown" && dino.y == dinoY) {
//         //duck
//     }

// }

// function placeCactus() {
//     if (gameOver) {
//         return;
//     }

//     //place cactus
//     let cactus = {
//         img : null,
//         x : cactusX,
//         y : cactusY,
//         width : null,
//         height: cactusHeight
//     }

//     let placeCactusChance = Math.random(); //0 - 0.9999...

//     if (placeCactusChance > .90) { //10% you get cactus3
//         cactus.img = cactus3Img;
//         cactus.width = cactus3Width;
//         cactusArray.push(cactus);
//     }
//     else if (placeCactusChance > .70) { //30% you get cactus2
//         cactus.img = cactus2Img;
//         cactus.width = cactus2Width;
//         cactusArray.push(cactus);
//     }
//     else if (placeCactusChance > .50) { //50% you get cactus1
//         cactus.img = cactus1Img;
//         cactus.width = cactus1Width;
//         cactusArray.push(cactus);
//     }

//     if (cactusArray.length > 5) {
//         cactusArray.shift(); //remove the first element from the array so that the array doesn't constantly grow
//     }
// }

// function detectCollision(a, b) {
//     return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
//            a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
//            a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
//            a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
// }

const jumpSounds = [
    new Audio('media/sound/bus_bi.wav'),
    new Audio('media/sound/bus_bus4.wav'),
    new Audio('media/sound/bus_easycard.wav'),
    new Audio('media/sound/new_bird_train/bird1.mp3'),
    new Audio('media/sound/new_bird_train/train_music.mp3'),
    new Audio('media/sound/new_bird_train/train.mp3')
];
  
function moveDino(e) {
    if (gameOver) {
        return;
    }

    if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {
        //jump
        velocityY = -10;
        const randomIndex = Math.floor(Math.random() * jumpSounds.length);
        const jumpSound = jumpSounds[randomIndex];
        jumpSound.currentTime = 0; // 重置音效播放位置
        jumpSound.play(); // 播放音效

    }
    else if (e.code == "ArrowDown" && dino.y == dinoY) {
        //duck
    }

}

function placeCactus() {
    if (gameOver) {
        return;
    }

    //place cactus
    let cactus = {
        img : null,
        x : cactusX,
        y : cactusY,
        width : null,
        height: cactusHeight
    }

    let placeCactusChance = Math.random(); //0 - 0.9999...

    if (placeCactusChance > .90) { //10% you get cactus3
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .70) { //30% you get cactus2
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .50) { //50% you get cactus1
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus);
    }

    if (cactusArray.length > 5) {
        cactusArray.shift(); //remove the first element from the array so that the array doesn't constantly grow
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}

//untuk loncat pake spacebar
var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.code] = true;
        switch(e.code){
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight":
            case "Space": e.preventDefault(); break;
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.code] = false;
    },
false);
