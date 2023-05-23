import React, { startTransition, useEffect } from "react";
import Sketch from "react-p5";
import { JapaneseBrush } from "../draw-on-image/brushes/JapaneseBrush";
import { Ellipses } from "../draw-on-image/brushes/EllipseBrush";
import { ColoredEllSpray } from "../draw-on-image/brushes/ColoredEllSpray";
import { drawText } from "../text-p5/templates_text/textNeon";
import { OpenCloseMagicBrush } from './OpenCloseMagicBrush.js';
import { OpenCloseAdvanced } from './OpenCloseAdvanced.js';
import '../text-markup/text.css';

let brushCounterLimit = 3;
let brushCounter = 0;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

let OpenCloseMagicBrushFlag;

let generalPath = 'src\\components\\common\\editor\\tools\\magic-brush\\assets\\';

export function MagicBrushDraw({ imageUrl, setCroppedImageFor, onCancel }) {
    let backgroundImage;
    let imageBrush;
    let inkBrush;
    let canvasWidth;
    let canvasHeight;
    let starBlue;
    let bubble;
    let starDust;
    let flare;
    var myCanvas;
    let imageBrushFlag = false;
    let inkBrushFlag = false;
    let InkIndex = 1;
    let font;
    let water_droplets;
    let cloud;
    let stamp;
    let topLayer;

    const preload = (p5) => {
        starBlue = p5.loadImage(generalPath + "star.png");
        bubble = p5.loadImage(generalPath + "bubble.png");
        starDust = p5.loadImage(generalPath + "stardust.png");
        flare = p5.loadImage(generalPath + "flare.png");
        water_droplets = p5.loadImage(generalPath + "water_droplets.png");
        cloud = p5.loadImage(generalPath + "cloud.png");

        imageBrush = starBlue;
        backgroundImage = p5.loadImage(imageUrl);
        font = p5.loadFont('src\\components\\common\\editor\\tools\\text-p5\\templates_text\\AlexBrush-Regular.ttf');
    }
    let ctx;
    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(backgroundImage.width, backgroundImage.height).parent(canvasParentRef);
        ctx = cnv.drawingContext;
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

        let waterDropButton = p5.select('#waterDropletsBrush');
        waterDropButton.mousePressed(changeBrushToWaterDrop);
        let cloudButton = p5.select('#cloudBrush');
        cloudButton.mousePressed(changeBrushToCloud);


        let saveSketchButton = p5.select('#saveSketchButton');
        saveSketchButton.mouseClicked(Save);
        let cancelSketchButton = p5.select('#cancelSketchButton');
        cancelSketchButton.mousePressed(Cancel);

        let japInk = p5.select('#jap-ink-advanced');
        let ellipses = p5.select('#ellipses-advanced');
        let ballBrush = p5.select('#balls-advanced');

        ballBrush.mousePressed(() => { InkIndex = 3 });
        japInk.mousePressed(() => { InkIndex = 1 });
        ellipses.mousePressed(() => { InkIndex = 2 });

        let mgBrush = p5.select('#magic-brush-options');
        mgBrush.mouseClicked(OpenCloseMagicBrush);
        let advBrush = p5.select('#advanced-brush-options');
        advBrush.mouseClicked(OpenCloseAdvanced);
        // p5.colorMode(p5.HSB, 360, 100, 100, 100);
    }

    function SetupScratch(p5) {
        topLayer = p5.createGraphics(p5.width, p5.height);

        topLayer.background(200);
        topLayer.textSize(50);
        topLayer.textAlign(p5.CENTER);
        topLayer.text("SCRATCH ME", p5.width / 2, p5.height / 2);

        topLayer.imageMode(p5.CENTER);
        topLayer.strokeWeight(40);
        topLayer.blendMode(p5.REMOVE);
    }

    function GetInk(p5, choice) {
        switch (choice) {
            case 1:
                JapaneseBrush(p5);
                break;

            case 2:
                Ellipses(p5);
                break;

            case 3:
                ColoredEllSpray(p5);
                break;
        }
    }

    function keyPressed(p5) {
        if (p5.keyCode === p5.UP_ARROW) {
            p5.save();
        }
    }

    function changeBrushToBubble() {
        imageBrush = bubble;
    }

    function changeBrushToWaterDrop() {
        imageBrush = water_droplets;
    }

    function changeBrushToCloud() {
        imageBrush = cloud;
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

    function drawGradient(x, y, p5) {
        var radius = p5.dim / 2;
        var h = 360;
        var fg = 255;
        for (var r = radius; r > 0; --r) {
            if (r >= 216) {
                p5.fill(255, fg--, fg--);
            }
            else {
                p5.fill(17, fg -= 5, fg -= 5);
            }

            p5.ellipse(x, y, r, r);
            h = (h + 1) % 360;
        }
    }

    function radialGradient(x, y, w, h, inner, outer, p5) {
        // p5.ColoredEllSpraynoStroke();
        for (let i = Math.max(w, h); i > 0; i--) {
            const step = i / Math.max(w, h);
            const colour = p5.lerpColor(inner, outer, step);
            p5.fill(colour);
            p5.ellipse(x, y, step * w, step * h);
        }
    }
    const draw = p5 => {
        if (p5.mouseIsPressed && imageBrush && imageBrushFlag) {
            p5.imageMode(p5.CENTER);

            incrementBrushCounter();
            if (brushCounter == 0) {
                let size = random(10, 50);
                p5.tint(255, random(155, 255));
                p5.image(imageBrush, p5.mouseX, p5.mouseY, size, size);
            }
        }

        if (inkBrushFlag) {
            GetInk(p5, InkIndex);
        }

    }

    function OpenCloseAdvanced() {
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        obj3.style.display = 'none';
        obj2.style.display = 'block';
        imageBrushFlag = false;
        inkBrushFlag = true;
    }

    function OpenCloseMagicBrush() {
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        obj3.style.display = 'block';
        obj2.style.display = 'none';
        imageBrushFlag = true;
        inkBrushFlag = false;
    }

    const mousePressed = (p5) => {
        console.log("Pressed!");
    }

    function Save(p5) {
        p5.save();
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

