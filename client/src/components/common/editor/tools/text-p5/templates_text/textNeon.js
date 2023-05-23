export function drawText(text, font, color, p5)
{
  textNeon(
    'Coding Party',
    p5.width/2,
    p5.height/2,
    p5.color(332, 58, 91, 100),
    p5
  );
}

function textNeon(glowText, x, y, glowColor, p5){
    glow(p5, glowColor, 400);
    p5.text(glowText, x, y);
    p5.text(glowText, x, y);
    p5.text(glowText, x, y);
    glow(p5, glowColor, 80);
    p5.text(glowText, x, y);
    p5.text(glowText, x, y);
    glow(p5, glowColor, 12);
    p5.text(glowText, x, y);
    p5.text(glowText, x, y);
    p5.text(glowText, x, y);
  }
  
  // function imageNeon(glowImage, x, y, width, height, glowColor){
  //   tint(0, 0, 40, 100);
  //   glow(glowColor, 0);
  //   image(glowImage, x, y, width, height);
  
  //   tint(0, 0, 100, flickering());
  //   glow(glowColor, 160);
  //   image(glowImage, x, y, width, height);
  //   glow(glowColor, 80);
  //   image(glowImage, x, y, width, height);
  //   image(glowImage, x, y, width, height);
  //   glow(glowColor, 12);
  //   image(glowImage, x, y, width, height);
  //   image(glowImage, x, y, width, height);
  
  //   tint(0, 0, 100, 100);
  // }
  
  // function flickering(p5){
  //   p5.offset += 0.08;
  //   let n = p5.noise(p5.offset);
  //   if(n < 0.30) return 0;
  //   else return 100;
  // }
  
  function glow(p5, glowColor, blurriness){
    p5.drawingContext.shadowBlur = blurriness;
    p5.drawingContext.shadowColor = glowColor;
  }