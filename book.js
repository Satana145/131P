img = "";

status = "";

//defining an array variable
objects = [];

function preload() {
    img = loadImage("books.jpg");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 380, 380);

    fill("#FF0000");
    text("Book", 30, 60);
    noFill();
    stroke("#FF0000");
    rect(15, 45, 110, 300);

    fill("#FF0000");
    text("Book", 150, 60);
    noFill();
    stroke("#FF0000");
    rect(135, 45, 110, 300);

    fill("#FF0000");
    text("Book", 270, 60);
    noFill();
    stroke("#FF0000");
    rect(255, 45, 110, 300);
}
