import React, { startTransition, useEffect } from "react";
import Sketch from "react-p5";

let brushCounterLimit = 3;
let brushCounter = 0;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

let generalPath = 'src\\components\\common\\editor\\tools\\magic-brush\\assets\\';

export function MagicBrushDraw({ imageUrl, setCroppedImageFor, onCancel }) {
    console.log("🚀 ~ file: MagicBrushDraw.jsx:14 ~ MagicBrushDraw ~ imageUrl:", imageUrl)
    let backgroundImage;
    let imageBrush;
    let canvasWidth;
    let canvasHeight;
    let starBlue;
    let bubble;
    let starDust;
    let flare;
    var myCanvas;

    const preload = (p5) => {
        starBlue = p5.loadImage(generalPath + "star.png");
        bubble = p5.loadImage(generalPath + "bubble.png");
        starDust = p5.loadImage(generalPath + "stardust.png");
        flare = p5.loadImage(generalPath + "flare.png");
        imageBrush = starBlue;
        backgroundImage = p5.loadImage(imageUrl);
    }

    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(600, 500).parent(canvasParentRef);
        cnv.id('sketch');
        p5.background(backgroundImage);
        let bubbleButton = p5.select('#bubbleBrush');
        bubbleButton.mousePressed(changeBrushToBubble);
        let starBlueButton = p5.select('#starBlueBrush');
        starBlueButton.mousePressed(changeBrushToStarBlue);
        let starDustButton = p5.select('#starDustBrush');
        starDustButton.mousePressed(changeBrushToStarDust);
        let flareButton = p5.select('#flareBrush');
        flareButton.mousePressed(changeBrushToFlare);
        let saveSketchButton = p5.select('#saveSketchButton');
        saveSketchButton.mouseClicked(Save);
        let cancelSketchButton = p5.select('#cancelSketchButton');
        cancelSketchButton.mousePressed(Cancel);

        // myCanvas = p5.select("#sketch");
    }

    function keyPressed(p5) {
        if (p5.keyCode === p5.UP_ARROW) {
            p5.save();
        }
    }

    function changeBrushToBubble() {
        imageBrush = bubble;
    }

    function changeBrushToStarBlue() {
        imageBrush = starBlue;
    }

    function changeBrushToStarDust() {
        imageBrush = starDust;
    }

    function changeBrushToFlare() {
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

    function Save(p5) {
        // p5.save();
        // myCanvas = document.getElementById("#sketch");
        // let jhjh = myCanvas.id;
        // console.log("🚀 ~ file: MagicBrushDraw.jsx:86 ~ Save ~ myCanvas:", myCanvas)
        // var data = jhjh.toDataURL();
        // console.log("🚀 ~ file: MagicBrushDraw.jsx:85 ~ Save ~ data:", data)
        // setCroppedImageFor(data);
        save();
    }

    const Cancel = () => {
        onCancel();
    }

    return (
        <div className="container w-full flex justify-center items-center">
            <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed} keyPressed={keyPressed} />
        </div>
    )
}

function incrementBrushCounter() {
    brushCounter++;
    if (brushCounter > brushCounterLimit) {
        brushCounter = 0;
    }
}