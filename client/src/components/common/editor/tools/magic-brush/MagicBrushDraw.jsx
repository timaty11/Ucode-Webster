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
    let  dandelion ;
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
    const [loading, setLoading] = useState(false);

    const preload = (p5) => {
        starBlue = p5.loadImage(generalPath + "star.png");
        bubble = p5.loadImage(generalPath + "bubble.png");
        starDust = p5.loadImage(generalPath + "stardust.png");
        flare = p5.loadImage(generalPath + "flare.png");
         dandelion  = p5.loadImage(generalPath + "dandelion.png");
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
    let graphic;
    let spinVal;
    const setup = (p5, canvasParentRef) => {
        cnv = p5.createCanvas(backgroundImage.width, backgroundImage.height).parent(canvasParentRef);
        spinVal = 0;
        // let cnv2 = p5.createCanvas(backgroundImage.width, backgroundImage.height).parent(canvasParentRef);;
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

        let  dandelionDropButton = p5.select('#dandelionBrush');
         dandelionDropButton.mousePressed(changeBrushTodandelionDrop);
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
        removeObjectButton.mouseClicked(() => OpenCloseRemoveObject(p5));
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

    function changeBrushTodandelionDrop() {
        imageBrush =  dandelion ;
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


        // ctx.filter = 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)';
        // let imgtmp = p5.createImg(imageUrl);
        // imgtmp.hide();
        // ctx.drawImage(imgtmp.elt, 0, 0);

        if (p5.mouseIsPressed && imageBrush && imageBrushFlag) {
            p5.imageMode(p5.CENTER);

            incrementBrushCounter();
            if (brushCounter == 0) {
                let size = random(10, 50);
                p5.tint(255, random(155, 255));
                // p5.translate(p5.mouseX, p5.mouseY);
                // p5.rotate(p5.PI / p5.random( (-30, 30)));
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

            graphic.strokeWeight(20);
            graphic.stroke(0);
            graphic.stroke(p5.color(255, 255, 255));
            if (p5.mouseIsPressed) {
                graphic.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
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

    function OpenCloseRemoveObject(p5) {
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

        graphic = p5.createGraphics(backgroundImage.width, backgroundImage.height);
        graphic.id("myGraphics");
        graphic.background(220, 10);
        p5.image(graphic, 0, 0);
        // p5.clear();
        // p5.background(backgroundImage);
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
        topLayer = p5.createGraphics(backgroundImage.width, backgroundImage.height);

        topLayer.background(200);
        topLayer.textSize(50);
        topLayer.textAlign(p5.CENTER);
        topLayer.text("SCRATCH ME", backgroundImage.width / 2, backgroundImage.height / 2);

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

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = window.atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    async function ApplyRemoving(p5) {
        const dataURL = document.querySelector("#sketch")
            .toDataURL("image/png");

        graphic.drawingContext.globalCompositeOperation = 'destination-over';
        graphic.background(p5.color(0, 0, 0));

        p5.clear();
        p5.background(backgroundImage);

        const dataMaskUrl = document.querySelector("#myGraphics")
            .toDataURL("image/png");

        let image_file = dataURLtoFile(dataURL, "src\\components\\common\\editor\\tools\\magic-brush\\tmp\\image_file.png");
        let mask_file = dataURLtoFile(dataMaskUrl, "src\\components\\common\\editor\\tools\\magic-brush\\tmp\\mask_file.png");
        const formData = new FormData();
        formData.append('sync', '1');


        formData.append('image_file', image_file, image_file.name);
        formData.append('mask_file', mask_file, mask_file.name);
        formData.append('return_type', '2');

        axios({
            'method': 'POST',
            'url': 'https://techhk.aoscdn.com/api/tasks/visual/inpaint',
            'headers': {
                'X-API-KEY': 'wx5hka2amkq6b3c4l'
            },
            data: formData
        }, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        }).then(res => {
            console.log(res);
            setResultImage("data:image/png;base64," + res.data.data.image);

            let newBackgroundImage = "data:image/png;base64," + res.data.data.image;
            backgroundImage = p5.loadImage(newBackgroundImage,
                img => {
                    p5.background(img);
                });
            
            // p5.image(backgroundImage, 0, 0);
            // p5.background(backgroundImage);
            graphic.remove();
        }).catch(err => {
            console.log(err.message);
        })
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
            {/* {
                loading ?

                    <div className="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 opacity-20">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                :
                <div>{resultImage ? <img src={resultImage}></img> : null}</div>
            } */}

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

