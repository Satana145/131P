img = "";

status = "";

//defining an array variable
objects = [];

function preload() {
    img = loadImage("cup.jpg");
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 350, 350);
    fill("#FF0000");
    text("Cup", 30, 45);
    noFill();
    stroke("#FF0000");
    rect(15, 30, 320, 290);
}
