// brushSize simply is the thickness of the brush stroke
let brushSize = 25;
let f = 0.5;
let spring = 0.5;
let friction = 0.5;
let v = 0.5;
let r = 0;
let vx = 0;
let vy = 0;
let splitNum = 10;
let diff = brushSize/8;
export function JapaneseBrush(p5) {
  if(p5.mouseIsPressed) {
    if(!f) {
      f = true;
      p5.x = p5.mouseX;
      p5.y = p5.mouseY;
    }
    vx += ( p5.mouseX - p5.x ) * spring;
    vy += ( p5.mouseY - p5.y ) * spring;
    vx *= friction;
    vy *= friction;

    v += p5.sqrt( vx*vx + vy*vy ) - v;
    v *= 0.6;

    p5.oldR = r;
    r = brushSize - v;

    for( let i = 0; i < splitNum; ++i ) {
      p5.oldX = p5.x;
      p5.oldY = p5.y;
      p5.x += vx / splitNum;
      p5.y += vy / splitNum;
      p5.oldR += ( r - p5.oldR ) / splitNum;
      if(p5.oldR < 1) { p5.oldR = 1; }
      p5.strokeWeight( p5.oldR+diff );  // AMEND: oldR -> oldR+diff
      p5.line( p5.x, p5.y, p5.oldX, p5.oldY );
      p5.strokeWeight( p5.oldR );  // ADD
      p5.line( p5.x+diff*1.5, p5.y+diff*2, p5.oldX+diff*2, p5.oldY+diff*2 );  // ADD
      p5.line( p5.x-diff, p5.y-diff, p5.oldX-diff, p5.oldY-diff );  // ADD
    }

  } else if(f) {
    vx = vy = 0;
    f = false;
  }
}