let hu = 0;
hu = Math.random(255);

export function SprayBrush(p5) {
  p5.colorMode(p5.HSB, 255);
  if (p5.mouseIsPressed)
  {
    sprayPaint(p5);
    hu++;
  }
  
  // set the color and brush style
  // p5.colorMode(p5.HSB, 255);
	
  // p5.stroke(hu%255, 255, 255, 255)
  // // p5.stroke(0, 0, 0, 255);
  // p5.strokeWeight(1);

  // // find the speed of the mouse movement
  // const speed = p5.abs(p5.mouseX - p5.pmouseX) + p5.abs(p5.mouseY - p5.pmouseY);

  // // set minimum radius and spray density of spraypaint brush
  // const minRadius = 10;
  // const sprayDensity = 80;

  // // find radius of the spray paint brush and radius squared
  // const r = speed + minRadius;
  // const rSquared = r * r;

  // // set the number of times we lerp the points in the for loop
  // const lerps = 10;

  // // repeat the random points with lerping
  // for (let i = 0; i < lerps; i++) {
  //   // find the lerped X and Y coordinates
  //   const lerpX = p5.lerp(p5.mouseX, p5.pmouseX, i / lerps);
  //   const lerpY = p5.lerp(p5.mouseY, p5.pmouseY, i / lerps);

  //   // draw a bunch of random points within a circle
  //   for (let j = 0; j < sprayDensity; j++) {
  //     // pick a random position within the circle
  //     const randX = p5.random(-r, r);
  //     const randY = p5.random(-1, 1) * p5.sqrt(rSquared - randX * randX);

  //     // draw the random point
  //     if (p5.mouseIsPressed)
  //     {
  //       p5.point(lerpX + randX, lerpY + randY);
  //       hu++;
  //     }
      
  //   }
  // }
  
}

function sprayPaint(p5) {
	// set the color and brush style
  p5.stroke(hu%255, 255, 255, 255)
  p5.strokeWeight(1)

	// find the speed of the mouse movement
  const speed = p5.abs(p5.mouseX - p5.pmouseX) + p5.abs(p5.mouseY - p5.pmouseY)

	// set minimum radius and spray density of spraypaint brush
	const minRadius = 10;
	const sprayDensity = 80
  
  // find radius of the spray paint brush and radius squared
  const r = speed + minRadius;
  const rSquared = r * r;

	// set the number of times we lerp the points in the for loop
	const lerps = 10

  // repeat the random points with lerping
  for (let i = 0; i < lerps; i++) {
    
    // find the lerped X and Y coordinates
    const lerpX = p5.lerp(p5.mouseX, p5.pmouseX, i / lerps)
    const lerpY = p5.lerp(p5.mouseY, p5.pmouseY, i / lerps)
    
    // draw a bunch of random points within a circle
    for (let j = 0; j < sprayDensity; j++) {

      // pick a random position within the circle
      const randX = p5.random(-r, r)
      const randY = p5.random(-1, 1) * p5.sqrt(rSquared - randX * randX)

      // draw the random point
      p5.point(lerpX + randX, lerpY + randY)
			//point(lerpY + randX, lerpX - randY)  // uncomment for a reflection
    }
  }
}
