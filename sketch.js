let cx, cy;
let radius;
let width = 800;
let height = 600;

function setup() {
	createCanvas(width,height); // make an HTML canvas element width x height pixels
	radius = min(width, height) / 2;
	cx = width / 2;
	cy = height / 2;

}

function draw() {
	background(225);
	textSize(32);
	
    //clock BG
	fill(180, 210, 170);
	ellipse(cx,cy,radius*2,radius*1.4);
    stroke(12,2,138);

  
    //Seconds  
	var sec_var = map(second(), 0, 60, 0, PI*2) - PI/2;
    strokeWeight(1.5);
    line(cx, cy, cx + cos(sec_var) * radius * 0.7, cy + sin(sec_var) * radius * 0.7);
    stroke(100);
    
    //Minutes
    var min_var = map(minute() + norm(second(), 0, 60), 0, 60, 0, PI*2) - PI/2;
    strokeWeight(3);
    line(cx, cy, cx + cos(min_var) * radius * 0.5, cy + sin(min_var) * radius * 0.5);
    stroke(127,0,0);
  
    //Hours
    var hour_var = map(hour() + norm(minute(), 0, 60), 0, 24, 0, PI * 4) - PI/2;
    strokeWeight(4.5);
    line(cx, cy, cx + cos(hour_var) * radius * 0.25, cy + sin(hour_var) * radius * 0.25);
    stroke(12,224,138);
  
  
  
    fill(0);
	text('Name:Mark Wu', 10, 30);
    text('UID:h2930', 10, 60);
	textSize(250);
}