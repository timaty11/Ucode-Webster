import React, { startTransition, useEffect, useState } from "react";
import Sketch from "react-p5";
import { JapaneseBrush } from "../draw-on-image/brushes/JapaneseBrush";
import { Ellipses } from "../draw-on-image/brushes/EllipseBrush";
import { ColoredEllSpray } from "../draw-on-image/brushes/ColoredEllSpray";
import { drawText } from "../text-p5/templates_text/textNeon";
import { OpenCloseMagicBrush } from './OpenCloseMagicBrush.js';
import { OpenCloseAdvanced } from './OpenCloseAdvanced.js';
import '../text-markup/text.css';
import axios from "axios";

let brushCounterLimit = 3;
let brushCounter = 0;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

let OpenCloseMagicBrushFlag;

let generalPath = 'src\\components\\common\\editor\\tools\\magic-brush\\assets\\';
let generalScratchPath = 'src\\components\\common\\editor\\tools\\scratch-effect\\assets\\';

export function MagicBrushDraw({ imageUrl, setCroppedImageFor, onCancel, flagImage, flagInk }) {
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
    let inputFileForScratchForeground;
    let inputFileForScratchBackground;
    let chkForeground;
    let chkBackground;
    let imageGroundScratch;
    let imageBackgroundScratch;
    let defineScratchGroundFlag;
    let includeScratch;
    let count;
    let starScratch;
    let scratchBrush;
    let bigGreenLeafScratch;
    let autumnLeafScratch;
    let includeRemoveObject;

    const [resultImage, setResultImage] = useState();

    const preload = (p5) => {
        starBlue = p5.loadImage(generalPath + "star.png");
        bubble = p5.loadImage(generalPath + "bubble.png");
        starDust = p5.loadImage(generalPath + "stardust.png");
        flare = p5.loadImage(generalPath + "flare.png");
        water_droplets = p5.loadImage(generalPath + "water_droplets.png");
        cloud = p5.loadImage(generalPath + "cloud.png");

        starScratch = p5.loadImage(generalScratchPath + "starScratch.png");
        bigGreenLeafScratch = p5.loadImage(generalScratchPath + "big_green_leaf.png");
        autumnLeafScratch = p5.loadImage(generalScratchPath + "autumn_leaf.png");

        imageBrush = starBlue;
        backgroundImage = p5.loadImage(imageUrl);
        font = p5.loadFont('src\\components\\common\\editor\\tools\\text-p5\\templates_text\\AlexBrush-Regular.ttf');
    }
    let ctx;
    let cnv;
    const setup = (p5, canvasParentRef) => {
        cnv = p5.createCanvas(backgroundImage.width, backgroundImage.height).parent(canvasParentRef);
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

        let starScratchButton = p5.select('#star-scratch');
        starScratchButton.mousePressed(changeStarScratch);
        let bigGreenLeafScratchButton = p5.select('#green-leaf-scratch');
        bigGreenLeafScratchButton.mousePressed(changeBigGreenLeafScratch);
        let autumnLeafScratchButton = p5.select('#autumn-leaf-scratch');
        autumnLeafScratchButton.mousePressed(changeAutumnLeafScratch);



        // let saveSketchButton = p5.select('#saveSketchButton');
        // saveSketchButton.mouseClicked(Save);
        let saveButton = p5.select('#save-button');
        saveButton.mousePressed(() => Save(p5));
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
        let scratch = p5.select('#scratch-brush-options');
        scratch.mouseClicked(() => OpenCloseScratch(p5));
        let removeObjectButton = p5.select('#remove-object');
        removeObjectButton.mouseClicked(OpenCloseRemoveObject);
        let removeApplyObject = p5.select('#apply-remove-object');
        removeApplyObject.mousePressed(() => ApplyRemoving(p5));

        // count = 1;


        // if (includeScratch) {
        //     topLayer = p5.createGraphics(p5.width, p5.height);

        //     topLayer.background(200);
        //     topLayer.textSize(50);
        //     topLayer.textAlign(p5.CENTER);
        //     topLayer.text("SCRATCH ME", p5.width / 2, p5.height / 2);

        //     topLayer.imageMode(p5.CENTER);
        //     topLayer.strokeWeight(40);
        //     topLayer.blendMode(p5.REMOVE);
        // }
        // p5.colorMode(p5.HSB, 360, 100, 100, 100);

        // inputFileForScratchForeground = document.getElementById("file-input-scratch-fore");
        // inputFileForScratchForeground.addEventListener("change", handleFiles(p5), false);

        // inputFileForScratchBackground = document.getElementById("file-input-scratch-back");
        // inputFileForScratchBackground.addEventListener("change", () => {
        //     const fileList = this.files; /* now you can work with the file list */
        //     const file = fileList[0]
        //     console.log(file)

        //     var reader = new FileReader();

        //     reader.onload = function (e) {
        //         if (file.type === 'image/png' || file.type === 'image/jpeg') {
        //             imageGroundScratch = p5.createImg(e.target.result, '');
        //             imageGroundScratch.hide();
        //         } else { 
        //             imageGroundScratch = null;
        //         }
        //     }

        //     reader.readAsDataURL(file);
        // }, false);

        // chkForeground = p5.select("#checkForeground").elt;
        // chkBackground = p5.select("#checkBackground").elt;

        // chkForeground.onchange = function () {
        //     if (chkForeground.checked) {
        //         chkBackground.checked = false;
        //         inputFileForScratchForeground.disabled = "true";
        //         inputFileForScratchBackground.disabled = "false";
        //         defineScratchGroundFlag = true;
        //     }

        // }

        // chkBackground.onchange = function () {
        //     if (chkBackground.checked) {
        //         chkForeground.checked = false;
        //         inputFileForScratchBackground.disabled = "true";
        //         inputFileForScratchForeground.disabled = "false";
        //         defineScratchGroundFlag = false;
        //     }

        // }
    }

    function changeStarScratch() {
        scratchBrush = starScratch;
    }

    function changeBigGreenLeafScratch() {
        scratchBrush = bigGreenLeafScratch;
    }

    function changeAutumnLeafScratch() {
        scratchBrush = autumnLeafScratch;
    }

    function handleFiles() {
        // const fileList = this.files; /* now you can work with the file list */
        // const file = fileList[0]
        // console.log(file)

        // var reader = new FileReader();

        // reader.onload = function (e) {
        //     if (file.type === 'image/png' || file.type === 'image/jpeg') {
        //         imageGroundScratch = p5.createImg(e.target.result, '');
        //         imageGroundScratch.hide();
        //     } else {
        //         imageGroundScratch = null;
        //     }
        // }

        // reader.readAsDataURL(file);
    }

    // function SetupScratch(p5) {
    //     topLayer = p5.createGraphics(p5.width, p5.height);

    //     if (defineScratchGroundFlag) {
    //         topLayer.background(imageGroundScratch);
    //     }

    //     topLayer.textSize(50);
    //     topLayer.textAlign(p5.CENTER);
    //     topLayer.text("SCRATCH ME", p5.width / 2, p5.height / 2);

    //     topLayer.imageMode(p5.CENTER);
    //     topLayer.strokeWeight(40);
    //     topLayer.blendMode(p5.REMOVE);
    // }

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
        // ctx.filter = 'blur(20px)';
        // let radGrad = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);
        // ctx.fillStyle = "background: -webkit-linear-gradient(left, rgba(66, 10, 14, 0.2), transparent);  background: linear-gradient(to right, rgba(66, 10, 14, 0.2), transparent);  mix-blend-mode: darken; ";
        // ctx.fillStyle = radGrad;


        ctx.filter = 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)';
        let imgtmp = p5.createImg(imageUrl);
        imgtmp.hide();
        ctx.drawImage(imgtmp.elt, 0, 0);

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

        if (includeScratch) {
            p5.image(backgroundImage, 0, 0, p5.width, p5.height);

            if (p5.mouseIsPressed) {
                if (scratchBrush) {
                    topLayer.image(scratchBrush, p5.mouseX, p5.mouseY, scratchBrush.width / 4, scratchBrush.height / 4);
                }
                else {
                    topLayer.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
                }
            }

            p5.image(topLayer, 0, 0);
        }

        if (includeRemoveObject) {
            p5.strokeWeight(20);
            p5.stroke(0);
            p5.stroke(p5.color(255, 255, 255));
            if (p5.mouseIsPressed) {
                p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
            }
            
        }
    }

    function OpenCloseAdvanced() {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        obj3.style.display = 'none';
        obj2.style.display = 'block';
        obj1.style.display = 'none';
        obj4.style.display = 'none';
        imageBrushFlag = false;
        inkBrushFlag = true;
        includeScratch = false;
        includeRemoveObject = false;
    }

    function OpenCloseRemoveObject() {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        obj3.style.display = 'none';
        obj2.style.display = 'none';
        obj1.style.display = 'none';
        obj4.style.display = 'block';
        imageBrushFlag = false;
        inkBrushFlag = false;
        includeScratch = false;
        includeRemoveObject = true;
    }

    function OpenCloseScratch(p5) {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        obj3.style.display = 'none';
        obj2.style.display = 'none';
        obj1.style.display = 'block';
        obj4.style.display = 'none';
        imageBrushFlag = false;
        inkBrushFlag = false;
        includeScratch = true;
        includeRemoveObject = false;
        topLayer = p5.createGraphics(p5.width, p5.height);

        topLayer.background(200);
        topLayer.textSize(50);
        topLayer.textAlign(p5.CENTER);
        topLayer.text("SCRATCH ME", p5.width / 2, p5.height / 2);

        topLayer.imageMode(p5.CENTER);
        topLayer.strokeWeight(40);
        topLayer.blendMode(p5.REMOVE);
    }

    function OpenCloseMagicBrush() {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        obj3.style.display = 'block';
        obj2.style.display = 'none';
        obj1.style.display = 'none';
        obj4.style.display = 'none';
        imageBrushFlag = true;
        inkBrushFlag = false;
        includeScratch = false;
        includeRemoveObject = false;
    }

    function ApplyRemoving(p5) {
        // p5.saveCanvas("./tmp/image", "png");
        // bg = backgroundImage;
        // backgroundImage = '';
        // setTimeout(() => {
        //     p5.saveCanvas("./tmp/image_mask", "png");
        //     backgroundImage = bg;
        // }, 1000);

        const dataURL = document.querySelector("#sketch")
            .toDataURL();
        let bg = backgroundImage;
        cnv.drawingContext.globalCompositeOperation = 'destination-over';
        backgroundImage = 'black';
        
        p5.background(backgroundImage);
        // p5.clear();
        const dataMaskUrl = document.querySelector("#sketch")
            .toDataURL();
        console.log("🚀 ~ file: MagicBrushDraw.jsx:455 ~ ApplyRemoving ~ dataMaskUrl:", dataMaskUrl)
        backgroundImage = bg;
        p5.background(backgroundImage);
        // .replace("image/png", "image/octet-stream");
        axios({
            'method': 'POST',
            'url': 'https://techhk.aoscdn.com/api/tasks/visual/inpaint',
            'headers': {
                'X-API-KEY': 'wx5hka2amkq6b3c4l'
            },
            formData: {
                'sync': '1',
                'image_base64': dataURL,
                'mask_base64': dataMaskUrl
            }
        }, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            setResultImage(response.data.image);
        });
        console.log("🚀 ~ file: MagicBrushDraw.jsx:448 ~ ApplyRemoving ~ dataURL:", dataURL)

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

