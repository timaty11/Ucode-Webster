import { useState } from "react";

import Cropper from "react-easy-crop";

import getCroppedImg from "./cropImage.js"

const aspectRatios = [
    { value: 4 / 3, text: "4/3" },
    { value: 16 / 9, text: "16/9" },
    { value: 1 / 2, text: "1/2" }
]

export function ImageCropDialog({ imageUrl, zoomInit, cropInit, aspectInit, onCancel, setCroppedImageFor, resetImage }) {
    if (zoomInit == null) {
        zoomInit = 1;
    }

    if (cropInit == null) {
        cropInit = { x: 0, y: 0 };
    }

    if (aspectInit == null) {
        aspectInit = aspectRatios[0];
    }

    const [zoom, setZoom] = useState(zoomInit);
    const [crop, setCrop] = useState(cropInit);
    const [aspect, setAspect] = useState(aspectInit);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropChange = (crop) => {
        setCrop(crop);
    };

    const onZoomChange = (zoom) => {
        setZoom(zoom);
    };

    const onAspectChange = (e) => {
        const value = e.target.value;
        const ratio = aspectRatios.find(ratio => ratio.value == value);
        setAspect(ratio);
    };

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log("🚀 ~ file: ImageCropDialog.jsx:46 ~ onCropComplete ~ croppedAreaPixels:", croppedAreaPixels)
        setCroppedAreaPixels(croppedAreaPixels)
    };

    const onCrop = async () => {
        const croppedImageUrl = await getCroppedImg(imageUrl, croppedAreaPixels);
        setCroppedImageFor(crop, zoom, aspect, croppedImageUrl);
    };

    const onResetImage = () => {
        resetImage(imageUrl);
    };

    return (
        <div className="relative w-4/5 h-3/4">
            <div className="backdrop fixed top-0 bottom-0 right-0 left-0"></div>
            <div className="crop-container w-full h-64">
                <Cropper
                    image={imageUrl}
                    zoom={zoom}
                    crop={crop}
                    aspect={aspect.value} 
                    onCropChange={onCropChange}
                    onZoomChange={onZoomChange}
                    onCropComplete={onCropComplete}
                />
            </div>
            <div className="controls fixed bottom-0 w-full">
                <input
                    type="range"
                    min={1}
                    max={3}
                    step={0.1}
                    value={zoom}
                    onInput={e => onZoomChange(e.target.value)}
                    className="slider w-1/2 "
                ></input>
                <select onChange={onAspectChange}>
                    {aspectRatios.map(aspectRatio => (
                        <option
                            key={aspectRatio.text}
                            defaultValue={aspectRatio.value}
                            value={aspectRatio.value}
                            selected={aspectRatio.value === aspect.value}
                        >{aspectRatio.text}</option>
                    ))}
                </select>
                <div className="button-area" style={{ color: "#c8c8c8" }}>
                    <button className="p-5 border-solid border-2 border-slate-400 mr-5" onClick={() => onCancel()}>Cancel</button>
                    <button className="p-5 border-solid border-2 border-slate-400 mr-5" onClick={onResetImage}>Reset</button>
                    <button className="p-5 border-solid border-2 border-slate-400" onClick={onCrop}>Crop</button>
                </div>
            </div>
        </div>
    )
}