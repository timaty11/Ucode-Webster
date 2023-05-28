export function SimpleBrush(p5, color, strokeWidth, graph)
{
    if (p5.mouseIsPressed)
    {
        
        // graph.stroke(color);
        // graph.strokeWeight(strokeWidth);
        p5.stroke(color);
        p5.strokeWeight(strokeWidth);
        // graph.noErase();
        // graph.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
        console.log("kuku")
    }
}

export function eraseBrush(p5, eraseWidth, graph)
{
    if (p5.mouseIsPressed)
    {
        graph.strokeWeight(eraseWidth);
        // p5.strokeWeight(eraseWidth);
        graph.erase();
        graph.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
        // p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
    }
}