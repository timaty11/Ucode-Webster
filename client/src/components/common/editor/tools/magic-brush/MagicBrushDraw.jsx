import React, { startTransition, useEffect } from "react";
import Sketch from "react-p5";

let brushCounterLimit = 3;
let brushCounter = 0;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

let generalPath = 'src\\components\\common\\editor\\tools\\magic-brush\\assets\\';

export function MagicBrushDraw({ imageUrl }) {
    let backgroundImage;
    let imageBrush;
    let canvasWidth;
    let canvasHeight;
    let starBlue;
    let bubble;
    let starDust;
    let flare;

    const preload = (p5) => {
        starBlue = p5.loadImage(generalPath + "star.png");
        bubble = p5.loadImage(generalPath + "bubble.png");
        starDust = p5.loadImage(generalPath + "stardust.png");
        flare = p5.loadImage(generalPath + "flare.png");
        imageBrush = starBlue;
        backgroundImage = p5.loadImage(imageUrl);
    }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(600, 500).parent(canvasParentRef);
        p5.background(backgroundImage);
        let bubbleButton = p5.select('#bubbleBrush');
        bubbleButton.mousePressed(changeBrushToBubble);
        let starBlueButton = p5.select('#starBlueBrush');
        starBlueButton.mousePressed(changeBrushToStarBlue);
        let starDustButton = p5.select('#starDustBrush');
        starDustButton.mousePressed(changeBrushToStarDust);
        let flareButton = p5.select('#flareBrush');
        flareButton.mousePressed(changeBrushToFlare);
    }

    function changeBrushToBubble()
    {
        imageBrush = bubble;
    }

    function changeBrushToStarBlue()
    {
        imageBrush = starBlue;
    }

    function changeBrushToStarDust()
    {
        imageBrush = starDust;
    }

    function changeBrushToFlare()
    {
        imageBrush = flare;
    }

    const draw = p5 => {
        if (p5.mouseIsPressed && imageBrush) {
            p5.imageMode(p5.CENTER);

            incrementBrushCounter();
            if (brushCounter == 0) {
                let size = random(10, 50);
                p5.tint(255, random(155, 255));
                p5.image(imageBrush, p5.mouseX, p5.mouseY, size, size);
            }
        }
    }

    const mousePressed = (p5) => {
        console.log("Pressed!");
    }

    function Save()
    {

    }

    return (
        <div className="container w-full flex justify-center items-center">
            <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed} />
            <div className="controls">
                <button
                    onClick={() => {
                        Save();
                    }}
                >Save</button>
            </div>
        </div>
    )
}

function incrementBrushCounter() {
    brushCounter++;
    if (brushCounter > brushCounterLimit) {
        brushCounter = 0;
    }
}