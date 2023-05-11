import React from "react";
import Sketch from "react-p5";

let brushCounterLimit = 3;
let brushCounter = 0;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

export function MagicBrushDraw({ imageUrl, brush }) {
    console.log("🚀 ~ file: MagicBrushDraw.jsx:12 ~ MagicBrushDraw ~ brush:", brush)
    let bg;
    let imageBrush;

    const preload = (p5) => {
        // if (brush) {
            imageBrush = p5.loadImage("src\\components\\common\\editor\\tools\\magic-brush\\assets\\star.png");
        // }
        bg = p5.loadImage(imageUrl);
    }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(600, 500).parent(canvasParentRef);
        p5.background(bg);
    }

    const draw = p5 => {
        // if (brush) {
            if (p5.mouseIsPressed) {
                p5.imageMode(p5.CENTER);

                incrementBrushCounter();
                if (brushCounter == 0) {
                    let size = random(10, 50);
                    p5.tint(255, random(155, 255));
                    p5.image(imageBrush, p5.mouseX, p5.mouseY, size, size);
                }
            }
        // }
    }

    return (
        <div className="w-full">
            <Sketch preload={preload} setup={setup} draw={draw} />
        </div>
    )
}

function incrementBrushCounter() {
    brushCounter++;
    if (brushCounter > brushCounterLimit) {
        brushCounter = 0;
    }
}