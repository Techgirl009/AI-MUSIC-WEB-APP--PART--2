Levitating="";
Blank_Space="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Blank_Space = loadSound("Blank Space.mp3");
    Levitating = loadSound("levitating.mp3");
}

function draw(){
    image(video,0,0,600,530);
}