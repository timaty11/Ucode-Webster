var mode = 1;

function mousePressed() {
  mode++;
  if (mode > 3) {
    mode = 1;
  }
}

export function Ellipses(p5) {
  if (p5.mouseIsPressed) {
    var delta = p5.dist(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
    p5.blendMode(p5.SCREEN);
    for (var i = 0; i < 10; i++) {
      p5.colorMode(p5.HSB);
      p5.colorH = p5.map(p5.mouseX, 0, p5.width, 260, 360);
      p5.colorS = p5.map(p5.mouseY, 0, p5.height, 30, 60);
      p5.fill(p5.colorH, p5.colorS, 180);
      p5.ellipse(
        p5.mouseX + p5.random(-delta / 2, delta / 2),
        p5.mouseY + p5.random(-delta / 2, delta / 2),
        p5.random(-delta / 2, delta / 2)
      );
    }
  }

  // }
  // else if (mode==2){
  // 	for(var i=0;i<10;i++){
  // 		colorMode(HSB)
  // 		colorH = map(mouseX,0,width,260,360)
  // 		colorS = map(mouseY,0,height,30,60)
  // 		fill(colorH/10,colorS,180)
  // 		ellipse(mouseX+random(-delta/2,delta/2),mouseY+random(-delta/2,delta/2),random(-delta/2,delta/2))
  // 	}
  // }
  // else {
  // 	for(var i=0;i<10;i++){
  // 		colorMode(HSB)
  // 		colorH = map(mouseX,0,width,260,360)
  // 		colorS = map(mouseY,0,height,30,60)
  // 		fill(colorH/5,colorS,180)
  // 		ellipse(mouseX+random(-delta/2,delta/2),mouseY+random(-delta/2,delta/2),random(-delta/2,delta/2))
  // 	}
  // }
}
