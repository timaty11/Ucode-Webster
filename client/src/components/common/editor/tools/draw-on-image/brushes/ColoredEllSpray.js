export function ColoredEllSpray(p5) {
  if (p5.mouseIsPressed) {
    var count = p5.int(p5.random(5, 30));
    var r = p5.random(5, 50);
    for (var i = 0; i < count; i++) {
      p5.noStroke();
      p5.fill(p5.random(255), p5.random(200, 255), p5.random(100, 255));
      p5.ellipse(
        p5.mouseX + p5.random(-50, 50),
        p5.mouseY + p5.random(-50, 50),
        r
      );
      r *= 0.7;
    }
  }
}
