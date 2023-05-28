var x_pos = 40,
  y_pos = 40;
  let p5c;

function isMouseInsideText(message, messageX, messageY, p5) {
  // const messageWidth = p5.textWidth(message);
  // const messageTop = messageY - p5.textAscent();
  // const messageBottom = messageY + p5.textDescent();

  // return (
  //   p5.mouseX > messageX &&
  //   p5.mouseX < messageX + messageWidth 
  //   &&
  //   p5.mouseY > messageTop &&
  //   p5.mouseY < messageBottom
  // );
  return false;
}

var flag = false;
var flagSymbol = false;

export function mouseClicked(p5) {
  // console.log("🚀 ~ file: Text.js:23 ~ mouseClicked ~ p5:", p5)
  if (isMouseInsideText(strT, x_pos, y_pos, p5) && !flag) {
    flag = true;
  }
}

var symbol;

export function mouseReleased() {
  flag = !true;
}

var strT = "";

export function keyTyped(p5) {
  let symb = strT.slice(-1);
  if (symb !== p5.key)
  {
    strT += p5.key;
  }
  return false;
//   console.log("🚀 ~ file: Text.js:38 ~ keyTyped ~ strT:", strT)
}

export function WriteText(p5) {
//   p5.background(126);
p5c = p5;
  if (p5.mouseIsPressed) {
    if (flag) {
      p5.text(strT, p5.mouseX, p5.mouseY);
      x_pos = p5.mouseX;
      y_pos = p5.mouseY;
    }
  } else {
    
    p5.text(strT, x_pos, y_pos);
    // console.log("🚀 ~ file: Text.js:53 ~ WriteText ~ strT:", strT)
  }
}
