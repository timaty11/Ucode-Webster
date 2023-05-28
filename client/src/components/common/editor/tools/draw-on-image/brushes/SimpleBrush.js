export function SimpleBrush(p5, color, strokeWidth)
{
    if (p5.mouseIsPressed)
    {
        console.log("kuku")
        p5.stroke(color);
        p5.strokeWeight(strokeWidth);
        p5.noErase();
        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
    }
}

export function eraseBrush(p5, eraseWidth)
{
    if (p5.mouseIsPressed)
    {
        p5.strokeWeight(eraseWidth);
        p5.erase();
        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
    }
}