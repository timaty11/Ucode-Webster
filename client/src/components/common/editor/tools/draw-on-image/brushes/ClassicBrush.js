// function setup() {
    let mX = 0;
    let mY = 0;
    let x = 0;
    let y = 0;
    let ax = 0;
    let ay = 0;
    let spring = 0.08;
    let friction = 0.8;
    // createCanvas( 500, 500 );
    // background( 255 );
//   }
  
export function ClassicBrush(p5) {
    ax += ( mX - x ) * spring;
    ay += ( mY - y ) * spring;
    ax *= friction;
    ay *= friction;
    
    p5.oldX = x;
    p5.oldY = y;
    x += ax;
    y += ay;
    // p5.smooth();
    p5.strokeWeight( p5.abs( ax + ay ) / 3 + 1 );
    p5.line( x, y, p5.oldX, p5.oldY );
  }
  
 export function mousePressed(p5) {
    mX = x = p5.mouseX;
    mY = y = p5.mouseY;
  }
  
export  function mouseDragged(p5) {
    mX = p5.mouseX;
    mY = p5.mouseY;
  }
  