
img = "";

status = "";

//defining an array variable
objects = [];

function preload(){
    img = loadImage("laptop.jpg");
}

function setup(){
    canvas = createCanvas( 380 , 380);
    canvas.center();
}

function draw(){
    image(img , 0 , 0 , 380 , 380);
    fill("#FF0000");
    text("Laptop", 15, 15);
    noFill();
    stroke("#FF0000");
    rect(0, 0, 380, 365);
}
