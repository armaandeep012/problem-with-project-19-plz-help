var boy, boyIMG, boyGroup;
var girl, girlIMG, girlGroup;
var menu, menuIMG, menuGroup, menuSound;
var play, playGroup;
var exit, exitGroup;
var title, titleIMG, titleG;

var SERVE = 1
var PLAY = 2;
var END = 0;
var gameState = 1;

function preload() {
    boyIMG = loadAnimation("boy0.png", "boy1.png", "boy2.png", "boy3.png", "boy4.png", "boy5.png", "boy6.png");
    girlIMG = loadAnimation("girl0.png", "girl1.png", "girl2.png", "girl3.png", "girl4.png", "girl5.png", "girl6.png", "girl7.png");
    menuIMG = loadAnimation("forest.gif");
    titleIMG = loadImage("dark-forest.png");
    menuSound = loadSound("MAINSOUND.mp3");
}

function setup() {
    createCanvas(1000, 600);

    titleG = new Group();
    exitGroup = new Group();
    playGroup = new Group();
    menuGroup = new Group();

    if (gameState === SERVE) {

        menuSound.play();

        menu = createSprite(480, 270);
        menu.addAnimation("menu", menuIMG);
        menu.scale = 2;
        menuGroup.add(menu);

        play = createButton("PLAY");
        play.position(370, 230);
        play.size(190, 80);
        play.mousePressed(startGame);

        exit = createButton("EXIT");
        exit.position(370, 330);
        exit.size(190, 80);
        exit.mousePressed(menuDestroy);

        title = createSprite(460, 80);
        titleG.add(title);
        title.addImage(titleIMG);
        title.scale = 1;

    }

}

function draw() {


    drawSprites();
}

function startGame(){
    title.visible = false;
    menu.visible = false;
    play.visible = false;
    exit.visible = false;
}

function menuDestroy(){
    title.visible = false;
    menu.visible = false;
    play.visible = false;
    exit.visible = false;
}