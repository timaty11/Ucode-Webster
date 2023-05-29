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
import { ClassicBrush, mouseDragged, mousePressed } from "../draw-on-image/brushes/ClassicBrush";
import { SprayBrush } from "../draw-on-image/brushes/SprayBrush";
import { SimpleBrush, eraseBrush } from "../draw-on-image/brushes/SimpleBrush";
import { useColor } from "react-pick-color";
// import { WriteText, keyTyped, mouseReleased } from "../text-p5/Text";
import { Undo } from "./Undo";


let brushCounterLimit = 3;
let brushCounter = 0;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

let OpenCloseMagicBrushFlag;

let generalPath = 'src\\components\\common\\editor\\tools\\magic-brush\\assets\\';
let generalScratchPath = 'src\\components\\common\\editor\\tools\\scratch-effect\\assets\\';

export function MagicBrushDraw({ imageUrl, setCroppedImageFor, onCancel, flagImage, flagInk, color }) {
    let backgroundImage;
    let imageBrush;
    let starBlue;
    let bubble;
    let starDust;
    let flare;
    let imageBrushFlag = false;
    let inkBrushFlag = false;
    let InkIndex = 1;
    let font;
    let dandelion;
    let cloud;
    let topLayer;
    let imageGroundScratch;
    let includeScratch;
    let starScratch;
    let scratchBrush;
    let bigGreenLeafScratch;
    let autumnLeafScratch;
    let includeRemoveObject;
    let xmasBall;
    let includeImageSettings;
    let editedScratch = false;
    let includeImageDrawing;
    let includeTextWriting;
    let fontText = "Indie Flower";
    let graphicImageDraw;
    let edited = false;
    let isMouseInsideText;
    var flag = false;
    var strT = "";
    var x_pos = 40,
        y_pos = 40;

    const [resultImage, setResultImage] = useState();
    const [loading, setLoading] = useState(false);

    const preload = (p5) => {
        starBlue = p5.loadImage(generalPath + "star.png");
        bubble = p5.loadImage(generalPath + "bubble.png");
        starDust = p5.loadImage(generalPath + "stardust.png");
        flare = p5.loadImage(generalPath + "flare.png");
        dandelion = p5.loadImage(generalPath + "dandelion.png");
        cloud = p5.loadImage(generalPath + "cloud.png");

        starScratch = p5.loadImage(generalScratchPath + "starScratch.png");
        bigGreenLeafScratch = p5.loadImage(generalScratchPath + "big_green_leaf.png");
        autumnLeafScratch = p5.loadImage(generalScratchPath + "autumn_leaf.png");
        xmasBall = p5.loadImage(generalScratchPath + "Xmas_ball.png");

        imageBrush = starBlue;
        backgroundImage = p5.loadImage(imageUrl);
        font = p5.loadFont('src\\components\\common\\editor\\tools\\text-p5\\templates_text\\AlexBrush-Regular.ttf');
    }
    let ctx;
    let cnv;
    let graphic;
    let colorPicker;
    let colorPickerBackScratch;
    let colorPickerText;
    let previousState;
    let stateIndex = 0;
    let controlDown = false;
    let shiftDown = false;

    let undo;

    const setup = (p5, canvasParentRef) => {
        let scale;
        if (backgroundImage.height > 650) {
            scale = backgroundImage.height / 650;
            backgroundImage.height = 650;
            backgroundImage.width = backgroundImage.width / scale;
        }

        undo = new Undo(10);
        cnv = p5.createCanvas(backgroundImage.width, backgroundImage.height).parent(canvasParentRef); //w, h
        // spinVal = 0;
        // let cnv2 = p5.createCanvas(backgroundImage.width, backgroundImage.height).parent(canvasParentRef);;
        ctx = cnv.drawingContext;
        cnv.id('sketch');
        colorPicker = p5.createColorPicker('#050CC7');
        colorPickerBackScratch = p5.createColorPicker('#050CC7');
        colorPickerText = p5.createColorPicker('#050CC7');
        // colorPicker.position(1330, 120);
        let elt = document.getElementById('parent-color-picker');
        let parentColorPickerBack = document.getElementById('parent-color-picker-back');
        let parentColorPickerText = document.getElementById('color-pick-text');
        colorPicker.parent(elt);
        colorPickerBackScratch.parent(parentColorPickerBack);

        colorPickerText.parent(parentColorPickerText);

        p5.background(backgroundImage);

        let bubbleButton = p5.select('#bubbleBrush');
        bubbleButton.mousePressed(changeBrushToBubble);
        let starBlueButton = p5.select('#starBlueBrush');
        starBlueButton.mousePressed(changeBrushToStarBlue);
        let starDustButton = p5.select('#starDustBrush');
        starDustButton.mousePressed(changeBrushToStarDust);
        let flareButton = p5.select('#flareBrush');
        flareButton.mousePressed(changeBrushToFlare);

        let dandelionDropButton = p5.select('#dandelionBrush');
        dandelionDropButton.mousePressed(changeBrushTodandelionDrop);
        let cloudButton = p5.select('#cloudBrush');
        cloudButton.mousePressed(changeBrushToCloud);

        let starScratchButton = p5.select('#star-scratch');
        starScratchButton.mousePressed(changeStarScratch);
        let bigGreenLeafScratchButton = p5.select('#green-leaf-scratch');
        bigGreenLeafScratchButton.mousePressed(changeBigGreenLeafScratch);
        let autumnLeafScratchButton = p5.select('#autumn-leaf-scratch');
        autumnLeafScratchButton.mousePressed(changeAutumnLeafScratch);
        let xmasBallScratchButton = p5.select('#xmas-ball-scratch');
        xmasBallScratchButton.mousePressed(changeXmasBallScratch);

        let applyBackScratch = p5.select('#apply-back-scratch');
        applyBackScratch.mousePressed(() => {
            topLayer = p5.createGraphics(backgroundImage.width, backgroundImage.height);
            topLayer.background(colorPickerBackScratch.color());
            topLayer.imageMode(p5.CENTER);
            topLayer.strokeWeight(40);
            topLayer.blendMode(p5.REMOVE);
        });

        let fonts = document.getElementById('Satisfy');

        fonts.addEventListener('click', (e) => {
            fontText = fonts.id;
        }, false)

        let fonts2 = document.getElementById('Permanent Marker');

        fonts2.addEventListener('click', (e) => {
            fontText = fonts2.id;
        }, false)

        let fonts3 = document.getElementById('Alegreya Sans');

        fonts3.addEventListener('click', (e) => {
            fontText = fonts3.id;
        }, false)

        let fonts4 = document.getElementById('Orbitron');

        fonts4.addEventListener('click', (e) => {
            fontText = fonts4.id;
        }, false)
        

        let saveButton = p5.select('#save-button');
        saveButton.mousePressed(() => Save(p5));
        let cancelSketchButton = p5.select('#cancelSketchButton');
        cancelSketchButton.mousePressed(Cancel);

        let undoButton = p5.select('#undo-draw');
        let redoButton = p5.select('#redo-draw');

        undoButton.mousePressed(() => {
            undo.undo(p5);
        });

        redoButton.mousePressed(() => {
            undo.redo(p5);
        });

        let japInk = p5.select('#jap-ink-advanced');
        let ellipses = p5.select('#ellipses-advanced');
        let ballBrush = p5.select('#balls-advanced');
        let classicInk = p5.select('#classic-ink');
        let sprayBrush = p5.select('#spray-ink');

        ballBrush.mousePressed(() => { InkIndex = 3 });
        japInk.mousePressed(() => { InkIndex = 1 });
        ellipses.mousePressed(() => { InkIndex = 2 });
        classicInk.mousePressed(() => { InkIndex = 4 });
        sprayBrush.mousePressed(() => { InkIndex = 5 });

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
        let imageSettingsBrush = p5.select('#image-settings');
        imageSettingsBrush.mousePressed(OpenCloseImageSettings);
        let imageDrawingBrush = p5.select('#image-drawing-options');
        imageDrawingBrush.mousePressed(() => OpenCloseImageDrawing(p5));
        let textP5Button = p5.select('#text-p5');
        textP5Button.mousePressed(OpenCloseTextWrite);

        isMouseInsideText = (message, messageX, messageY) => {
            const messageWidth = p5.textWidth(message);
            // const messageTop = messageY - p5.textAscent();
            const messageTop = messageY - p5.textAscent();
            const messageBottom = messageY + p5.textDescent();

            return p5.mouseX > messageX && p5.mouseX < messageX + messageWidth &&
                p5.mouseY > messageTop && p5.mouseY < messageBottom;
            // return true;
        }
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

    function changeXmasBallScratch() {
        scratchBrush = xmasBall;
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

            case 4:
                ClassicBrush(p5);
                break;

            case 5:
                SprayBrush(p5);
                break;
        }
    }

    // function keyPressed(p5) {
    //     if (p5.keyCode === p5.UP_ARROW) {
    //         p5.save();
    //     }
    // }

    function changeBrushToBubble() {
        imageBrush = bubble;
    }

    function changeBrushTodandelionDrop() {
        imageBrush = dandelion;
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



    let eraseMode = false;
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
            p5.stroke(0, 0, 0);
        }

        if (includeScratch) {
            // topLayer.background(0, 0, 0);
            p5.image(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);

            if (p5.mouseIsPressed) {
                if (scratchBrush) {
                    topLayer.image(scratchBrush, p5.mouseX, p5.mouseY, scratchBrush.width / 4, scratchBrush.height / 4);
                }
                else {
                    topLayer.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
                }
            }
            editedScratch = true;
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

        if (includeTextWriting) {
            p5.background(backgroundImage);
            p5.fill(colorPickerText.color());
            p5.textFont(fontText);
            p5.textSize(64);
            p5.noStroke();
            // console.log(p5.textWidth())
            // console.log(p5.textAscent())
            // console.log(p5.textDescent())
            WriteText(p5);
        }

        if (includeImageDrawing) {
            let erase = p5.select('#image-drawing-erase');
            let pencil = p5.select('#image-drawing-pencil');
            let strokeWidth = document.getElementById('image-drawing-stroke-width').value;
            let eraseWidth = document.getElementById('image-drawing-eraser-width').value;

            erase.mousePressed(() => {
                eraseMode = true;
            });

            if (!eraseMode) {
                SimpleBrush(p5, colorPicker.color(), strokeWidth, graphicImageDraw);
                edited = true;
                // p5.image(graphicImageDraw, 0, 0);
            }
            else {
                eraseBrush(p5, eraseWidth, graphicImageDraw);
                // p5.image(graphicImageDraw, 0, 0);
            }

            pencil.mousePressed(() => {
                eraseMode = false;
            });
        }

        if (includeImageSettings) {
            let blur = document.getElementById('blur').value;
            let grayscale = document.getElementById('grayscale').value;
            let invert = document.getElementById('invert').value;
            let brightness = document.getElementById('brightness').value;
            let sepia = document.getElementById('sepia').value;
            let contrast = document.getElementById('contrast').value;
            let saturate = document.getElementById('saturate').value;

            let saveImageSettings = p5.select('#image-settings-save-button');
            saveImageSettings.mousePressed(() => {
                ctx.filter = `blur(${blur}px) grayscale(${grayscale}%) invert(${invert * 100}%) 
                 brightness(${brightness}%) sepia(${sepia}%) contrast(${contrast}%) saturate(${saturate}%)`;
                p5.image(backgroundImage, 0, 0);
            })
        }
    }

    function RemoveTopLayer() {
        if (editedScratch) {
            topLayer.remove();
        }
    }

    function OpenCloseAdvanced() {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        let obj5 = document.getElementById('image-setting');
        let obj6 = document.getElementById('image-drawing');
        let obj7 = document.getElementById('text-options');
        obj7.style.display = 'none';
        includeTextWriting = false;
        obj3.style.display = 'none';
        obj2.style.display = 'block';
        obj1.style.display = 'none';
        obj4.style.display = 'none';
        obj6.style.display = 'none';
        obj5.style.display = 'none';
        imageBrushFlag = false;
        inkBrushFlag = true;
        includeScratch = false;
        includeRemoveObject = false;
        includeImageDrawing = false;
        RemoveTopLayer();
    }

    function OpenCloseTextWrite() {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        let obj5 = document.getElementById('image-setting');
        let obj6 = document.getElementById('image-drawing');
        let obj7 = document.getElementById('text-options');
        obj7.style.display = 'block';
        includeTextWriting = true;
        obj3.style.display = 'none';
        obj2.style.display = 'none';
        obj1.style.display = 'none';
        obj4.style.display = 'none';
        obj6.style.display = 'none';
        obj5.style.display = 'none';
        imageBrushFlag = false;
        inkBrushFlag = false;
        includeScratch = false;
        includeRemoveObject = false;
        includeImageDrawing = false;
        RemoveTopLayer();
    }

    function OpenCloseImageSettings() {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        let obj5 = document.getElementById('image-setting');
        let obj6 = document.getElementById('image-drawing');
        let obj7 = document.getElementById('text-options');
        obj7.style.display = 'none';
        includeTextWriting = false;

        obj1.style.display = 'none';
        obj2.style.display = 'none';
        obj3.style.display = 'none';
        obj4.style.display = 'none';
        obj5.style.display = 'block';
        obj6.style.display = 'none';
        imageBrushFlag = false;
        inkBrushFlag = false;
        includeScratch = false;
        includeRemoveObject = false;
        includeImageSettings = true;
        includeImageDrawing = false;
        RemoveTopLayer();
    }

    function OpenCloseRemoveObject(p5) {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        let obj5 = document.getElementById('image-setting');
        let obj6 = document.getElementById('image-drawing');
        let obj7 = document.getElementById('text-options');
        obj7.style.display = 'none';
        includeTextWriting = false;

        obj3.style.display = 'none';
        obj2.style.display = 'none';
        obj1.style.display = 'none';
        obj4.style.display = 'block';
        obj5.style.display = 'none';
        obj6.style.display = 'none';
        imageBrushFlag = false;
        inkBrushFlag = false;
        includeScratch = false;
        includeRemoveObject = true;
        includeImageDrawing = false;

        graphic = p5.createGraphics(backgroundImage.width, backgroundImage.height);
        graphic.id("myGraphics");
        graphic.background(220, 10);
        p5.image(graphic, 0, 0);
        RemoveTopLayer();
        // p5.clear();
        // p5.background(backgroundImage);
    }

    function OpenCloseScratch(p5) {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        let obj5 = document.getElementById('image-setting');
        let obj6 = document.getElementById('image-drawing');
        let obj7 = document.getElementById('text-options');
        obj7.style.display = 'none';
        includeTextWriting = false;

        obj3.style.display = 'none';
        obj2.style.display = 'none';
        obj1.style.display = 'block';
        obj4.style.display = 'none';
        obj5.style.display = 'none';
        obj6.style.display = 'none';
        includeImageDrawing = false;
        imageBrushFlag = false;
        inkBrushFlag = false;
        includeScratch = true;
        includeRemoveObject = false;
        topLayer = p5.createGraphics(backgroundImage.width, backgroundImage.height);

        topLayer.background(imageGroundScratch ? imageGroundScratch : 200);
        // topLayer.textSize(50);
        // topLayer.textAlign(p5.CENTER);
        // topLayer.text("SCRATCH ME", backgroundImage.width / 2, backgroundImage.height / 2);

        topLayer.imageMode(p5.CENTER);
        topLayer.strokeWeight(40);
        topLayer.blendMode(p5.REMOVE);
    }

    function OpenCloseMagicBrush() {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        let obj5 = document.getElementById('image-setting');
        let obj6 = document.getElementById('image-drawing');
        let obj7 = document.getElementById('text-options');
        obj7.style.display = 'none';
        includeTextWriting = false;

        obj3.style.display = 'block';
        obj2.style.display = 'none';
        obj1.style.display = 'none';
        obj4.style.display = 'none';
        obj5.style.display = 'none';
        obj6.style.display = 'none';
        includeImageDrawing = false;
        imageBrushFlag = true;
        inkBrushFlag = false;
        includeScratch = false;
        includeRemoveObject = false;
        RemoveTopLayer();
    }

    function OpenCloseImageDrawing(p5) {
        let obj1 = document.getElementById('scratch-brushes');
        let obj2 = document.getElementById('advanced-brushes');
        let obj3 = document.getElementById('magic-brushes');
        let obj4 = document.getElementById('remove-object-from-image');
        let obj5 = document.getElementById('image-setting');
        let obj6 = document.getElementById('image-drawing');
        let obj7 = document.getElementById('text-options');
        obj7.style.display = 'none';
        includeTextWriting = false;

        obj3.style.display = 'none';
        obj2.style.display = 'none';
        obj1.style.display = 'none';
        obj4.style.display = 'none';
        obj5.style.display = 'none';
        obj6.style.display = 'block';
        imageBrushFlag = false;
        inkBrushFlag = false;
        includeScratch = false;
        includeRemoveObject = false;
        includeImageDrawing = true;
        // graphicImageDraw = p5.createGraphics(backgroundImage.height, backgroundImage.width);
        // graphicImageDraw.background(220, 10);
        // p5.image(graphicImageDraw, 0, 0);
        RemoveTopLayer();
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
            console.log("🚀 ~ file: MagicBrushDraw.jsx:604 ~ ApplyRemoving ~ res:", res)
            console.log(res);
            setResultImage("data:image/png;base64," + res.data.data.image);

            let newBackgroundImage = "data:image/png;base64," + res.data.data.image;
            // setCroppedImageFor("data:image/png;base64," + res.data.data.image);
            backgroundImage = p5.loadImage(newBackgroundImage,
                img => {
                    p5.background(img);
                });

            graphic.remove();
        }).catch(err => {
            console.log(err.message);
        })
    }

    // const mousePressed = (p5) => {

    // }

    function Save(p5) {
        p5.save();
    }

    const Cancel = () => {
        onCancel();
    }

    function keyPressed(p5) {
        // if (p5.keyCode == 90 && (p5.ctrlKey || p5.metaKey)) {
        //     p5.undoToPreviousState();
        // }
        if (p5.key == p5.CODED) {
            if (p5.keyCode == p5.CONTROL)
                controlDown = true;
            if (p5.keyCode == p5.SHIFT)
                shiftDown = true;
            return;
        }
        // Check if we pressed CTRL+Z or CTRL+SHIFT+Z
        if (controlDown) {
            if (p5.keyCode == 'Z') {
                if (shiftDown)
                    undo.redo(p5);
                else
                    undo.undo(p5);
            }
            return;
        }
    }

    function keyReleased(p5) {
        // Remember if CTRL or SHIFT are pressed or not
        if (p5.key == p5.CODED) {
            if (p5.keyCode == p5.CONTROL)
                controlDown = false;
            if (p5.keyCode == p5.SHIFT)
                shiftDown = false;
        }
    }

    function mouseReleased() {
        flag = !true;
    }

    // function mouseReleaseFunc(p5) {
    //     mouseReleased();
    //     // p5.textAscent();
    //     if (edited) {
    //         // undo.takeSnapshot(p5);
    //     }

    // }

    function mouseClick() {

    }

    function WriteText(p5) {
        if (p5.mouseIsPressed) {
            if (flag) {
                p5.text(strT, p5.mouseX, p5.mouseY);
                x_pos = p5.mouseX;
                y_pos = p5.mouseY;
            }
        } else {

            p5.text(strT, x_pos, y_pos);
        }
    }

    function mouseClicked(p5) {
        // console.log("🚀 ~ file: Text.js:23 ~ mouseClicked ~ p5:", p5.textWidth())
        if (includeTextWriting) {
            if (isMouseInsideText(strT, x_pos, y_pos, p5) && !flag) {
                flag = true;
            }
        }

    }

    function keyTyped(p5) {
        let symb = strT.slice(-1);
        if (symb !== p5.key) {
            strT += p5.key;
        }
        return false;
    }

    return (
        <div className="container w-full h-screen flex justify-center items-center">
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

            <Sketch
                preload={preload}
                setup={setup}
                draw={draw}
                mousePressed={mousePressed}
                keyPressed={keyPressed}
                mouseDragged={mouseDragged}
                keyTyped={keyTyped}
                mouseClicked={mouseClicked}
                mouseReleased={mouseReleased}
            />
        </div>
    )
}

function incrementBrushCounter() {
    brushCounter++;
    if (brushCounter > brushCounterLimit) {
        brushCounter = 0;
    }
}

