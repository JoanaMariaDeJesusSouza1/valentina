var fogo, agua;
var fogoImg, aguaImg;
var aguaD, fogoD;
var aguaE, fogoE;
var diamanteBlue, diamanteRed;
var diamanteBlueImg, diamanteRedImg;
var bg;
var parede1,parede2,parede3,parede4,parede5,parede6,parede7;
var parede8,parede9,parede10;


function preload() {
	fogoImg = loadImage("./va/fogo_frente.png");
	aguaImg = loadImage("./va/agua_frente.png");
	aguaD = loadImage("./va/agua_direita.png");
	fogoD = loadAnimation("./va/fogo_direita.png", "./va/fogo_d2.png");
	aguaE = loadImage("./va/agua_esquerda.png");
	fogoE = loadAnimation("./va/fogo_esquerda.png", "./va/fogo_esquerda2.png");
	diamanteBlueImg = loadImage("./va/diamante_azul.png");
	diamanteRedImg = loadImage("./va/diamante_red.png");
	bg = loadImage("./va/images.jpg");



}

function setup() {
	createCanvas(windowWidth, windowHeight);


	fogo = createSprite(80,1125,20,20);
	fogo.addImage("frente",fogoImg);

	agua = createSprite(2620,1144,20,20);
	agua.addImage("frente",aguaImg);

	
	parede1 = createSprite(width/2,1226,width,20);
	parede2 = createSprite(width/2,1226,width,20);
	parede3 = createSprite(width/2,1226,width,20);
	parede4 = createSprite(width/2,1226,width,20);
	parede5 = createSprite(width/2,1226,width,20);
	parede6 = createSprite(width/2,1226,width,20);
	parede7 = createSprite(width/2,1226,width,20);
	parede8 = createSprite(width/2,1226,width,20);
	parede9 = createSprite(width/2,1226,width,20);
	parede10 = createSprite(width/2,1226,width,20);
	


}


function draw() {
	rectMode(CENTER);
	background(0);
	image(bg, 0, 0, width, height);






	movimentoFogo();
	movimentoAgua();

	fogo.velocityY+=0.5;
	agua.velocityY+=0.5;

	fogo.collide(parede1);
	agua.collide(parede1);

	//coordenadas do mouse na tela
	fill("red")
	textSize(50)
	text("X: " + mouseX + "/ Y: " + mouseY, mouseX, mouseY);
	drawSprites();

}

function movimentoFogo(){
	if (keyIsDown(UP_ARROW)) {
		fogo.y-=3
	}

	if (keyIsDown(DOWN_ARROW)) {
		fogo.y+=3
	}

	if (keyIsDown(LEFT_ARROW)) {
		fogo.x-=3
	}

	if (keyIsDown(RIGHT_ARROW)) {
		fogo.x+=3
	}

	if (keyDown("space")) {
		fogo.velocityY=-8
	}
	
	

}


function movimentoAgua(){
	if (keyDown("w")) {
		agua.y-=3
	}

	if (keyDown("s")) {
		agua.y+=3
	}

	if (keyDown("a")) {
		agua.x-=3
	}

	if (keyDown("d")) {
		agua.x+=3
	}

	if (keyDown("x")) {
		agua.velocityY=-8
	}

}
