 function preload(){
    
 }

 function setup(){
    canvas = createCanvas(700,700);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
 }

 function draw(){
    stroke(0,255,0);
    fill(0,255,0);
    rect(176,176, 350, 350);

    stroke(255,0,0);
    fill(255,0,0);
    circle(180,180,40);

    stroke(255,0,0)
    fill(255,0,0);
    circle(520,180,40);

    stroke(255,0,0)
    fill(255,0,0);
    circle(520,520,40);

    stroke(255,0,0)
    fill(255,0,0);
    circle(520,180,40);

    stroke(255,0,0)
    fill(255,0,0);
    circle(180,520,40);

    image(video,200,200, 300, 300);
    
    
}